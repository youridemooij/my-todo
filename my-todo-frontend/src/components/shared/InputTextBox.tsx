import React from 'react';
import styles from '../../styles/InputTextBox.module.css';

interface InputTextBoxProperties {
    width: number,
    placeholder: string
    id: string;
    label: string;
}

function InputTextBox({ width, placeholder, id, label }: InputTextBoxProperties) {
    return (
        <div className={styles.InputTextBox} style={{ flexBasis: width }}>
            <label htmlFor={id} style={{ display: "none" }}>{label}</label>
            <input type="text" placeholder={placeholder}></input>
        </div>
    );
}

export default InputTextBox;