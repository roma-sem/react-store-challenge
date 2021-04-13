import React, { useReducer, useContext } from 'react';

// Prep data layer
export const AppStateContext = React.createContext();

// Wrap App into Data layer provider
export const AppStateContextProvider = ({ reducer, appState, children }) =>
    <AppStateContext.Provider value={useReducer(reducer, appState)}>
        {children}
    </AppStateContext.Provider>

export const useMyAppStateContext = () => useContext(AppStateContext);
