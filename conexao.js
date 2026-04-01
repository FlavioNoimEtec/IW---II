import mysql from 'mysql2'

export default class ConnectDB {

    static connection() {
        let connection = mysql.createConnection({
            host: '127.0.0.1', // Alterado de 'local' para 'host' e de 'localhost' para '127.0.0.1'
            user: 'root',
            password: '',
            database: 'auto'
        })

        connection.connect()
        return connection
    }

}
