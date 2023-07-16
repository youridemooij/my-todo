import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../third-party/StrictModeDroppable';

import styles from '../../styles/TodoList.module.css';

import { TodoListItemModel, TodoListModel } from '../types';
import TodoListItem from './TodoListItem';

interface TodoListProperties {
    width: number,
    data: TodoListModel,

    deleteItem?: (item: TodoListItemModel) => void,
    updateItems?: (listId: number, items: TodoListItemModel[]) => void
}

function TodoList({ width, data, deleteItem, updateItems }: TodoListProperties) {

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

    return (
        <div style={{ width: width }}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <StrictModeDroppable droppableId={`droppable-todo-list-${data.id}`}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <div className={styles.TodoList}>
                                {(data.items || []).map((todoItem, index) => (
                                    <Draggable key={todoItem.id} draggableId={String(todoItem.id)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoListItem
                                                    key={todoItem.id}
                                                    height={60}
                                                    data={todoItem}
                                                    deleteItem={deleteListItem}
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
        </div>
    );
}

export default TodoList;