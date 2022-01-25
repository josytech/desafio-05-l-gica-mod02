// Crie um array que receba 5 itens e exiba no console.

function frutas(){
    let frutas=["maçã","uva","manga","banana","goiaba"]

    console.log(`as frutas da estação são ${frutas}`)
}
frutas()

// Utilize um método para adicionar um nome ao inicio do array.
let filmes = ["eu sou a lenda","titanic"]
filmes.unshift("tubarão")
console.log(filmes)


// Utilize um método para remover o último nome do array.

filmes.pop()
console.log(filmes)


// Utilize um método para adicionar dois nomes ao fim do array.
let estação = ["primavera","verão"]
estação.push("inverno","outono")
console.log(estação)


// Utilize um método para remover o primeiro nome do array.
estação.shift()
console.log(estação)

// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return(a-b)
})
console.log(numbers)