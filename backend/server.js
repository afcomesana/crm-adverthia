const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const { DATABASE_CONFIG } = require("./database/config");
const { DatabaseQuery } = require("./database/query");

const app = express();
const port = 8080;
const conn = mysql.createConnection(DATABASE_CONFIG);
const databaseQuery = new DatabaseQuery();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

conn.connect();

app.get('/leads', (req, res) => {
    
    try {
        conn.query(databaseQuery.selectAllLeads, (error, rows, fields) => {
            const result = rows.map(row => {
                Object.keys(row).forEach(key => {
                    key.includes('date') && row[key] ? row[key] = row[key].toISOString().split('T')[0] : row[key];
                });
                return Object.assign({}, row)
            });
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

app.post('/update-lead', (req, res) => {
    const { body } = req;
    try {
        conn.query(databaseQuery.updateLead(body), (error, rows, fields) => {
            if (error) console.log(error);
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

app.post('/insert-new-lead', (req, res) => {
    const { body } = req;
    try {
        conn.query(databaseQuery.insertNewLead(body), (error, rows, fields) => {
            const { affectedRows } = rows;
            affectedRows ? res.send({
                status: "OK",
                responseCode: 200
            }) : res.send({
                status: "ERROR",
                responseCode: 400
            });
        });
    } catch (error) {
        res.send({
            status: "ERROR",
            responseCode: 500,
            errorMessage: error.message
        });
    }
});

app.post('/get-lead-notes', (req, res) => {
    const { body: {lead_id} } = req;
    try {
        conn.query(databaseQuery.getLeadNotes(lead_id), (error, rows, fields) => {
            const result = rows.map(row => Object.assign({}, row));
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/get-user-by-id', (req, res) => {
    const { body: { user_id }} = req;
    try {
        conn.query(databaseQuery.getUserById(user_id), (error, rows, fields) => {
            const result = rows.map(row => Object.assign({}, row));
            res.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/register-new-worker', (req, res) => {
    const { body: { id, displayName, email } } = req;
    try {
        conn.query(databaseQuery.insertNewWorker(id, displayName, email), (error, rows, fields) => {
            const { affectedRows } = rows;
            affectedRows ? res.send({
                status: "OK",
                responseCode: 200
            }) : res.send({
                status: "ERROR",
                responseCode: 400
            });
        });
    } catch (error) {
        res.send({
            status: "ERROR",
            responseCode: 500,
            errorMessage: error.message
        });
    }
});

app.post('/insert-new-note', (req, res) => {
    const { body: { workerId, content, leadId } } = req;
    try {
        conn.query(databaseQuery.insertNewNote(workerId, content, leadId), (error, rows, fields) => {
            const { affectedRows } = rows;
            affectedRows ? res.send({
                status: "OK",
                responseCode: 200
            }) : res.send({
                status: "ERROR",
                responseCode: 400
            });
        });
    } catch (error) {
        res.send({
            status: "ERROR",
            responseCode: 500,
            errorMessage: error.message
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"))
});

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});