import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PortalService } from '../portal.service';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged: boolean = false;
  success: boolean = false;
  loginForm: FormGroup;
  msg: string;
  officerData = {
    email: 'admin',
    pass: 'admin'
  }

  constructor(
    private formBuilder: FormBuilder,
    private portalService: PortalService,
    private router: Router,
    private rest: RestService

  ) { }


  hide = true;
  matcher = new ErrorStateMatcher();
  ngOnInit() {
    this.portalService.currentLogged.subscribe(value => {
      console.log(value);
      this.logged = value
    });

    this.logged = sessionStorage.getItem('login1') ? true : false;
    this.logged ? this.router.navigate(['crimedatabase']) : this.router.navigate(['login']);

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  async login() {

    const { email, password } = this.loginForm.value;

    console.log(this.loginForm);

    // if (this.officerData.email === email && this.officerData.pass === password) {
    //   console.log('true');

    //   sessionStorage.setItem('login1', 'true');
    //   this.router.navigate(['crimedatabase']);

    // } else {

    // }

    try {
      console.log('response = > ');
      const resp = await this.rest.post('officer/login', { userName: email, password });
      console.log('response = > ', resp);

      const { code, data, message } = resp;

      if (data) {
        sessionStorage.setItem('login1', 'true');
        sessionStorage.setItem('token', JSON.stringify(data));
        this.msg = "";
        this.router.navigate(['crimedatabase']);
      } else {
        this.msg = message;
      }

    } catch (error) {
      console.log('error', error);
      console.log('false');
      this.msg = "SERVER ERROR";
    }

  }
}