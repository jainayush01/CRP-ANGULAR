import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ELEMENT_DATA } from '../../assets/Constant';
var EmergencyformComponent = /** @class */ (function () {
    function EmergencyformComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    EmergencyformComponent.prototype.ngOnInit = function () {
        this.Emergency = this.formBuilder.group({
            Reason: [''],
            Name: [''],
            Mobile: [''],
            Address: ['']
        });
    };
    EmergencyformComponent.prototype.onSubmit = function () {
        console.log(this.Emergency);
        var data = {
            position: ELEMENT_DATA.length + 1,
            Reason: this.Emergency.value.Reason,
            Name: this.Emergency.value.Name,
            Mobile: this.Emergency.value.Mobile,
            Address: this.Emergency.value.Address
        };
        ELEMENT_DATA.push(data);
    };
    EmergencyformComponent = tslib_1.__decorate([
        Component({
            selector: 'app-emergencyform',
            templateUrl: './emergencyform.component.html',
            styleUrls: ['./emergencyform.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], EmergencyformComponent);
    return EmergencyformComponent;
}());
export { EmergencyformComponent };
//# sourceMappingURL=emergencyform.component.js.map