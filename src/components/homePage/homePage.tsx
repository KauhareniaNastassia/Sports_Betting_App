import React, {useState} from 'react';
import css from './homePage.module.scss'
import {useAppSelector} from "../../hook/hook";
import {TableOfEvents} from "../tableOfEvents/tableOfEvents";
import {EventsItemType} from "../../redux/eventsReducer";
import {useParams} from "react-router-dom";

export const HomePage: React.FC = () => {
    const {category} = useParams()
    const events = useAppSelector((state) => state.events.events)
    const liveEvents = events.filter(event => event.live)
    const soonEvents = events.filter(event => !event.live)
    const [eventsForTable, setEventsForTable] = useState<EventsItemType[]>(liveEvents)
    const [buttonLiveIsActive, setButtonLiveIsActive] = useState(true)
    const [buttonSoonIsActive, setButtonSoonIsActive] = useState(false)

    const onClickLiveHandler = () => {
        setEventsForTable(liveEvents)
        setButtonLiveIsActive(true)
        setButtonSoonIsActive(false)
    }

    const onClickSoonHandler = () => {
        setEventsForTable(soonEvents)
        setButtonLiveIsActive(false)
        setButtonSoonIsActive(true)
    }

    const selectedCategory = useAppSelector(state => state.categories.items.find(el => el.name === category))
    const eventsInThisCategory = eventsForTable.filter((event) => event.category === selectedCategory?.name)

    let eventsInSelectedCategory: EventsItemType[] = []
    if (category === 'all') {
        eventsInSelectedCategory = eventsForTable
    } else {
        eventsInSelectedCategory = eventsInThisCategory
    }

    return (
        <div className={css.wrapper_homePage}>

            <div className={css.wrapper__buttons}>
                <button
                    type='button'
                    value='Live'
                    onClick={onClickLiveHandler}
                    className={buttonLiveIsActive ? `${css.filterBar__button} ${css.activeBtn}` : css.filterBar__button}
                >Live
                </button>
                <button
                    type='button'
                    value='Soon'
                    className={buttonSoonIsActive ? `${css.filterBar__button} ${css.activeBtn}` : css.filterBar__button}
                    onClick={onClickSoonHandler}
                >Soon
                </button>
            </div>

            <TableOfEvents events={eventsInSelectedCategory}/>

        </div>
    );
};

