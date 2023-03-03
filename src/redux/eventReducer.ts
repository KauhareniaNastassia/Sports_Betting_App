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
    eventId: 0,
    category: '',
    live: false,
    date: '',
    host: '',
    guest: '',
    betsCount: 0,
    rate: {
        winOfHost: 0,
        winOfGuest: 0,
        draw: 0,
    }
}


 const eventReducer = (state: InitialEventStateType = initialState): InitialEventStateType => {
    return state
}


//  types

type InitialEventStateType = EventsItemType








