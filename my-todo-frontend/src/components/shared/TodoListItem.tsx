import React from 'react';
import styles from '../../styles/TodoListItem.module.css';

import { TodoListItemModel } from '../types';

import BtnCompleteImage from '../../images/btn_todo_item_complete.png';
import BtnDeleteImage from '../../images/btn_todo_item_delete.png';
import BtnEditImage from '../../images/btn_todo_item_edit.png';

interface TodoListItemProperties {
    data: TodoListItemModel,
    deleteItem?: (item: TodoListItemModel) => void,
    toggleItemEditable?: (item: TodoListItemModel) => void,
    updateItemName?: (newName: string, listId: number, itemId: number) => void
}

function TodoListItem({ data, deleteItem, toggleItemEditable, updateItemName }: TodoListItemProperties) {
    const btnCompleteClick = () => {


    };

    const btnDeleteClick = () => {
        if (deleteItem === undefined)
            return;

        deleteItem(data);
    };

    const btnEditClick = () => {
        if (toggleItemEditable === undefined)
            return;

        toggleItemEditable(data);
    };

    const handleNameChange = (newValue: string, itemId: number) => {
        if (updateItemName === undefined)
            return;

        updateItemName(newValue, data.listId, itemId);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && data.editable) {
            btnEditClick();
        }
    };

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (data.editable && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [data.editable]);

    return (
        <div className={styles.TodoListItem}>
            <input
                ref={inputRef}
                type="text" value={data.name}
                readOnly={!data.editable}
                className={data.editable ? styles.Editable : ''}
                onChange={e => handleNameChange(e.target.value, data.id)}
                onBlur={data.editable ? btnEditClick : undefined}
                onKeyDown={handleKeyDown}
            />

            <div className={styles.Btns}>
                <div className={`${styles.BtnEdit} ${data.editable ? styles.BtnEditActive : ''}`} onClick={btnEditClick}>
                    <img src={BtnEditImage} alt="Edit todo item" />
                </div>

                <div className={styles.BtnComplete} onClick={btnCompleteClick}>
                    <img src={BtnCompleteImage} alt="Mark todo item as completed" />
                </div>

                <div className={styles.BtnDelete} onClick={btnDeleteClick}>
                    <img src={BtnDeleteImage} alt="Delete todo item" />
                </div>
            </div>
        </div>
    );
}

export default TodoListItem;