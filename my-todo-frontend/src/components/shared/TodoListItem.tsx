import React from 'react';
import styles from '../../styles/TodoListItem.module.css';

import { TodoListItemModel } from '../types';

import BtnCompleteImage from '../../images/btn_todo_item_complete.png';
import BtnDeleteImage from '../../images/btn_todo_item_delete.png';

interface TodoListItemProperties {
    height: number,
    data: TodoListItemModel,

    deleteItem?: (item: TodoListItemModel) => void
}

function TodoListItem({ height, data, deleteItem }: TodoListItemProperties) {
    const btnCompleteClick = () => {


    };

    const btnDeleteClick = () => {
        if (deleteItem === undefined)
            return;

        deleteItem(data);
    };

    return (
        <div className={styles.TodoListItem} style={{ flexBasis: height }}>
            <input type="text" value={data.name} />

            <div className={styles.Btns}>
                <div className={styles.BtnComplete} onClick={btnCompleteClick}>
                    <img src={BtnCompleteImage} height={32} width={32} alt="Mark todo item as completed" />
                </div>

                <div className={styles.BtnDelete} onClick={btnDeleteClick}>
                    <img src={BtnDeleteImage} height={32} width={32} alt="Delete todo item" />
                </div>
            </div>
        </div>
    );
}

export default TodoListItem;