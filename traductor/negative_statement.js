

function negative(){

  // not=" not ";
  // fhave=" have ";
  // have=" have ";
  // will=" will"+not;
  // should=" should"+not;
  // would=" would"+not;
  // would2=" would"+not;
  // could=" could"+not;
  // am=" am "+not;
  // had=" had"+not;
  // goingto=" am not going to ";
  // may=" may"+not;
  // might=" might"+not;
  // must=" must"+not;
  // was=" was"+not;
  // can=" can"+not;
	// did=" did ";
	// doo=" do ";

var a1  =pronombre+did+not+verbo;           var b1=pronombre+was+not+gerundio;
var a2  =pronombre+doaux+not+verbo;         var b2 =pronombre+am+not+gerundio;
var a3  =pronombre+will+not+verbo;           var b3 =pronombre+will+not+be+gerundio;
var a4  =pronombre+am+not+goingto+verbo;    var b4 =pronombre+am+not+goingto+be+gerundio;
var a5  =pronombre+would+not+verbo;        var b5 =pronombre+would+not+be+gerundio;
var a6  =pronombre+should+not+verbo;       var b6 =pronombre+should+not+be+gerundio;
var a7  =pronombre+can+not+verbo;          var b7 =pronombre+can+not+be+gerundio ;
var a8  =pronombre+could+not+verbo;        var b8 =pronombre+could+not+be+gerundio;
var a9  =pronombre+must+not+verbo;         var b9 =pronombre+must+not+be+gerundio;
var a10 =pronombre+may+not+verbo;          var b10 =pronombre+may+not+be+gerundio;
var a11 =pronombre+might+not+verbo;        var b11 =pronombre+might+not+be+gerundio;


var c1=pronombre+had+not+pasado;                 var d1=pronombre+had+not+been+gerundio;
var c2 =pronombre+have+not+pasado;               var d2 =pronombre+have+not+been+gerundio;
var c3 =pronombre+will+not+have+pasado;          var d3 =pronombre+will+not+havebeen+gerundio;
var c4 =pronombre+am+not+goingto+have+pasado;    var d4 =pronombre+am+not+goingto+havebeen+gerundio;
var c5 =pronombre+would+not+have+pasado;         var d5 =pronombre+would+not+have+been+gerundio;
var c6 =pronombre+should+not+have+pasado;        var d6 =pronombre+should+not+have+been+gerundio;
//var c7 =pronombre+can+verbo;               var d7 =pronombre+can+verbo;
var c8 =pronombre+could+not+have+pasado;         var d8 =pronombre+could+not+have+been+gerundio;
var c9 =pronombre+must+not+have+pasado;          var d9 =pronombre+must+not+have+been+gerundio;
var c10 =pronombre+may+not+have+pasado;          var d10 =pronombre+may+not+havebeen+gerundio;
var c11 =pronombre+might+not+have+pasado;        var d11 =pronombre+might+not+have+been+gerundio;

//Simple

// I went
// I go
// I'll go
// I'm going to go
// I'd go
// I should go
// I can go
// I could go
// I must go
// I may go
// I might go
//simple
document.getElementById("a1").innerHTML = a1;
document.getElementById("a2").innerHTML = a2;
document.getElementById("a3").innerHTML = a3;
document.getElementById("a4").innerHTML = a4;
document.getElementById("a5").innerHTML = a5;
document.getElementById("a6").innerHTML = a6;
document.getElementById("a7").innerHTML = a7;
document.getElementById("a8").innerHTML = a8;
document.getElementById("a9").innerHTML = a9;
document.getElementById("a10").innerHTML = a10;
document.getElementById("a11").innerHTML = a11;
//
// Progressive
//
// I was going
// I'm going
// I'll be going
// I'm going to be going
// I'd be going
// I should be going
// I can be going
// I could be going
// I must be going
// I may be going
// I might be going
//
//simple progresivo
document.getElementById("b1").innerHTML = b1;
document.getElementById("b2").innerHTML = b2;
document.getElementById("b3").innerHTML = b3;
document.getElementById("b4").innerHTML = b4;
document.getElementById("b5").innerHTML = b5;
document.getElementById("b6").innerHTML = b6;
document.getElementById("b7").innerHTML = b7;
document.getElementById("b8").innerHTML = b8;
document.getElementById("b9").innerHTML = b9;
document.getElementById("b10").innerHTML = b10;
document.getElementById("b11").innerHTML = b11;
// Perfect
//
// I'd gone
// I've gone
// I'll have gon
// I'm going to have gone
// I'd have gone = I would've gone (There are two ways to say this one)
// I should've gone
// ---x---    Can no va
// I could've gone
// I must've gone
// I may have gone
// I might've gone
//
//PERFECTO
document.getElementById("c1").innerHTML = c1;
document.getElementById("c2").innerHTML = c2;
document.getElementById("c3").innerHTML = c3;
document.getElementById("c4").innerHTML = c4;
document.getElementById("c5").innerHTML = c5;
document.getElementById("c6").innerHTML = c6;
//document.getElementById("c7").innerHTML = pronombre+can+have+pasado;
document.getElementById("c8").innerHTML = c8;
document.getElementById("c9").innerHTML = c9;
document.getElementById("c10").innerHTML = c10;
document.getElementById("c11").innerHTML = c11;
// Perfect Progressive
//
// I'd been going
// I've been going X
// I'll have been going
// I'm going to have been going
//  I'd have been going = I would've been going (two options, I think would've is more common than I'd)X
// I should've been going
// I could've been going
// I must've been going
// I may have been going
// I might've been going

//Perfeto progresivo
document.getElementById("d1").innerHTML = d1;
document.getElementById("d2").innerHTML = d2;
document.getElementById("d3").innerHTML = d3;
document.getElementById("d4").innerHTML = d4;
document.getElementById("d5").innerHTML = d5;
document.getElementById("d6").innerHTML = d6;
//document.getElementById("d7").innerHTML = pronombre+can+havebeen+gerundio;
document.getElementById("d8").innerHTML = d8;
document.getElementById("d9").innerHTML = d9;
document.getElementById("d10").innerHTML = d10;
document.getElementById("d11").innerHTML = d11;


document.getElementById("conjugacion").innerHTML = "Negative Statement";
}
