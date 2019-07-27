import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ELEMENT_DATA } from '../../assets/Constant'
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-emergencyform',
  templateUrl: './emergencyform.component.html',
  styleUrls: ['./emergencyform.component.css']
})
export class EmergencyformComponent implements OnInit {
_id: Number;
  constructor(
    private router: Router,private formBuilder: FormBuilder,private rest: RestService) { }
  Emergency: FormGroup
  ngOnInit() {
    this.Emergency = this.formBuilder.group({
      Reason: [''],
      Name: [''],
      Mobile: [''],
      Address: ['']
    })
  }
  async onSubmit() {
    console.log(this.Emergency);
    const data = {
      position: ELEMENT_DATA.length+1,
      Reason: this.Emergency.value.Reason,
      Name: this.Emergency.value.Name,
      Mobile: this.Emergency.value.Mobile,
      Address: this.Emergency.value.Address
    };

const resp=await this.rest.post('emergency/add',{
"reason":data.Reason,
"name":data.Name,
"mobile":data.Mobile,
"address":data.Address
})

    // ELEMENT_DATA.push(data);
    // alert("complaint registered successfully");
    // this.router.navigate(['home'])

    console.log(resp);
    this._id = resp.data._id;
  }

}
