
function question(){

var a1 =mayuscula(did+pronombre+verbo+q);          var b1= mayuscula(was+pronombre+gerundio+q);
var a2 =mayuscula(doaux+pronombre+verbo+q);        var b2 =mayuscula(am+pronombre+gerundio+q);
var a3 =mayuscula(will+pronombre+verbo+q);         var b3 =mayuscula(will+pronombre+be+gerundio+q);
var a4 =mayuscula(am+pronombre+goingto+verbo+q);  var b4 =mayuscula(am+pronombre+goingto+be+gerundio+q);
var a5 =mayuscula(would+pronombre+verbo+q);        var b5 =mayuscula(would+pronombre+be+gerundio+q);
var a6 =mayuscula(should+pronombre+verbo+q);       var b6 =mayuscula(should+pronombre+be+gerundio+q);
var a7 =mayuscula(can+pronombre+verbo+q);          var b7 =mayuscula(can+pronombre+be+gerundio+q);
var a8 =mayuscula(could+pronombre+verbo+q);        var b8 =mayuscula(could+pronombre+be+gerundio+q);
var a9 =mayuscula(must+pronombre+verbo+q);         var b9 =mayuscula(must+pronombre+be+gerundio+q);
var a10 =mayuscula(may+pronombre+verbo+q);         var b10 =mayuscula(may+pronombre+be+gerundio+q);
var a11 =mayuscula(might+pronombre+verbo+q);       var b11 =mayuscula(might+pronombre+be+gerundio+q);


var c1=mayuscula(had+pronombre+pasado+q);                 var d1=mayuscula(had+pronombre+been+gerundio+q);
var c2 =mayuscula(have+pronombre+pasado+q);               var d2 =mayuscula(have+pronombre+been+gerundio+q);
var c3 =mayuscula(will+pronombre+have+pasado+q);          var d3 =mayuscula(will+pronombre+havebeen+gerundio+q);
var c4 =mayuscula(am+pronombre+goingto+have+pasado+q);    var d4 =mayuscula(am+pronombre+goingto+havebeen+gerundio+q);
var c5 =mayuscula(would+pronombre+have+pasado+q);         var d5 =mayuscula(would+pronombre+have+been+gerundio+q);
var c6 =mayuscula(should+pronombre+have+pasado+q);        var d6 =mayuscula(should+pronombre+have+been+gerundio+q);
//var c7 =pronombre+can+verbo;               var d7 =pronombre+can+verbo;
var c8 =mayuscula(could+pronombre+have+pasado+q);         var d8 =mayuscula(could+pronombre+have+been+gerundio+q);
var c9 =mayuscula(must+pronombre+have+pasado+q);          var d9 =mayuscula(must+pronombre+have+been+gerundio+q);
var c10 =mayuscula(may+pronombre+have+pasado+q);         var d10 =mayuscula(may+pronombre+havebeen+gerundio+q);
var c11 =mayuscula(might+pronombre+have+pasado+q);        var d11 =mayuscula(might+pronombre+have+been+gerundio+q);

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


document.getElementById("conjugacion").innerHTML = "Question";
}
