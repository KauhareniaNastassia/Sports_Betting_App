import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/hook";
import {PlaceBetForm} from "./placeBetForm/placeBetForm";
import css from './eventPage.module.scss'
import moment from "moment";

export const EventPage: React.FC = () => {
    let {eventId} = useParams()
    let exactId = Number(eventId)
    const events = useAppSelector(state => state.events.events)
    const exactEvent = events.find(event => event.eventId === exactId)

    let date = moment(exactEvent?.date).format("MMMM Do YYYY, h:mm:ss a")

    return (
        <div>
            {exactEvent &&

                <div className={css.eventPage_wrapper}>

                    <div className={css.eventPage_title_wrapper}>
                        <h2 className={css.eventPage_title}>Match Result</h2>
                        <div className={css.eventInfo_date}>
                            {date}
                        </div>
                    </div>

                    <div className={css.eventInfo_wrapper}>
                        <div className={css.eventInfo_bet_wrapper}>
                            <span>
                                {exactEvent.host}
                            </span>
                            <span className={css.eventInfo_bet_rate}>
                                {exactEvent.rate.winOfHost}
                            </span>
                        </div>

                        <div className={css.eventInfo_bet_wrapper}>
                            <span>
                                Draw
                            </span>
                            <span  className={css.eventInfo_bet_rate}>
                                {exactEvent.rate.draw}
                            </span>
                        </div>

                        <div className={css.eventInfo_bet_wrapper}>
                            <span>
                                {exactEvent.guest}
                            </span>
                            <span  className={css.eventInfo_bet_rate}>
                                {exactEvent.rate.winOfGuest}
                            </span>
                        </div>

                        <PlaceBetForm host={exactEvent.host} guest={exactEvent.guest} rate={exactEvent.rate}/>

                    </div>
                </div>
            }
        </div>
    );
};

