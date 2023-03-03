import {combineReducers, compose, createStore} from 'redux';
import {categoryReducer} from "./categoryReducer";

import {eventsReducer} from "./eventsReducer";




const RootReducer = combineReducers({

    categories: categoryReducer,
    events: eventsReducer,
    //event: eventReducer



})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(RootReducer)


export type AppRootStateType = ReturnType<typeof store.getState>


/*export type ActionsType =
    | BookListActionTypes
    | BookActionsType
    | CategoriesListActionTypes
    | AuthActionsType
    | AppActionsType*/


/*export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, ActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    ActionsType>*/


// @ts-ignore
window.store = store
