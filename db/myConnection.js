const mysql = require('mysql2');

const myConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'havefun',
        database: 'company_db',
    },
    console.log('Linked to the company_db database.')
);



module.exports = myConnection;