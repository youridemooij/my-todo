import React from 'react';
import styles from '../styles/Content.module.css';

import { TodoListModel, TodoListItemModel } from './types';
import InputTextBox from './shared/InputTextBox';
import TodoList from './shared/TodoList';

function Content() {
    const [todoLists, setTodoLists] = React.useState<TodoListModel[]>([
        {
            id: 0,
            name: "Default"
        },
    ]);

    const addTodoItem = (todoName: string, listId: number) => {
        const updatedLists = todoLists.map((list) => {
            if (list.id !== listId) {
                return list;
            }

            const newItemsArray = list.items ? [...list.items] : [];

            newItemsArray.push({
                id: newItemsArray.length,
                listId: list.id,
                name: todoName,
                state: 0,
                order: newItemsArray.length
            });

            return {
                ...list,
                items: newItemsArray
            };
        });

        setTodoLists(updatedLists);
    };

    const deleteTodoItem = (listItem: TodoListItemModel) => {
        const updatedLists = todoLists.map((list) => {
            if (list.id !== listItem.listId) {
                return list;
            }

            return {
                ...list,
                items: list.items ? list.items.filter(item => item.id !== listItem.id) : []
            };
        });

        setTodoLists(updatedLists);
    };

    const updateTodoItems = (listId: number, items: TodoListItemModel[]) => {
        const updatedLists = todoLists.map((list) => {
            if (list.id !== listId) {
                return list;
            }

            return {
                ...list,
                items: items
            };
        });

        setTodoLists(updatedLists);
    };

    return (
        <div className={styles.Content}>
            <br />
            <InputTextBox
                width={500}
                placeholder="Enter todo name..."
                id="TodoItemNameInputTextBox"
                label="Enter todo name..."
                textEntered={text => addTodoItem(text, 0)}
                />  
            <br />
            <br />
            <br />
            {todoLists.map((todoList) => (
                <TodoList
                    key={todoList.id}
                    width={500}
                    data={todoList}
                    deleteItem={deleteTodoItem}
                    updateItems={updateTodoItems} />
            ))}
        </div>
    );
}

export default Content;
