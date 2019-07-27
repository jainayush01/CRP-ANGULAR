import { Component, OnInit } from '@angular/core';
//import { FIR_DATA } from '../../assets/Constant'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-firform',
  templateUrl: './firform.component.html',
  styleUrls: ['./firform.component.css']
})
export class FIRFormComponent implements OnInit {

  FIRform: FormGroup;
  states: any;
  registerationid: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rest: RestService
  ) {
    this.states = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {

    this.FIRform = this.formBuilder.group({
      RegistrationNo: [''],
      Name: [''],
      Emailid: [''],
      Mobile: [''],
      Description: [''],
      Address: [''],
      City: [''],
      State: [''],
      PinCode: [''],
      FormControlFile: ['none'],
      status: ['Complaint Registered']
    })

    if (this.states) {
      const { fullName, mobileNo, email } = this.states.data;
      this.FIRform.patchValue({
        //RegistrationNo: FIR_DATA.length + 1,
        Name: fullName,
        Emailid: email,
        Mobile: mobileNo
      })
    }
  }
  async onSubmit() {
    console.log(this.FIRform.value);
    const val = {
      position: this.FIRform.value.position,
      registrationNo: this.FIRform.value.RegistrationNo,
      name: this.FIRform.value.Name,
      email: this.FIRform.value.Emailid,
      mobile: this.FIRform.value.Mobile,
      description: this.FIRform.value.Description,
      address: this.FIRform.value.Address,
      city: this.FIRform.value.City,
      state: this.FIRform.value.State,
      pincode: this.FIRform.value.PinCode,
      status: this.FIRform.value.status,
      // file: this.FIRform.value.file
    }
      ;

    // console.log(val);
    // FIR_DATA.push(val);

    // console.log(FIR_DATA);
    // const tab=this.FIRform.status;
    // console.log(tab);
    //  alert("complaint registered successfully");
    // this.router.navigate(['home'])
    const resp = await this.rest.post('fir/add', {
      "registerationid": val.registrationNo,
      "status": val.status,
      "name": val.name,
      "email": val.email,
      "mobile": val.mobile,
      "description": val.description,
      // "chooseafile": 'abc.pic',
      // "chooseafile": val.file,
      "address": val.address,
      "city": val.city,
      "state": val.state,
      "pincode": val.pincode
    });

    console.log(resp);
    this.registerationid = resp.data.registerationid;

  }

}
