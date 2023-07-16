import React from 'react';
import styles from '../../styles/InputTextBox.module.css';

interface InputTextBoxProperties {
    width: number,
    placeholder: string
    id: string;
    label: string;
    textEntered?: (newValue: string) => void;
}

function InputTextBox({ width, placeholder, id, label, textEntered }: InputTextBoxProperties) {
    const [currentValue, setCurrentvalue] = React.useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentvalue(event.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (textEntered) {
                textEntered(currentValue);
                setCurrentvalue("");
            }
        }
    }

    return (
        <div className={styles.InputTextBox} style={{ width: width }}>
            <label htmlFor={id} style={{ display: "none" }}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                value={currentValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} />
        </div>
    );
}

export default InputTextBox;