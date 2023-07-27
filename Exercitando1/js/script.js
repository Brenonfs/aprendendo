

function avalia() {
alert("Vamos calcular a média dos alunos");
let noteOne = prompt("Me passe a nota da primeira prova");
noteOne = Number(noteOne);

let noteTwo = prompt("Me passe a nota da segunda prova");
noteTwo = Number(noteTwo);

let result = ((noteOne + noteTwo)/2).toFixed(2);
if (result >= 7){
    alert( 'Este aluno está aprovado: '+ result);
}else if (result <= 3){
    alert( 'Este aluno está reprovado: '+ result);
}else{
    alert('Manda para recuperaçao: '+ result);
}
}

//avalia();
function buy(){
    let itens = [];
    for (var i = 0; i < 4; i++) {
    
    itens[i]= prompt('Informe o item da lista'); // itens.push(prompt(''));
    alert(itens);
}

console.log(itens);
}
buy();
// Math.round(Math.random());