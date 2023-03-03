import React from 'react';
import {EventsItemType, RateType} from "../../../redux/eventsReducer";
import {useAppSelector} from "../../../hook/hook";
import css from './eventRow.module.scss'
import {NavLink} from "react-router-dom";

type EventRowPropsType = {

    eventId: number
    category: string
    live: boolean
    host: string
    guest: string
    rate: RateType
    date: string
    betsCount: number
}

export const EventRow: React.FC<EventRowPropsType> = ({
                                                          date,
                                                          eventId,
                                                          rate,
                                                          host,
                                                          guest,
                                                          live,
                                                          category,
                                                          betsCount
                                                      }) => {

    const categories = useAppSelector(state => state.categories.items)
    const categoryIcon = categories.find(el => el.name === category)


    return (
        <tr className={css.eventRow__wrapper} key={eventId}>
            <td><img src={categoryIcon?.icon} alt='icon' className={css.eventRow_icon}/></td>
            <td>{live ? 'Live' : 'Soon'}</td>

            <td>
                <NavLink to={`/sports/${category}/${eventId}`}>

                    {host} - {guest}
                </NavLink>

            </td>

            <td>{rate.winOfHost}</td>
            <td>{rate.draw}</td>
            <td>{rate.winOfGuest}</td>
            <td>{betsCount}</td>


        </tr>

    )

};

