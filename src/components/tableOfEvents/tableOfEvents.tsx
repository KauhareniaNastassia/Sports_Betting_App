import React from 'react';
import {EventsItemType} from "../../redux/eventsReducer";
import {CategoryItemType} from "../../redux/categoryReducer";
import {EventRow} from "./eventRow/eventRow";
import css from './tableOfEvents.module.scss'

type TableOfEventsPropsTypes = {
    events: EventsItemType[]
    category?: CategoryItemType
}

export const TableOfEvents: React.FC<TableOfEventsPropsTypes> = ({events, category}) => {
    return (
        <table className={css.wrapper__table}>
            <thead className={css.tableHead}>
            <tr>
                <th></th>
                <th></th>
                <th className={css.tableHead__players}>Players</th>
                <th>1</th>
                <th>X</th>
                <th>2</th>
                <th className={css.tableHead__totalBets}>Total bets</th>
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

