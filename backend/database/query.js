class Query {
    constructor() {
        this.selectAllLeads = "SELECT * FROM leads";
    }

    changeLeadStage(id, stage) {
        return `UPDATE leads SET stage = '${stage}' WHERE id = ${id};`
    }

    updateLead(lead) {
        let stmt = `UPDATE leads SET `;
        Object.keys(lead).forEach((key, index) => {
            if (key !== 'id') stmt += lead[key] ? 
                index !== Object.keys(lead).length - 1 ? 
                    `${key} = '${lead[key]}', `
                    : `${key} = '${lead[key]}' `
                : index !== Object.keys(lead).length - 1 ?
                    `${key} = NULL, `
                    : `${key} = NULL `
        });
        stmt += `WHERE id = ${lead.id}`;
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
};

module.exports = {
    DatabaseQuery: Query
};