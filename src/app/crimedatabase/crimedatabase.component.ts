import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ELEMENT_DATA, EmergencyDatabase, FIRDatabase } from '../../assets/Constant'
import { Report_DATA } from '../../assets/Constant'
import {reportACrime} from '../../assets/Constant'

//import { FIR_DATA } from '../../assets/Constant'
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-crimedatabase',
  templateUrl: './crimedatabase.component.html',
  styleUrls: ['./crimedatabase.component.css']
})
export class CrimedatabaseComponent implements OnInit {

  constructor(private router: Router, private rest: RestService) { }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['home']);
  }
  displayedColumns: string[] = ['position', 'Reason', 'Name', 'Mobile', 'Address'];
  //emerdataSource = ELEMENT_DATA;
  emerdataSource: any[] = [];

  displayedColumns1: string[] = [
    'position', 'RegistrationNo', 'Name', 'Emailid',
    'Mobile', 'Description', 'Address', 'City', 'State', 'PinCode', 'status'
  ];
  firdataSource: any[] = [];
  async ngOnInit() {

    try {
      const respEmergency = await this.rest.get('emergency/getall');
      const respFir = await this.rest.get('fir/getall');
      console.log(respEmergency, respFir);
      const firData = respFir.data
      this.firdataSource = firData.map((e: FIRDatabase, i: any) => {
        return {
          position: i,
          RegistrationNo: e.registerationid,
          Name: e.name,
          Emailid: e.email,
          Mobile: e.mobile,
          Description: e.description,
          Address: e.address,
          City: e.city,
          State: e.state,
          PinCode: e.pincode,
          status: e.status
        }
      })
      const emergencyData = respEmergency.data
      this.emerdataSource = emergencyData.map((e: EmergencyDatabase, i: any) => {
        return { position: i, Reason: e.reason, Name: e.name, Mobile: e.mobile, Address: e.address }
      });
    } catch (error) {
      console.log(error);


    }


  }
  //firdataSource = FIR_DATA;

  displayedColumns2: string[] = ['position', 'descript'];
  reportcrimeSource: any[]= [];
}
// export interface EmergencyDatabase {
  //   position: number;
  //   Reason: string;
  //   name: string;
  //   Mobile: number;
  //   Address: string;

  // }

  // const ELEMENT_DATA: EmergencyDatabase[] = [
    //   { position: 1, Reason: 'ChildAbuse', name: 'Bunty', Mobile: 12345, Address: 'Hydrabad' },
    //   { position: 2, Reason: 'Robbery', name: 'Ramesh', Mobile: 123, Address: 'Delhi' },
    // ];


    // export interface FIRDatabase {
      //   position: number;
      //   registrationno: number;
      //   name: string;
      //   emailid: string;
      //   mobile: number;
      //   description: string;
      //   address: string;

      // }

      // const FIR_DATA: FIRDatabase[] = [
        //   { position: 1, registrationno: 12, name: 'Bunty', emailid: 'abc', mobile: 12345, description: 'kuch bhi', address: 'Hydrabad' },
        //   { position: 2, registrationno: 23, name: 'Ramesh', emailid: 'abc', mobile: 123, description: 'murder', address: 'Delhi' },
        // ];

        // export interface reportACrime {
          //   position: number;
          //   descript: string;
          // }
          // export let Report_DATA: reportACrime[] = [
            //   { position: 1, descript: 'uske ghar chor aye hai' }
            // ]