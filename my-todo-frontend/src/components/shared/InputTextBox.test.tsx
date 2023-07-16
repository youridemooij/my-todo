import React from 'react';
import { createRoot } from 'react-dom/client';

import InputTextBox from './InputTextBox';

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container!);

    root.render(<InputTextBox width={0} placeholder={''} id={''} label={''} />);
});