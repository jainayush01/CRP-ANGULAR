import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var PortalService = /** @class */ (function () {
    function PortalService() {
        this.logged = new BehaviorSubject(false);
        this.currentLogged = this.logged.asObservable();
    }
    PortalService.prototype.changeLogged = function (value) { this.logged.next(value); };
    PortalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PortalService);
    return PortalService;
}());
export { PortalService };
//# sourceMappingURL=portal.service.js.map