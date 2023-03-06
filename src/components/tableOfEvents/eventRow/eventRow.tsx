import React from 'react';
import {RateType} from "../../../redux/eventsReducer";
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
    betsCount: number
}

export const EventRow: React.FC<EventRowPropsType> = ({
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
            <td className={css.eventRow_icon_wrapper}>
                <img
                src={categoryIcon?.icon}
                alt='icon'
                className={live ? `${css.eventRow_icon} ${css.eventRow_icon_live}` : css.eventRow_icon}/>
            </td>

            <td className={live ? `${css.eventRow_time} ${css.eventRow_time_live}` : css.eventRow_time}>{live ? 'Live' : 'Soon'}</td>

            <td className={css.players_wrapper}>
                <NavLink className={css.eventRow_players_link} to={`/sports/${category}/${eventId}`}>
                    <span>{host}-</span>  <span>{guest}</span>
                </NavLink>
            </td>

            <td className={css.winOfHost_wrapper}>{rate.winOfHost}</td>
            <td className={css.draw_wrapper}>{rate.draw}</td>
            <td className={css.winOfGuest_wrapper}>{rate.winOfGuest}</td>
            <td className={css.totalBets_wrapper}>{betsCount}</td>
        </tr>
    )
};

