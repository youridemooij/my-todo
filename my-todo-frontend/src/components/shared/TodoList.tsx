import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

import styles from '../../styles/TodoList.module.css';

interface TodoListProperties {
    width: number
    items: string[]
}

function TodoList({ width, items }: TodoListProperties) {
    const listItems = items.map(item =>
        <TodoListItem key={item} height={60} item={item} />
    );

    return (
        <div className={styles.TodoList} style={{ width: width }}>
            {listItems}
        </div>
    );
}

export default TodoList;