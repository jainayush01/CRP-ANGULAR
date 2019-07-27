import { async, TestBed } from '@angular/core/testing';
import { CrimedatabaseComponent } from './crimedatabase.component';
describe('CrimedatabaseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CrimedatabaseComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CrimedatabaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crimedatabase.component.spec.js.map