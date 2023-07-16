import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoList from './TodoList';

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container!);

    root.render(<TodoList data={{ id: 0, name: "Default" }} />);
});