import footballIcon from '../assets/img/football.svg'
import tennisIcon from '../assets/img/tennis.svg'
import hockeyIcon from '../assets/img/hockey.svg'
import volleyballIcon from '../assets/img/volleyball.svg'
import baseballIcon from '../assets/img/baseball.svg'
import basketballIcon from '../assets/img/basketball.svg'
import boxingIcon from '../assets/img/boxing.svg'
import handballIcon from '../assets/img/handball.svg'
import cycling from '../assets/img/cycling.svg'

const initialState: InitialCategoryStateType = {
    items: [
        {
            id: 1,
            name: 'Football',
            icon: footballIcon
        },
        {
            id: 2,
            name: 'Tennis',
            icon: tennisIcon
        },
        {
            id: 3,
            name: 'Hockey',
            icon: hockeyIcon
        },
        {
            id: 4,
            name: 'Volleyball',
            icon: volleyballIcon
        },
        {
            id: 5,
            name: 'Baseball',
            icon: baseballIcon
        },
        {
            id: 6,
            name: 'Basketball',
            icon: basketballIcon
        },
        {
            id: 7,
            name: 'Boxing',
            icon: boxingIcon
        },
        {
            id: 8,
            name: 'Handball',
            icon: handballIcon
        },
        {
            id: 9,
            name: 'Cycling',
            icon: cycling
        },

    ] as CategoryItemType[]
}


export const categoryReducer = (state: InitialCategoryStateType = initialState): InitialCategoryStateType => {
            return state
    }


//  types

type InitialCategoryStateType = {
    items: CategoryItemType[]
}

export type CategoryItemType = {
    id: number,
    name: string,
    icon: any
}






