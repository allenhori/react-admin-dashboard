import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import './index.css';

const rootElement = document.getElementById('root');

// Add a type guard to ensure rootElement is not null
if (rootElement) {
    ReactDOM.createRoot(rootElement as HTMLElement).render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>
    );
}
