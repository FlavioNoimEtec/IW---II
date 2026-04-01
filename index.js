import ConnectDB from "./conexao.js";

export default class Crud {

//selecionar lista 
static selecionar(callback){
    let connection = ConnectDB.connection()
    let sql = "select id, marca, modelo, ano from carro" 
    let query = connection.query(sql, function(error, results, fields){
       callback(results)
    })       
     console.log(query.sql)   
     connection.end()
}


//Seleciona por id
static selecionaPorId(id, callback){
    let connection = ConnectDB.connection()
    let sql = "select * from carro where id = '" + id + "'"
    let query = connection.query(sql, function(error, results, fields){
        let carro = results[0]
       // console.log("O id é: " + results[carro].id + ":" + results[carro].marca)
        callback(carro)
    })    
       connection.end()
}

static selecionaPorId2(id, callback){
    let connection = ConnectDB.connection()
    let sql = "select * from carro where id = ?"
    // Remova a linha: let id = carro.id
    let query = connection.query(sql, id, function(error, results, fields){
        let carro = results[0]
        callback(carro)
    })
    
    connection.end()
}

//Inserir os dados
static inserir(carro, callback) {
    let connection = ConnectDB.connection()
    let sql = "insert into carro set ?"
    let query = connection.query(sql, carro, function(error, results, fields){       
        carro.id = results.insertId
        callback(carro)        
    })
       console.log("Inserido com sucesso")
       connection.end()
}

//Atualizae os dados
static atualizar(carro, callback) {
    let connection = ConnectDB.connection()
    let sql = "update carro set ? where id = ?"
    let id = carro.id
    let query = connection.query(sql, [carro,id], function(error, results, fields){       
        
        callback(carro)        
    })
       console.log("Atuaizado com sucesso")
       connection.end()
}

//Apagar dados
static apagar(carro, callback){
    let connection = ConnectDB.connection()
    let sql = "delete from carro where id = ?"
    let id = carro.id
    let query = connection.query(sql, id, function(error, results, fields){       
        
    callback(carro)   
})
    connection.end()
}


} //fecha classe


Crud.selecionar(function(carro) {

    
})