import React from 'react';

interface InputTextBoxProperties {
    properties: {
        width: number,
        placeholder: string
    };
}

function InputTextBox({ properties }: InputTextBoxProperties) {
    return (
        <div className="InputTextBox" style={{ flexBasis: properties.width }}>
            <input type="text" placeholder={properties.placeholder}></input>
        </div>
    );
}

export default InputTextBox;