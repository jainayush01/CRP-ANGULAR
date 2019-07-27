import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Report_DATA } from '../../assets/Constant';
var ReportcrimeComponent = /** @class */ (function () {
    function ReportcrimeComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ReportcrimeComponent.prototype.ngOnInit = function () {
        this.ReportACrime = this.formBuilder.group({
            Description: [''],
            FormControlFile: ['']
        });
    };
    ReportcrimeComponent.prototype.onSubmit = function () {
        console.log(this.ReportACrime);
        var data = { position: Report_DATA.length, descript: this.ReportACrime.value.Description };
        Report_DATA.push(data);
    };
    ReportcrimeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reportcrime',
            templateUrl: './reportcrime.component.html',
            styleUrls: ['./reportcrime.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], ReportcrimeComponent);
    return ReportcrimeComponent;
}());
export { ReportcrimeComponent };
//# sourceMappingURL=reportcrime.component.js.map