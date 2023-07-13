import React from 'react';
import styles from '../styles/Content.module.css';

import InputTextBox from './shared/InputTextBox';

function Content() {
    return (
        <div className={styles.Content}>
            <InputTextBox width={550} placeholder="Enter todo name..." id="newTodoItemNameInput" label="Todo name" />
        </div>
    );
}

export default Content;
