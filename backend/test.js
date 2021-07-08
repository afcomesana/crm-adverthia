const mysql = require('mysql');
const cors = require('cors');
const path = require("path");

const { DATABASE_CONFIG } = require("./database/config");
const { DatabaseQuery } = require("./database/query");

const port = 8080;
const conn = mysql.createConnection(DATABASE_CONFIG);
const databaseQuery = new DatabaseQuery();

// conn.query(databaseQuery.selectAllLeads, (error, rows, fields) => {
//     rows.forEach(row => console.log(row.creation_date.toISOString().split('T')[0]))
// });

conn.query(databaseQuery.selectAllLeads, (error, rows, fields) => {
    const result = rows.map(row => {
        Object.keys(row).forEach(key => {
            key.includes('date') && row[key] ? row[key] = row[key].toISOString().split('T')[0] : row[key];
        });
        Object.assign({}, row);
    });
});