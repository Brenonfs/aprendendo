function loadSomeData() {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            const data = { id:123, name:"some name"}
            resolve(data);
        },1000)
    });
}

//then and catch

/*      loadSomeData()
            .then(function(data) {
                console.log('Dados carregados', data);
                return data;
            })
            .then(function(newData) {
                console.log('O nome é:', newData.name);
            })
            .catch(function(err) {
                console.log('Erro ao carregar dado:', err);
})  
*/

// arrow functions
//função normal
function soma(a,b){
    return a +b;
}
// arrow function equivalent
const somaB = (a,b) => a+b;
