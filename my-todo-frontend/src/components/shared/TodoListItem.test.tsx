import React from 'react';
import { createRoot } from 'react-dom/client';

import { TodoListItemModel } from '../types';

import TodoListItem from './TodoListItem';

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container!);

    root.render(<TodoListItem data={{ id: 0, listId: 0, name: "test item", order: 0 }} />);
});