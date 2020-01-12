

let verbo= sessionStorage.getItem("verbo"); 
let pasadosimple=sessionStorage.getItem("pasadosimple"); 
let pasado= sessionStorage.getItem("pasado"); 
let gerundio=verbo+"ing";

var pronombre=" I ";

let not=" not ";
let shortgerundio="";
let shortnot="n't";

let will= " will ";
let shortwill="'ll";
let willnot=will+not;
let wont="won't ";

let had=" had ";
let shorthad="'d ";
let have=" have ";
let shorthave="'ve ";

let should=" should ";
let shouldnot=should+not;
let shortshouldnot=should+shortnot;

let could=" could ";
let couldnot=could+not;
let shortcouldnot=could+shortnot;
let shortcould="'d ";

let would=" would ";
let shortwould="'d ";

let can =" can ";
let cannot=can+not;
let shortcannot=can+shortnot;

let be=" be ";
let been=" been ";
let havebeen=have+been;
let was=" was ";
let wasnot=was+not;
let shortwasnot=was+shortnot;

let am=" am ";
let amnot=am+not;
let shortam="'m ";

let goingto=" going to ";

let doaux=" do ";
let did=" did ";

let donot=doaux+not;
let shortdonot=doaux+shortnot;

let didnot=did+not;
let shortdidnot=did+shortnot;

let may=" may ";
let maynot=may+not;

let might=" might ";
let mightnot=might+not;
let shortmightnot=might+shortnot;

let must=" must ";
let mustnot=must+not;
let shortmustnot=must+shortnot;
let q=" ? ";



	var mostrar = function(){
	
	sessionStorage.setItem("verbo"," "+form.name1.value);
	sessionStorage.setItem("pasadosimple"," "+form.name2.value);
	sessionStorage.setItem("pasado"," "+form.name3.value);
	
	};
	
form.addEventListener("submit",mostrar);

//var verbo= " give "; var pasadosimple=" gave "; var pasado= " given "; //var gerundio= " giving ";
document.getElementById("btn1").addEventListener("click",manejador);
document.getElementById("btn2").addEventListener("click",manejador);
document.getElementById("btn3").addEventListener("click",manejador);
document.getElementById("btn4").addEventListener("click",manejador);
document.getElementById("btn5").addEventListener("click",manejador);
	
document.getElementById("verbo").innerHTML = "TO "+verbo.toUpperCase() ;



function manejador(e){
	switch(e.target.id){
		case "btn1":
		statement();
		break;
		case "btn2":
		statement_contraction();
		break;
		case "btn3":
        negative();
		break;
		case "btn4":
		negative_contraction();
		break;
		case "btn5":
		question();
		break;
	}

}

function trimar(a,b){
	var c= a.trim();
	var d= b.trim();
	var f=c+d;

	if(f=="cann't"){
		f="can't";
		return f;
	}else {
		return f;
	}

	}

function mayuscula(string){
return string.charAt(1).toUpperCase() + string.slice(2);
 }

const Vocal = cadena => {

		// Sacar el último carácter y convertirlo a minúscula
		var ultimoCaracter = cadena[cadena.length - 1].toLowerCase();
		var anteultimoCaracter = cadena[cadena.length - 2].toLowerCase();
        var anteanteUC = cadena[cadena.length - 3].toLowerCase();
		var vocales = ["a","e", "i", "o", "u" ,"w" ,"x" ,"y"] ; 


	    // Si no hay cadena o está vacía...
	    if(!cadena || !cadena.length) return 0;

        //si termina con "e" entra
	    if(ultimoCaracter=="e"){
		//Take→ taking  //e	
            if(anteultimoCaracter=="i"){
			//tie→ tying 	//ie
               return 2;
			}else{
			return 1;}
		}

		// Con indexOf comprobar si dicho carácter está en el array
		// Si sí está, indexOf devolverá algo diferente a -1
		// Si no está, entonces indexOf devolverá -1
		// Con eso ya podemos evaluar y convertirlo a booleano
		//si termina con consonante
		
        if(vocales.indexOf(ultimoCaracter) === -1){
            //si la anteultima es vocal
            if(vocales.indexOf(anteultimoCaracter) !== -1){
                //si la antepenultima es consonante
				if(vocales.indexOf(anteanteUC) === -1){
					//stop
					return 3;
				}else{
					//eat
					return 4;
				}
			}else{
				return 4;
			}
		}
		else{
			//vocal no e 
			return 4;
		}
	}


switch (Vocal(verbo)) {

	case 0:
	gerundio="error cadena vacia";
	break;

	case 1:
	//Take→ taking 
	gerundio=verbo.slice(0,-1)+"ing";
	break;

	case 2:
	//tie→ tying 
	gerundio=verbo.slice(0,-2)+"ying";	
	break;

	case 3:
	//Stop→ stopping
	gerundio=verbo+verbo.slice(-1)+"ing";	
	break;

	default:
	//ask → asking
	gerundio=verbo+"ing";
		break;
}


