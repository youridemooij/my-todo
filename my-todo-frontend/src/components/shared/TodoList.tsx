import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../third-party/StrictModeDroppable';

import styles from '../../styles/TodoList.module.css';

import { TodoListItemModel, TodoListModel } from '../types';
import TodoListItem from './TodoListItem';

interface TodoListProperties {
    data: TodoListModel,

    deleteItem?: (item: TodoListItemModel) => void,
    updateItems?: (listId: number, items: TodoListItemModel[]) => void,
    toggleItemEditable?: (item: TodoListItemModel) => void,
    updateItemName?: (newName: string, listId: number, itemId: number) => void
};

function TodoList({ data, deleteItem, updateItems, toggleItemEditable, updateItemName }: TodoListProperties) {

    const handleDragEnd = (result: { destination: any; source?: any; }) => {
        if (!result.destination)
            return;

        if (data.items == undefined)
            return;

        if (updateItems === undefined)
            return;

        const { source, destination } = result;

        const reorderedItems = Array.from(data.items);
        const [removed] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, removed);

        const itemsWithUpdatedOrder = reorderedItems.map((item, index) => {
            return { ...item, order: index };
        });

        updateItems(data.id, itemsWithUpdatedOrder);
    };

    const deleteListItem = (listItem: TodoListItemModel) => {
        if (deleteItem === undefined)
            return;

        deleteItem(listItem);
    };

    const toggleListItemEditable = (listItem: TodoListItemModel) => {
        if (toggleItemEditable === undefined)
            return;

        toggleItemEditable(listItem);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <StrictModeDroppable droppableId={`droppable-todo-list-${data.id}`}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className={styles.TodoList}>
                            {(data.items || []).map((todoItem, index) => (
                                <Draggable key={todoItem.id} draggableId={String(todoItem.id)} index={index} disableInteractiveElementBlocking={!todoItem.editable}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TodoListItem
                                                key={todoItem.id}
                                                data={todoItem}
                                                deleteItem={deleteListItem}
                                                toggleItemEditable={toggleListItemEditable}
                                                updateItemName={updateItemName}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        </DragDropContext>
    );
}

export default TodoList;