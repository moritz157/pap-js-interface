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
    function AppComponent(papCalculatorService) {
        this.papCalculatorService = papCalculatorService;
        this.LZZ = 1;
        this.STKL = 1;
        this.RE4 = 25000;
    }
    AppComponent.prototype.sendToCalc = function () {
        var _this = this;
        this.papCalculatorService.calculateTax({ LZZ: this.LZZ, STKL: this.STKL, RE4: this.RE4 * 100 }).then(function (output) { return _this.output = output; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "Lohnzahlungszeitraum: <select [(ngModel)]='LZZ'>\n      <option selected value=\"1\">Jahr</option>\n      <option value=\"2\">Monat</option>\n      <option value=\"3\">Woche</option>\n      <option value=\"4\">Tag</option>\n    </select><br>\n    Steuerklasse: <select [(ngModel)]='STKL'>\n      <option selected value=\"1\">I</option>\n      <option value=\"2\">II</option>\n      <option value=\"3\">III</option>\n      <option value=\"4\">IV</option>\n      <option value=\"5\">V</option>\n      <option value=\"6\">VI</option>\n    </select><br>\n    Einkommen in Euro: <input step=\"1000\" type='number' [(ngModel)]='RE4'><br>\n    <button (click)=\"sendToCalc()\">Steuer berechnen</button><br>\n    <h4 *ngIf='output' >F\u00FCr den Lohnzahlungszeitraum einzubehaltende Lohnsteuer: {{ output.LSTLZZ / 100 | currency:'EUR':true:'1.2-2'}}</h4>\n    <h4 *ngIf='output' >F\u00FCr den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag: {{ output.SOLZLZZ / 100 | currency:'EUR':true:'1.2-2'}}</h4>\n    <h4 *ngIf='output' >Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns: {{ output.VFRB / 100 | currency:'EUR':true:'1.2-2'}}</h4>",
        providers: [pap_calculator_service_1.PapCalculatorService]
    }),
    __metadata("design:paramtypes", [pap_calculator_service_1.PapCalculatorService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map