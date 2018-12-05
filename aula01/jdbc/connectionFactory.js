
const getConnection = () => {
    const mysql = require(`mysql`);

    return mysql.createConnection({
        host : `localhost`,
        user : `root`,
        password : `caelum`,
        database : `casadocodego`
    });
}

module.exports = {
    getQuery : (campo, table, where, callback) => {
        const connection = getConnection();
        connection.query(`select ${campo} from ${table} ${where ? `where ${where}` : ``}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }

            callback(result);
        });
        connection.end()
    
    }
}