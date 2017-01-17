import { Injectable } from '@angular/core'

@Injectable()
export class PapCalculatorService {
  calculateTax(input: Object): Promise<Object>{
    return Promise.resolve(calculate(input));
  }
}
