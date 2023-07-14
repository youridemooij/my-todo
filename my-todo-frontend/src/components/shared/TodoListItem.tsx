import React, { useState } from 'react';
import styles from '../../styles/TodoListItem.module.css';

interface TodoListItemProperties {
    height: number,
    item: string
}

function TodoListItem({ height, item }: TodoListItemProperties) {
    return (
        <div className={styles.TodoListItem} style={{ flexBasis: height }}>
            { item }
        </div>
    );
}

export default TodoListItem;