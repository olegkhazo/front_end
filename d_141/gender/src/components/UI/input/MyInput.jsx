import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input
            className={classes.myInput}
            type='text'
            placeholder='Name'
            {...props}
        />
    );
};

export default MyInput;