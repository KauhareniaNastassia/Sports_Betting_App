import footballIcon from '../assets/img/football.svg'
import tennisIcon from '../assets/img/tennis.svg'
import hockeyIcon from '../assets/img/hockey.svg'
import volleyballIcon from '../assets/img/volleyball.svg'
import baseballIcon from '../assets/img/baseball.svg'
import basketballIcon from '../assets/img/basketball.svg'
import boxingIcon from '../assets/img/boxing.svg'
import handballIcon from '../assets/img/handball.svg'
import cycling from '../assets/img/cycling.svg'
import {EventsItemType} from "./eventsReducer";

const initialState: InitialEventStateType = {
    successMessage: ''
}


export const eventReducer = (state: InitialEventStateType = initialState, action: eventActionType): InitialEventStateType => {
    switch (action.type) {
        case 'event/SET-SUCCESS-MESSAGE':
            return {...state, successMessage: action.successMessage}

        default:
            return state
    }
}

//actions

export const setAppSuccessMessageAC = (successMessage: string | null) => ({
    type: 'event/SET-SUCCESS-MESSAGE',
    successMessage
} as const)

//  types

export type eventActionType = ReturnType<typeof setAppSuccessMessageAC>

type InitialEventStateType = {
    successMessage: string | null
}








