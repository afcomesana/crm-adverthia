const columns = [
    {
        field: 'lead_id',
        headerName: 'ID',
        width: null,
        type: 'text'
    },
    {
        field: 'email',
        headerName: 'Correo electrónico',
        width: '200px',
        type: 'email'
    },
    {
        field: 'name',
        headerName: 'Nombre',
        width: '100px',
        type: 'text'
    },
    {
        field: 'last_name',
        headerName: 'Apellidos',
        width: '200px',
        type: 'text'
    },
    {
        field: 'phone',
        headerName: 'Teléfono',
        width: '100px',
        type: 'tel'
    },
    {
        field: 'city',
        headerName: 'Ciudad',
        width: null,
        type: 'text'
    },
    {
        field: 'country',
        headerName: 'País',
        width: null,
        type: 'text'
    },
    {
        field: 'stage',
        headerName: 'Estado',
        width: null,
        type: 'select'
    },
    {
        field: 'creation_date',
        headerName: 'Fecha de creación',
        width: 'auto',
        type: 'date'
    },
    {
        field: 'comments',
        headerName: 'Comentarios',
        width: null,
        type: 'textarea'
    }
];

export default columns;