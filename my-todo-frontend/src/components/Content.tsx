import React, { useState, useEffect } from 'react';
import styles from '../styles/Content.module.css';

import TodoNameInputTextBox from './shared/TodoNameInputTextBox';

function Content() {
    const [todoItems, setTodoItemsArray] = useState<string[]>([]);

    const addTodoItem = (todoName: string) => {
        setTodoItemsArray(oldArray => [...oldArray, todoName]);
    }

    return (
        <div className={styles.Content}>
            <TodoNameInputTextBox addTodoItem={addTodoItem} />    
        </div>
    );
}

export default Content;
