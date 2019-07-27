import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var STATION = [
    { pincode: 560001, stationName: 'Cubban Police Station', contact: 8025587995, address: 'Cubbon Road, Bangalore, Karnataka, India' },
    { pincode: 560070, stationName: 'Banashankari Police Station', contact: 8026710245, address: '	Banashankari Stage II, Banashankari, Bangalore, Karnataka' },
    { pincode: 560003, stationName: 'Vyalikaval Police Station ', contact: 8022942588, address: 'Guttahalli, Vyalikaval, Bangalore, Karnataka ' },
    { pincode: 560020, stationName: 'Sheshadripuram Police Station', contact: 8022942586, address: ' Sheshadripuram, Bangalore, Karnataka' },
    { pincode: 560004, stationName: 'Basavanagudi Police Station', contact: 8026676036, address: ' K R Road, Bsavanagudi, Bangalore, Karnataka' },
    { pincode: 560010, stationName: 'Rajajinagar Traffic Police Station', contact: 8022942807, address: '12th Main Road, Rajaji Nagar, Bangalore, Karnataka ' },
    { pincode: 560018, stationName: 'Chamrajpet Police Station', contact: 8022942526, address: '1st main, 4th cross, Near Dhobi Ghatt, Chamrajpet, Bangalore, Karnataka ' },
    { pincode: 560002, stationName: 'Bharathi Nagar Police station ', contact: 8022942548, address: ' St.Johns Church Road, Bharathi Nagar,  Shivaji Nagar, Bangalore, Karnataka ' },
    { pincode: 560094, stationName: 'Sanjaynagar Police Station', contact: 8022942533, address: ' Sanjaynagar Main Road, Sanjay Nagar, Bangalore, Karnataka' },
    { pincode: 560040, stationName: 'Chandra Layout Police Station ', contact: 8022942543, address: 'asaveshwara HBCS Layout 2nd Stage, Chandra Layout Extension, Bangalore, Karnataka ' },
    { pincode: 560059, stationName: 'Byatrayanpura Police Station', contact: 8022942507, address: ' Byatrayanpura, Near Maruthi Nursing home, Mysore Road, Bangalore, Karnataka' },
    { pincode: 560016, stationName: 'Ramamurthy Nagar Police Station', contact: 8022942554, address: 'Ramamurthy nagar Main Road, Ramamurthy Nagar, Bangalore, Karnataka ' },
    { pincode: 560023, stationName: 'KP Agrahara Police Station ', contact: 8022942518, address: '14, 1st floor, 5th cross, Magadi main road, Bangalore, Karnataka ' },
    { pincode: 560099, stationName: 'Hebbagodi Police Station ', contact: 8027832922, address: 'Madhurai-Kanyakumari highway, Near Electronics city, Bangalore, Karnataka ' },
    { pincode: 560048, stationName: 'Mahadevapura Police Station ', contact: 8022942546, address: 'White field main road, Singainapalya, Bangalore, Karnataka ' },
    { pincode: 560095, stationName: 'Koramangala Police station ', contact: 8022942570, address: 'Ganapathi Temple road, Koramangala 6th block, Koramangala, Bangalore, Karnataka ' },
    { pincode: 560025, stationName: 'Ashok Nagar Police Station ', contact: 8022942580, address: 'Commissariat Road, Near Raheja Point, Bangalore, Karnataka ' },
    { pincode: 560054, stationName: 'Yeshwanthpur Traffic Police Station ', contact: 8022942661, address: 'Subedarpalya, Yeshwantpur Circle, Yeshwantpur, Bangalore, Karnataka ' },
    { pincode: 560024, stationName: 'Hebbal Police Station ', contact: 8022942535, address: '1st Floor, 3rd Main Cross, Near government hebbal verterinary college, Hebbal, Bangalore, Karnataka ' },
    { pincode: 560003, stationName: 'Malleswaram Police Station', contact: 8022942519, address: 'P.S. No. 47, 5th cross, M.K.K road, Malleswaram, Bangalore, Karnataka ' },
    { pincode: 560036, stationName: 'KR Puram Police station', contact: 8029425530, address: 'K R Puram, Bangalore, Karnataka ' },
    { pincode: 560078, stationName: 'Kumaraswamy Layout Police Station', contact: 8022942567, address: '14th main road, Kumaraswamy layout, 1st stage, Banagalore, Karnataka ' },
    { pincode: 560047, stationName: 'Vivek Nagar police station ', contact: 8022942509, address: '4th cross road, Ejipura, Bangalore, Karnataka ' },
    { pincode: 560068, stationName: 'Madiwala Traffic Police Station ', contact: 8022942568, address: ' Madiwala road, Teachers colony, Kormangala, Bangalore, Karnataka.' },
    { pincode: 560093, stationName: 'Baiyappanahalli Police Station', contact: 8022942545, address: ' Swamy Vivekananda Road, Rahat Bagh, Nagavarapalya, Bengaluru, Karnataka  ' },
];
var StationComponent = /** @class */ (function () {
    function StationComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.displayedColumns = ['pincode', 'stationName', 'contact', 'address'];
        this.dataSource = STATION;
    }
    StationComponent.prototype.ngOnInit = function () {
        this.knowStation = this.formBuilder.group({
            pincode: [''],
            stationName: [''],
            contact: [''],
            address: ['']
        });
    };
    StationComponent.prototype.getDetails = function () {
        for (var _i = 0, STATION_1 = STATION; _i < STATION_1.length; _i++) {
            var office = STATION_1[_i];
            // console.log(officer);
            if (office.pincode === this.knowStation.value.pincode) {
                //console.log(officer);
                this.knowStation.patchValue({
                    stationName: office.stationName,
                    contact: office.contact,
                    address: office.address
                });
            }
        }
    };
    StationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-station',
            templateUrl: './station.component.html',
            styleUrls: ['./station.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], StationComponent);
    return StationComponent;
}());
export { StationComponent };
//# sourceMappingURL=station.component.js.map