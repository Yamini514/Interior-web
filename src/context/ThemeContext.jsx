// Themecontext. jsx
// Import required dependencies
import React, { createContext, useContext } from 'react';

// Global theme object
const themeprovider = createContext();
// ThemeProvider component to wrap the application
export const ThemeProvider =({children}) =>
{
    const theme ={
        primaryColor: 'blue',
        secondaryColor: 'green',
        backgroundColor: 'lightgray',
    };
    const value = theme;
    return (
        <themeprovider.Provider value={value}>
            {children}
        </themeprovider.Provider>
    );
}

// Custom hook to access the theme context
export const useTheme = () => {
    const context = useContext(themeprovider);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }   
    return context;
}