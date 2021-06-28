import React from 'react';

import './table-container.styles.css';

import TableHeader from '../table-header/table-header.component';
import TableBody from '../table-body/table-body.component';
import EmptyLeads from '../empty-leads/empty-leads.component';

const TableContainer = ({ data }) => {
    console.log(data);
    return (
        !data ? (
            <h1>Cargando...</h1>
        ) : data.isAxiosError ? (
            <h1>Error al conectar con el servidor</h1>
        ) : data.length > 0 ? (
            <table className="table-container">
                <TableHeader />
                <TableBody data={data} />
            </table>
        ) : (
            <EmptyLeads />
        )
    );
}

export default TableContainer;