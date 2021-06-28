class Query {
    constructor() {
        this.selectAllLeads = "SELECT * FROM leads";
    }

    changeLeadStage(id, stage) {
        return `UPDATE leads SET stage = '${stage}' WHERE id = ${id};`
    }
};

module.exports = {
    DatabaseQuery: Query
};