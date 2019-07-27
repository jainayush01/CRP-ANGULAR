import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
//import { runInThisContext } from 'vm';
//import { FIR_DATA } from 'src/assets/Constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  RegNumber: number;

  FIR: FormGroup;
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  ngOnInit() {
    this.FIR = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    });
  }

  routonemergencyform() {
    this.router.navigate(['emergencyForm'])
  }

  RegisterFIR() {
    this.router.navigate(['firform'])
  }

  chkstatus() {
    //console.log("check check");
    console.log(this.RegNumber);

    this.router.navigate(['chkstatus', {
      state: this.RegNumber
    }]);
  }

  firform() {
    console.log(this.FIR.value);
    this.router.navigate(['firform'], {
      state: { data: this.FIR.value }
    });
  }

}
