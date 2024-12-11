// //Ex 1
// var code=0;
// var cle=1;
// function verificationdouverture(code,cle){
//     if(code === 1 && cle === 1){
//         console.log("Le coffre s'ouvre!");
//     }    else{
//             console.log("Le coffre ne s'ouvre pas");
//             return;
//         }
// }

// var result = verificationdouverture(code, cle);
// console.log(result);


// //Ex 2
// var feu = 1;
// var autorisation = 0;
// var alerte = 0;
// function passage(feu, autorisation, alerte){
//     if((feu === 1 || autorisation === 1) && alerte === 0){
//         console.log("Le joueur peut avancer!");
//     } else{
//         console.log("Le joueur ne peut pas avancer!");
//         return;
//     }
// }
// var result2 = passage(feu, autorisation, alerte);
// console.log(result2);


// //Ex 3
// var x = 1;
// var y = 1;
// function systemsecurite(x, y) {
//     if (x == y) {
//         console.log("le systeme de securité est normal");
//     } else{
//         console.log("le systeme de securité est declanché");
//         return;
//     }
// }
// var result3 = systemsecurite(x, y);
// console.log(result3);


// //Ex 4
// var administrateur = 1;
// var premium = 0;
// var bloque = 0;
// function verif(administrateur, premium, bloque){
//     if((administrateur === 1 || premium === 1) && bloque === 0){
//         console.log("L'Utilisateur peut acceder!");
//     } else{
//         console.log("L'Utilisateur ne peut pas acceder!");
//         return;
//     }
// }
// var result4 = verif(administrateur, premium, bloque);
// console.log(result4);


// //Ex 5
// var res1 = prompt("Entrer une valeur");
// var res2 = prompt("Entrer une valeur");
// function game(res1, res2) {
//     if(res1 == 7 && res2 == 4){
//         console.log("Bravo!");
//     }else if ((res1 == 7 && res2 !== 4) || (res1 !== 7 && res2 == 4)) {
//         console.log("Presque!");
//     }else{
//         console.log("Réessayez!");
        
//     }
// }
// var result5 = game(res1, res2);
// console.log(result5);


// //Ex 6
// var L1=1;
// var L2=1;
// var L3=0;
// function signal(L1, L2, L3) {
//     if((L1 == 1 && L2 == 1) && L3 == 0){
//         console.log("Signal envoyé!");
//     }else if((L2 == 1 && L3 == 1) && L1 == 0){
//         console.log("Signal envoyé!");
//     }else{
//         console.log("Signal non envoyé!");
//     }
// }
// var result6 = signal(L1, L2, L3);
// console.log(result6);


// //Ex7
// var t = prompt("Entrer une valeur !");
// var modul = (t%2);
// function verificationnombrepair(t, modul) {
//     if (modul == 0) {
//         console.log(t," ce nombre est pair");
//     }else{
//         console.log(t," ce nombre est impair");
//     }
// }
// var result7 = verificationnombrepair(t, modul);
// console.log(result7);


// //Ex8
// var s = prompt("Enter a value!");
// var i = 0; 
// var multipl;
// function tablemultp(s, i) {
//     for (i = 0; i <= 10; i++) {
//         multipl = s * i; 
//         console.log(s + " * " + i + " = " + multipl);
//     }
// }
// var result7 = verificationnombrepair(t, modul);
// console.log(result7);
// tablemultp(s, i);


// //Ex9
// // var x = 64; 

// // function game2(x) {
// //    do{ 
// //     var p = Number(prompt("Entrer une valeur!")); 

// //     if(p < x){
// //         console.log("Plus grand!");
// //     } else if (p > x) {
// //         console.log("Plus petit!");
// //     }} while (p !== x){
// //         console.log("Bravo!");
// //     }
// // }

// // game2(x); 


// // Ex 9 autre façon 
// var nombreSecret = 64;
// var tentative = 0;
// function game2(x){ 
//     if(nombreSecret === x){
//         console.log("Bravo!");
//         return true;
//     } else if(nombreSecret > x){
//         console.log("Plus grand!");
//         return false;    
//     } else{
//         console.log("Plus petit!");
//         return false;    
//     }
// }

// while(tentative !== nombreSecret){ 
//     tentative = Number(prompt("Entrer une valeur!"));
//     const numberFound = game2(tentative);
//     if (numberFound) break;
// }


// TD


// EX 2
// var prenom = "Mouaad";
// var nom = "Setfane";
// var age = 19;
// var taille = 1.80;
// var bool = true;
// alert(prenom + " " + nom + " Age: " + age + " Taille: " + taille + " verification de données: " + bool); 


// EX 1 

// var alert1 = "Coucou le monde";
// var alert2 = "Ednom el uocuoc";

// alert(alert1); 
// alert(alert2);


// EX 5

// document.addEventListener("DOMContentLoaded", function() {
//     var name = prompt("Quel est votre nom ?");
//     if (name === "MARION") { 
//       var nameNode = document.getElementById("name");
//       nameNode.innerText = "Bienvenue sur ton site Marion";
//     } else if (name) {
//       alert("Le nom saisi n'est pas 'MARION'.");
//     } else {
//       alert("Vous n'avez pas entré de nom.");
//     }
//   });

let currentInput = ''; 


function recuperation(value) {
    currentInput += value; 
    document.getElementById('affichage').value = currentInput;
}


function clearaffichage() {
    currentInput = '';
    document.getElementById('affichage').value = '';
}


function calcul() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('affichage').value = currentInput;
    } catch (error) {
        document.getElementById('affichage').value = 'Erreur'; 
        currentInput = ''; 
    }
}

