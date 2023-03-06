import React from 'react';
import {EventsItemType} from "../../redux/eventsReducer";
import {EventRow} from "./eventRow/eventRow";
import css from './tableOfEvents.module.scss'

type TableOfEventsPropsTypes = {
    events: EventsItemType[]
}

export const TableOfEvents: React.FC<TableOfEventsPropsTypes> = ({events}) => {
    return (
        <table className={css.wrapper__table}>
            <thead className={css.tableHead}>
            <tr>
                <th className={css.eventRow_icon_wrapper}></th>
                <th className={ css.eventRow_time}></th>
                <th className={css.tableHead__players}>Players</th>
                <th className={css.winOfHost_wrapper}>1</th>
                <th className={css.draw_wrapper}>X</th>
                <th className={css.winOfGuest_wrapper}>2</th>
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
                                             betsCount={event.betsCount}
                />
            )}
            </tbody>
        </table>
    );
};

