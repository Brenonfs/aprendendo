let pessoa={
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log("salve");
    },
    soma: function(a,b){
        return a+b;
    }
};

pessoa.falar();
console.log(pessoa.soma(3,5));

let nome = "pedro";
nome[0].toUpperCase