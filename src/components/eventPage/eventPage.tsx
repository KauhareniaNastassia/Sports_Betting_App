import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/hook";


export const EventPage = () => {
    let {eventId} = useParams()


    let exactId = Number(eventId)

    const events = useAppSelector(state => state.events.events)
    const exactEvent = events.find(event => event.eventId === exactId)


    return (
        <div>
            {
                exactEvent && <div>

                    <h2>Match Result</h2>

                    <div>
                        {exactEvent.date}
                    </div>

                    <div>
                     <span>
                        {exactEvent.host}
                    </span>
                        <span>
                        {exactEvent.rate.winOfHost}
                    </span>
                    </div>

                    <div>
                    <span>
                        Draw
                    </span>
                        <span>
                        {exactEvent.rate.draw}
                    </span>
                    </div>

                    <div>
                     <span>
                        {exactEvent.guest}
                    </span>
                        <span>
                        {exactEvent.rate.winOfGuest}
                    </span>
                    </div>

                <div>

                    <input type='radio'/>

                    <button>Place Bet</button>
                </div>


                </div>

            }


        </div>
    );
};

