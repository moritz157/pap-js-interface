import { Component } from '@angular/core'
import { PapCalculatorService } from './pap-calculator.service'

@Component({
  selector: 'my-app',
  template: `Lohnzahlungszeitraum: <select [(ngModel)]='LZZ'>
      <option selected value="1">Jahr</option>
      <option value="2">Monat</option>
      <option value="3">Woche</option>
      <option value="4">Tag</option>
    </select><br>
    Steuerklasse: <select [(ngModel)]='STKL'>
      <option selected value="1">I</option>
      <option value="2">II</option>
      <option value="3">III</option>
      <option value="4">IV</option>
      <option value="5">V</option>
      <option value="6">VI</option>
    </select><br>
    Einkommen in Euro: <input step="1000" type='number' [(ngModel)]='RE4'\><br>
    <button (click)="sendToCalc()">Steuer berechnen</button><br>
    <h4 *ngIf='output' >Für den Lohnzahlungszeitraum einzubehaltende Lohnsteuer: {{ output.LSTLZZ / 100 | currency:'EUR':true:'1.2-2'}}</h4>
    <h4 *ngIf='output' >Für den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag: {{ output.SOLZLZZ / 100 | currency:'EUR':true:'1.2-2'}}</h4>
    <h4 *ngIf='output' >Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns: {{ output.VFRB / 100 | currency:'EUR':true:'1.2-2'}}</h4>`,
  providers: [PapCalculatorService]
})
export class AppComponent {
  constructor(private papCalculatorService: PapCalculatorService){}
  LZZ: number=1;
  STKL: number=1;
  RE4: number=25000;
  output: Object;
  sendToCalc(): void{
    this.papCalculatorService.calculateTax({LZZ: this.LZZ, STKL: this.STKL, RE4: this.RE4*100}).then(output => this.output=output);
  }
}
