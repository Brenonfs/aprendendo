var arr = ['a', 'b', 'c', 'd', 'e'];

var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');
console.log(body[0]);
body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);
for (var i = 0; i < arr.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(arr[i]);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}
