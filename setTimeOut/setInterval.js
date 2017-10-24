/*var timerId = setInterval(function() {
	console.log( "тік" );
}, 1000);

setTimeout(function() {
	clearInterval(timerId);
	alert( 'стоп' );
}, 50000);*/


var counter = 0;
var i = setInterval(function(){
	// do your thing

	counter++;
	if(counter === 100) {
		clearInterval(i);
	}
	console.log(counter);
}, 200);