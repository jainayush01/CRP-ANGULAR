import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ChkstatusComponent = /** @class */ (function () {
    function ChkstatusComponent(router) {
        this.router = router;
        this.reportStatus = ["Complaint Registered", "Viewed by Officer", "Action Taken", "File Closed"];
        this.FIR_RPT = {
            position: 1,
            RegistrationNo: 12,
            Name: 'Bunty',
            Emailid: 'abc',
            Mobile: 12345,
            Description: 'kuch bhi',
            Address: 'Marathalli',
            City: 'Bengaluru',
            State: 'Karnatka',
            PinCode: 560093,
            status: 3
        };
        this.status = 10;
        this.statusProgress = 0;
        this.state = this.router.getCurrentNavigation().extras.state;
        console.log(this.state);
    }
    ChkstatusComponent.prototype.ngOnInit = function () {
        var totalSteps = 4;
        this.status = this.statusProgress / totalSteps * 100;
    };
    ChkstatusComponent.prototype.update = function () {
        var totalSteps = 100;
        this.status = this.statusProgress / totalSteps * 100;
    };
    ChkstatusComponent = tslib_1.__decorate([
        Component({
            selector: 'app-chkstatus',
            templateUrl: './chkstatus.component.html',
            styleUrls: ['./chkstatus.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ChkstatusComponent);
    return ChkstatusComponent;
}());
export { ChkstatusComponent };
//# sourceMappingURL=chkstatus.component.js.map