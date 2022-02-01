import React from 'react';
//import {StoreType} from "./redux/store";
import {rootReducerType} from "./redux/reduxStore";
import {CombinedState, Store} from "redux";

export const StoreContext = React.createContext({} as Store<CombinedState<rootReducerType>>)

export type ProviderType = {
    store: Store<CombinedState<rootReducerType>>;
    children: React.ReactNode;
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
