import React from 'react';
import Route from './route';
import { theme } from './theme';

const Application = () => {
    return (
        <ThemeProvider theme={theme}>
            <Route />
        </ThemeProvider>
    )
}

export default Application;