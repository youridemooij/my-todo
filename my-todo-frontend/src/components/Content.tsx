import React, { useState, useEffect } from 'react';
import styles from '../styles/Content.module.css';

import TodoNameInputTextBox from './shared/TodoNameInputTextBox';
import TodoList from './shared/TodoList';

function Content() {
    const [todoItems, setTodoItemsArray] = useState<string[]>([]);

    const addTodoItem = (todoName: string) => {
        setTodoItemsArray(oldArray => [...oldArray, todoName]);
    }

    return (
        <div className={styles.Content}>
            <br />
            <TodoNameInputTextBox addTodoItem={addTodoItem} />  
            <br />
            <br />
            <br />
            <TodoList width={500} items={ todoItems } />
        </div>
    );
}

export default Content;
