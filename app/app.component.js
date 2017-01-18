"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pap_calculator_service_1 = require("./pap-calculator.service");
var AppComponent = (function () {
    function AppComponent(applicationRef, papCalculatorService, zone) {
        var _this = this;
        this.applicationRef = applicationRef;
        this.papCalculatorService = papCalculatorService;
        this.zone = zone;
        this.LZZ = 1;
        this.STKL = 1;
        this.RE4 = 25000;
        window.angularComponentRef = {
            zone: this.zone,
            componentFn: function () { return _this.sendToCalc(); },
            component: this,
            applicationRef: this.applicationRef,
            LZZ: this.LZZ,
            STKL: this.STKL,
            RE4: this.RE4
        };
    }
    AppComponent.prototype.sendToCalc = function () {
        console.log("Calculation...");
        window.angularComponentRef.LZZ = document.getElementById("LZZ").value;
        window.angularComponentRef.STKL = document.getElementById("STKL").value;
        window.angularComponentRef.RE4 = document.getElementById("RE4").value;
        return this.papCalculatorService.calculateTax({ LZZ: window.angularComponentRef.LZZ, STKL: window.angularComponentRef.STKL, RE4: window.angularComponentRef.RE4 * 100 });
    };
    AppComponent.prototype.ngOnInit = function () {
        (function () {
            var conversationalForm = new cf.ConversationalForm({
                formEl: document.getElementById("form"),
                submitCallback: function () {
                    var receivedOutput;
                    window.angularComponentRef.zone.run(function () { window.angularComponentRef.componentFn().then(function (output) { return conversationalForm.addRobotChatResponse("Für den Lohnzahlungszeitraum einzubehaltende Lohnsteuer: " + output.LSTLZZ / 100 + " €"); }); });
                }
            });
        })();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [pap_calculator_service_1.PapCalculatorService]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef, pap_calculator_service_1.PapCalculatorService, core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map