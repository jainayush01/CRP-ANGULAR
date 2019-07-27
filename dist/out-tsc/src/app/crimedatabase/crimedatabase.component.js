import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from '../../assets/Constant';
import { Report_DATA } from '../../assets/Constant';
import { FIR_DATA } from '../../assets/Constant';
var CrimedatabaseComponent = /** @class */ (function () {
    function CrimedatabaseComponent(router) {
        this.router = router;
        this.displayedColumns = ['position', 'Reason', 'name', 'Mobile', 'Address'];
        this.emerdataSource = ELEMENT_DATA;
        this.displayedColumns1 = ['position', 'RegistrationNo',
            'Name', 'Emailid',
            'Mobile', 'Description', 'Address',
            'City',
            'State',
            'PinCode'];
        this.firdataSource = FIR_DATA;
        this.displayedColumns2 = ['position', 'descript'];
        this.reportcrimeSource = Report_DATA;
    }
    CrimedatabaseComponent.prototype.ngOnInit = function () {
    };
    CrimedatabaseComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['home']);
    };
    CrimedatabaseComponent = tslib_1.__decorate([
        Component({
            selector: 'app-crimedatabase',
            templateUrl: './crimedatabase.component.html',
            styleUrls: ['./crimedatabase.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CrimedatabaseComponent);
    return CrimedatabaseComponent;
}());
export { CrimedatabaseComponent };
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
//# sourceMappingURL=crimedatabase.component.js.map