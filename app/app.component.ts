import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core'
import { PapCalculatorService } from './pap-calculator.service'
declare var cf:any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [PapCalculatorService]
})
export class AppComponent implements OnInit{
  constructor( private applicationRef: ApplicationRef, private papCalculatorService: PapCalculatorService, private zone:NgZone){
    window.angularComponentRef = {
      zone: this.zone,
      componentFn: () => this.sendToCalc(),
      component: this,
      applicationRef: this.applicationRef,
      LZZ: this.LZZ,
      STKL: this.STKL,
      RE4: this.RE4
    };
  }
  LZZ: number=1;
  STKL: number=1;
  RE4: number=25000;
  output: Object;
  sendToCalc(): Promise<Object>{
    console.log("Calculation...");
    //window.angularComponentRef.zone.run(function () { window.angularComponentRef.changeDetector.detectChanges()});
    //this.applicationRef.tick();
    //this.zone.run(() => {});
    //console.log(window.angularComponentRef.LZZ);
    //console.log(this.applicationRef);
    window.angularComponentRef.LZZ=document.getElementById("LZZ").value;
    window.angularComponentRef.STKL=document.getElementById("STKL").value;
    window.angularComponentRef.RE4=document.getElementById("RE4").value;
    return this.papCalculatorService.calculateTax({LZZ: window.angularComponentRef.LZZ, STKL: window.angularComponentRef.STKL, RE4: window.angularComponentRef.RE4*100});
  }
  ngOnInit(): void{
    (function(){
      var conversationalForm = new cf.ConversationalForm({
        formEl: document.getElementById("form"),
        submitCallback: function(){
          // window.ConversationalForm

          var receivedOutput: any;
          window.angularComponentRef.zone.run(function () { window.angularComponentRef.componentFn().then(output => conversationalForm.addRobotChatResponse("Für den Lohnzahlungszeitraum einzubehaltende Lohnsteuer: "+output.LSTLZZ/100+" €"))});

        }
      });
    })();
  }
}
