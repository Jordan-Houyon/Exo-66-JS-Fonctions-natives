
let entier=document.getElementById("entier");

let flottant=document.getElementById("flottant");

let notNumber=document.getElementById("non-numerique");

let random=document.getElementById("random");

let trunc=document.getElementById("trunc");

let replace=document.getElementById("replace");

let operande=10;

//------1 --------//

entier.innerHTML =operande*parseInt((entier.innerHTML));

//------2--------//

flottant.innerHTML=operande*parseFloat(flottant.innerHTML);
flottant.innerHTML=parseInt(entier.innerHTML)+ parseFloat(flottant.innerHTML);

//------3--------//

if(isNaN(notNumber)){
    notNumber.innerHTML="0";
}

//------4--------//

random.innerHTML=Math.random();

//------5--------/

trunc.innerHTML=Math.trunc(trunc.innerHTML);

//------6--------//

replace.innerText = replace.innerText.replace('world', 'Jordan Houyon')


