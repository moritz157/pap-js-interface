const PAP2017 = require( 'pap-js/lib/calculators/Lohnsteuer2017' );

let calculator = new PAP2017();
//{LZZ:  1,STKL: 1,RE4:  2500000}
window.calculate = function(input){

  calculator.set( input );

  calculator.main();

  return calculator.get('outputs');
}

console.log( calculator.get( 'outputs' ) );
