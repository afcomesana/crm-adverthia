const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const { DATABASE_CONFIG } = require("./database/config");
const { DatabaseQuery } = require("./database/query");

const app = express();
const port = 5000;
const conn = mysql.createConnection(DATABASE_CONFIG);
const databaseQuery = new DatabaseQuery()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

conn.connect();

app.get('/leads', (req, res) => {
    
    try {
        conn.query(databaseQuery.selectAllLeads, (error, rows, fields) => {
            const result = rows.map(row => Object.assign({}, row));
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/change-lead-stage', (req, res) => {
    const { body: {id, stage} } = req;
    try {
        conn.query(databaseQuery.changeLeadStage(id, stage), (error, rows, fields) => {
            const { affectedRows } = rows;
            affectedRows ? res.send({
                status: "OK",
                responseCode: 200
            }) : res.send({
                status: "ERROR",
                responseCode: 500
            });
        });
    } catch (error) {
        console.log(error);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/public", "index.html"))
});

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});


