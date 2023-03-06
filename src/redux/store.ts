import {combineReducers, createStore} from 'redux';
import {categoryReducer} from "./categoryReducer";
import {eventsReducer} from "./eventsReducer";
import {eventActionType, eventReducer} from "./eventReducer";


const RootReducer = combineReducers({
    categories: categoryReducer,
    events: eventsReducer,
    event: eventReducer,
})


export const store = createStore(RootReducer)
export type AppRootStateType = ReturnType<typeof store.getState>
export type ActionsType = eventActionType


// @ts-ignore
window.store = store
