import React from 'react';
import InputTextBox from './InputTextBox';
import styles from '../../styles/TodoNameInputTextBox.module.css';

interface TodoNameInputTextBoxProperties {
    addTodoItem: (todoName: string) => void;
}

function TodoNameInputTextBox({ addTodoItem }: TodoNameInputTextBoxProperties) {
    return (
        <div className={styles.TodoNameInputTextBox}>
            <InputTextBox
                width={300}
                placeholder="Enter todo name..."
                id="newTodoItemNameInput"
                label="Todo name"
                textEntered={addTodoItem}
                />
        </div>
    );
}

export default TodoNameInputTextBox;