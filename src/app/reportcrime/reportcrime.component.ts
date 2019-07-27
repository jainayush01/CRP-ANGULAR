import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Report_DATA } from '../../assets/Constant';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';



@Component({
  selector: 'app-reportcrime',
  templateUrl: './reportcrime.component.html',
  styleUrls: ['./reportcrime.component.css']
})
export class ReportcrimeComponent implements OnInit {
_id:Number;
  constructor(
    private router: Router, private formBuilder: FormBuilder,
    private rest: RestService
  ) { }

  ReportACrime: FormGroup
  ngOnInit() {
    this.ReportACrime = this.formBuilder.group({
      Description: [''],
      FormControlFile: ['']
    })
  }
  async onSubmit() {

    console.log(this.ReportACrime);
    const data = { position: Report_DATA.length, descript: this.ReportACrime.value.Description};
    // Report_DATA.push(data);
    // alert("complaint registered successfully");
    // this.router.navigate(['home'])

    const resp = await this.rest.post('crime/add', {
      "description": data.descript,
     // "chooseafile": data.file
    });
    console.log(resp);
    this._id = resp.data._id;
  }
}
