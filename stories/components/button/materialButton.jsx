import React from 'react';
import PropTypes from 'prop-types';
import './materialButton.scss';

const materialButton = ( (props) => {
    return (<button type="button" onClick={props.onClick}>{props.textValue}</button>);
});

export default materialButton;

materialButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    textValue: PropTypes.string.isRequired
}