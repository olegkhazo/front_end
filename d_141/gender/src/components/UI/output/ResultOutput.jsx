import React from 'react';
import classes from './ResultOutput.module.css';

const ResultOutput = (props) => {
    return (
        <div className={classes.outputBlock}>
            <h1 className={classes.h2}>{props.name} - {props.gender}</h1>
        </div>
    );
};

export default ResultOutput;