import React from 'react';
import {EventsItemType} from "../../redux/eventsReducer";
import {CategoryItemType} from "../../redux/categoryReducer";
import {useAppSelector} from "../../hook/hook";
import {EventRow} from "./eventRow/eventRow";

type TableOfEventsPropsTypes = {
    events: EventsItemType[]
    category?: CategoryItemType
}

export const TableOfEvents: React.FC<TableOfEventsPropsTypes> = ({events, category}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>icon</th>
                <th>{/*live or soon*/}</th>
                <th>Players</th>
                <th>1</th>
                <th>X</th>
                <th>2</th>
                <th>Total bets</th>
            </tr>
            </thead>

            <tbody>
            {events.map((event) => <EventRow key={event.eventId}
                                             eventId={event.eventId}
                                             category={event.category}
                                             live={event.live}
                                             host={event.host}
                                             guest={event.guest}
                                             rate={event.rate}
                                             date={event.date}
                                             betsCount={event.betsCount}

                />

            )}
            </tbody>


        </table>
    );
};

