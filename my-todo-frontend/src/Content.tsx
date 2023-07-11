import React from 'react';
import InputTextBox from './InputTextBox';

function Content() {
    return (
        <div id="Content">
            <InputTextBox properties={{
                width: 550,
                placeholder: 'Enter todo name...'
            }} />
        </div>
    );
}

export default Content;
