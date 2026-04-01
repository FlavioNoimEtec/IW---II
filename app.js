import Crud from './index.js'



Crud.selecionar(function(carro){
    
    for(let i=0;carro.length > i;i++){
    console.log("O id é: " + carro[i].id + "A marca é: " + carro[i].marca)
    }
})

Crud.selecionaPorId(3, function(carro){
    console.log("O carro é: " + carro.marca)
})

let id = {id:2} //Json
Crud.selecionaPorId2(id, function(carro){
    console.log("O carro é: " + carro.marca)
})

let carros = {marca:"Ferrari", modelo:"F50", ano:2010}
Crud.inserir(carros, function(carro){
        console.log("Inserido com sucesso")
})

let carros2 = {id:3, marca:"VW", modelo:"Fusca", ano:2000}
Crud.atualizar(carros2, function(carro){
    console.log("Atualizado com sucesso")
})


Crud.apagar(4, function(carro){
    console.log("Apagado com sucesso!")
})

