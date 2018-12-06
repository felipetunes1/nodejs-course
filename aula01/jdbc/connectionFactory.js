class ConnectionFactory {
    
    getConnection () {
        const mysql = require(`mysql`);

        console.log(`## connectionFactory -> getConnection in`);

        return mysql.createConnection({
            host : `localhost`,
            user : `root`,
            password : `caelum`,
            database : `casadocodego`
        });
    }

    constructor() {
        this.connection = this.getConnection();
    }

    getQuery (campo, table, where, callback)  {
        console.log(`## connectionFactory -> getQuery in`);
        this.connection.query(`select ${campo} from ${table} ${where ? `where ${where}` : ``}`, (err, result) => {
            console.log(`## connectionFactory -> getQuery out`);
            this.connection.end();
            if(err) {
                console.log(err);
                return;
            }
            callback(result);
        });
    }

    insert (campo, table, values, callback) {
        console.log(`## connectionFactory -> insert in`);
        return new Promise((resolve, reject) => {
            this.connection.beginTransaction();
            this.connection.query(`insert into ${table} (${campo}) values (${values})`, (err, result) => {
                console.log(`## connectionFactory -> insert out`);
                this.connection.commit()
                this.connection.end();
                if(err) {
                    console.log("## Error: " , err);
                    reject(err)
                } else {
                    console.log("## Success: " , result);
                    resolve( result );
                }
            })
    
        })
    
    }
   
}

module.exports = ConnectionFactory;
