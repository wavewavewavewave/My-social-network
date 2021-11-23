import React from 'react';
import {rootReducerType, store} from "./redux/reduxStore";

export const StoreContext = React.createContext({} as rootReducerType)

export type ProviderType = {
    store: rootReducerType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
