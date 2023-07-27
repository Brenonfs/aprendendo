// lenght
// indexOf saber a posição em q começa
var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));
//slice saber qual palavra estar nesse trecho
var palavra = frase.slice(7,11);
console.log(palavra);
//replace trocar uma palavra por outra
var novaFrase= frase.replace("roeu","teste");
console.log(novaFrase);
//toUpperCase deixar em caixa alta
console.log(novaFrase.toUpperCase());
console.log(novaFrase.toLowerCase());
//trim retira alguma coisa
var nome = "    Pedro     ";
var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);
//split, separar em forma de array
console.log(novaFrase.split(" ")); 
//lastIndexOf a ultima palavra dessa 
var fraseAxuliar = " um dois tres quatro dois";
console.log(fraseAxuliar.indexOf("dois"));
console.log(fraseAxuliar.lastIndexOf("dois"));

