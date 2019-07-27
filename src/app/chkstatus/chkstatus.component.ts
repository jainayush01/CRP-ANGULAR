import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FIR_DATA } from '../../assets/Constant'
import { FormGroup, FormBuilder } from '@angular/forms';
import { FIRFormComponent } from '../firform/firform.component';

@Component({
  selector: 'app-chkstatus',
  templateUrl: './chkstatus.component.html',
  styleUrls: ['./chkstatus.component.css']
})
export class ChkstatusComponent implements OnInit {
  regNumber: any;
  reportStatus = ["Complaint Registered", "Viewed by Officer", "Action Taken", "File Closed"];
  
  status:any;
  statusProgress = 0;
new=0;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.regNumber = this.router.getCurrentNavigation().extras.state;
    this.new=this.regNumber;
    console.log(this.new);
  }

  ngOnInit() {
    const fir = FIR_DATA.find(fir =>true ) //fir.RegistrationNo== 12)
    console.log('load all user ', fir);
    const stat=this.reportStatus[fir.status];
   this.statusProgress=fir.status;
   console.log(stat);
    console.log(this.regNumber);
    
    
    this.status=(fir.status+1)*100/4;
  }
  // update(){
  //   this.statusProgress=FIR_DATA.
  // }


}
