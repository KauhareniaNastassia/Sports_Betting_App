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








