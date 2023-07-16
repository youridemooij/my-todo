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

    const toggleTodoItemEditable = (listItem: TodoListItemModel) => {
        const updatedLists = todoLists.map((list) => {
            if (list.id !== listItem.listId) {
                return list;
            }

            if (list.items === undefined)
                return list;

            const newItems = list.items.map((item) => {
                if (item.id !== listItem.id) {
                    return item;
                }

                return { ...item, editable: !item.editable };
            });

            return {
                ...list,
                items: newItems
            };
        });

        setTodoLists(updatedLists);
    };

    const updateTodoItemName = (newName: string, listId: number, itemId: number) => {
        const updatedLists = todoLists.map((list) => {
            if (list.id !== listId) {
                return list;
            }

            if (list.items === undefined)
                return list;

            const updatedItems = list.items.map((item) => {
                if (item.id !== itemId) {
                    return item;
                }

                return { ...item, name: newName };
            });

            return {
                ...list,
                items: updatedItems
            };
        });

        setTodoLists(updatedLists);
    };

    return (
        <div className={styles.Content}>
            <InputTextBox
                placeholder="Enter todo name..."
                id="TodoItemNameInputTextBox"
                label="Enter todo name..."
                textEntered={text => addTodoItem(text, 0)}
                />  

            {todoLists.map((todoList) => (
                <TodoList
                    key={todoList.id}
                    data={todoList}
                    deleteItem={deleteTodoItem}
                    updateItems={updateTodoItems}
                    toggleItemEditable={toggleTodoItemEditable}
                    updateItemName={updateTodoItemName} />
            ))}
        </div>
    );
}

export default Content;
