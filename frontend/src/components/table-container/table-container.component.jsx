import React from 'react';

import './table-container.styles.css';

import TableHeader from '../table-header/table-header.component';
import TableBody from '../table-body/table-body.component';
import EmptyLeads from '../empty-leads/empty-leads.component';
import { SpinnerOverlay, SpinnerContainer } from '../spinner/spinner.component';

const TableContainer = ({ data }) => {
    return (
        !data ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
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