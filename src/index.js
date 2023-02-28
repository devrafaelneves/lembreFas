import React from 'react';
import Route from './route';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components/native';

const Application = () => {
    return (
        <ThemeProvider theme={theme}>
            <Route />
        </ThemeProvider>
    )
}

export default Application;