import React from 'react';
import styles from '../styles/App.module.css';

import Header from './Header';
import Content from './Content';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <br />
            <Content />
        </div>
    );
}

export default App;
