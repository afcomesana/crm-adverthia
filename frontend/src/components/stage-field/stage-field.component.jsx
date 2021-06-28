import React from 'react';
import { connect } from 'react-redux';

import { changeStageStart } from '../../redux/lead/lead.actions';

import './stage-field.styles.css';

const StageField = ({ id, stage, changeStageStart, index }) => {
    const handleChange = event => {
        const { value } = event.target;
        changeStageStart({id: id, stage: value});
    }

    return (
        <select className="stage-field" style={{background: `${index % 2 ? '#25273a' : '#1d1f2e'}`}} onChange={handleChange} name="stage" value={stage.toLowerCase()}>
            <option className="stage-field-option" value="candidato">Candidato</option>
            <option className="stage-field-option" value="oportunidad">Oportunidad</option>
            <option className="stage-field-option" value="cliente">Cliente</option>
        </select>
    );
}

const mapDispatchToProps = dispatch => ({
    changeStageStart: data => dispatch(changeStageStart(data))
});

export default connect(null, mapDispatchToProps)(StageField);