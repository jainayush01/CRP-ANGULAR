import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PortalService } from '../portal.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, portalService, router) {
        this.formBuilder = formBuilder;
        this.portalService = portalService;
        this.router = router;
        this.logged = false;
        this.success = false;
        this.officerData = {
            email: 'admin',
            pass: 'admin'
        };
        this.hide = true;
        this.matcher = new ErrorStateMatcher();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portalService.currentLogged.subscribe(function (value) {
            console.log(value);
            _this.logged = value;
        });
        this.logged = sessionStorage.getItem('login1') ? true : false;
        this.logged ? this.router.navigate(['crimedatabase']) : this.router.navigate(['login']);
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _a = this.loginForm.value, email = _a.email, password = _a.password;
        console.log(this.loginForm);
        if (this.officerData.email === email && this.officerData.pass === password) {
            console.log('true');
            sessionStorage.setItem('login1', 'true');
            this.router.navigate(['crimedatabase']);
        }
        else {
            console.log('false');
        }
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            PortalService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map