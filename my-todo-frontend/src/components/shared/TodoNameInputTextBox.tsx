import React from 'react';
import InputTextBox from './InputTextBox';

interface TodoNameInputTextBoxProperties {
    addTodoItem: (todoName: string) => void;
}

function TodoNameInputTextBox({ addTodoItem }: TodoNameInputTextBoxProperties) {
    return (
        <InputTextBox
            width={550}
            placeholder="Enter todo name..."
            id="newTodoItemNameInput"
            label="Todo name"
            textEntered={addTodoItem}
        />
    );
}

export default TodoNameInputTextBox;