import React from 'react';
import {rootReducerType, store} from "./redux/reduxStore";
import {StoreType} from "./redux/store";

//{} as StoreType

export const StoreContext = React.createContext({} as StoreType)

/*export type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}*/
