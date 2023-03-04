import {combineReducers, createStore} from 'redux';
import {categoryReducer} from "./categoryReducer";

import {eventsReducer} from "./eventsReducer";
import {eventActionType, eventReducer} from "./eventReducer";


const RootReducer = combineReducers({

    categories: categoryReducer,
    events: eventsReducer,
    event: eventReducer



})




export const store = createStore(RootReducer)


export type AppRootStateType = ReturnType<typeof store.getState>


export type ActionsType =
    eventActionType


/*export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, ActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    ActionsType>*/


// @ts-ignore
window.store = store
