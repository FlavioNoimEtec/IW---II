import mysql from 'mysql2'

export default class ConnectDB {

    static connection() {
        let connection = mysql.createConnection({
            local: 'localhost',
            user: 'root',
            password: '',
            database: 'auto'
        })

        connection.connect()
        return connection
    }

}

