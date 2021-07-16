class Query {
    constructor() {
        this.selectAllLeads = "SELECT * FROM leads";
    }

    changeLeadStage(id, stage) {
        return `UPDATE leads SET stage = '${stage}' WHERE lead_id = ${id};`
    }

    updateLead(lead) {
        let stmt = `UPDATE leads SET `;
        Object.keys(lead).forEach((key, index) => {
            if (key !== 'lead_id') stmt += lead[key] ? 
                index !== Object.keys(lead).length - 1 ? 
                    `${key} = '${lead[key]}', `
                    : `${key} = '${lead[key]}' `
                : index !== Object.keys(lead).length - 1 ?
                    `${key} = NULL, `
                    : `${key} = NULL `
        });
        stmt += `WHERE lead_id = ${lead.lead_id}`;
        return stmt;
    }

    insertNewLead(data) {
        let stmt = `INSERT INTO leads (`;
        Object.keys(data).forEach((key, index) => {
            index === Object.keys(data).length - 1 ? stmt += `${key}) VALUES (` : stmt += `${key},`;
        });
        Object.values(data).forEach((value, index) => {
            index === Object.values(data).length - 1 ? stmt += `'${value}');` : stmt += `'${value}',`;
        });
        return stmt;
     }

     getLeadNotes(leadId) {
         return `SELECT * FROM record WHERE leads_lead_id = ${leadId} AND record_type = 'note';`;
     }

     getUserById(userId) {
         return `SELECT * FROM workers WHERE worker_id = '${userId}';`;
     }

     insertNewWorker(id, displayName, email) {
         return `INSERT INTO workers (worker_id, worker_name, worker_email) VALUES ('${id}', '${displayName}', '${email}');`;
     }

     insertNewNote(workerId, content, leadId) {
        return `INSERT INTO record (workers_worker_id, leads_lead_id, record_content, record_type) VALUES ('${workerId}', '${leadId}', '${content}', 'note');`;
    }
};

module.exports = {
    DatabaseQuery: Query
};