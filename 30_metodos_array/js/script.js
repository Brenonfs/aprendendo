//length
var array=[1,2,3,4,5,6,7,8,9,10];
console.log(array.length);

//push coloca no fim

array.push(15);
array.push("hello");

console.log(array);

//pop retira do fim 
array.pop();
console.log(array);

//unshift colocoa no inicio
array.unshift(0);
array.unshift("test");
console.log(array);

//shift retira do inicio
array.shift();
console.log(array);
//isArray verifica se é uma array
//array.length-1 acessar o ultimo da array 

//Splice (qual posição, se deseja deletar, e qual o elemento adcionado)
array.splice(2,0,999);
console.log(array);
array.splice(2,1);
console.log(array);
//vai remover agora o 999
var array2 = ["a", "b", "c", "d", "e"]
console.log(array2.join(","));
//join vai fazer virar string feia
//reverse vai fazer virar
console.log(array.reverse());

