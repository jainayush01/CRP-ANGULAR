import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FIR_DATA } from '../../assets/Constant';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
var FIRFormComponent = /** @class */ (function () {
    function FIRFormComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.state = this.router.getCurrentNavigation().extras.state;
    }
    FIRFormComponent.prototype.ngOnInit = function () {
        this.FIRform = this.formBuilder.group({
            RegistrationNo: [new Date().getTime()],
            Name: [''],
            Emailid: [''],
            Mobile: [''],
            Description: [''],
            Address: [''],
            City: [''],
            State: [''],
            PinCode: [''],
            FormControlFile: ['']
        });
        if (this.state) {
            var _a = this.state.data, fullName = _a.fullName, mobileNo = _a.mobileNo, email = _a.email;
            this.FIRform.patchValue({
                RegistrationNo: FIR_DATA.length + 1,
                Name: fullName,
                Emailid: email,
                Mobile: mobileNo
            });
        }
    };
    FIRFormComponent.prototype.onSubmit = function () {
        console.log(this.FIRform);
        var val = {
            position: FIR_DATA.length + 1,
            RegistrationNo: this.FIRform.value.RegistrationNo,
            Name: this.FIRform.value.Name,
            Emailid: this.FIRform.value.Emailid,
            Mobile: this.FIRform.value.Mobile,
            Description: this.FIRform.value.Description,
            Address: this.FIRform.value.Address,
            City: this.FIRform.value.City,
            State: this.FIRform.value.State,
            PinCode: this.FIRform.value.PinCode,
            status: 0
        };
        console.log(val);
        FIR_DATA.push(val);
        console.log(FIR_DATA);
    };
    FIRFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-firform',
            templateUrl: './firform.component.html',
            styleUrls: ['./firform.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], FIRFormComponent);
    return FIRFormComponent;
}());
export { FIRFormComponent };
//# sourceMappingURL=firform.component.js.map