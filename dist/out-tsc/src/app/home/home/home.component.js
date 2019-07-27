import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    // emailFormControl = new FormControl('', [
    //   Validators.required,
    //   Validators.email,
    // ]);
    HomeComponent.prototype.ngOnInit = function () {
        this.FIR = this.formBuilder.group({
            fullName: ['', Validators.required],
            mobileNo: ['', Validators.required],
            email: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])]
        });
    };
    HomeComponent.prototype.routonemergencyform = function () {
        this.router.navigate(['emergencyForm']);
    };
    HomeComponent.prototype.RegisterFIR = function () {
        this.router.navigate(['firform']);
    };
    HomeComponent.prototype.chkstatus = function () {
        //console.log("check check");
        console.log(this.RegNumber);
        if (this.RegNumber == this.FIR_DATA.reg) {
            this.router.navigate(['chkstatus', {
                    state: this.RegNumber
                }]);
        }
        ;
    };
    HomeComponent.prototype.firform = function () {
        console.log(this.FIR.value);
        this.router.navigate(['firform'], {
            state: { data: this.FIR.value }
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map