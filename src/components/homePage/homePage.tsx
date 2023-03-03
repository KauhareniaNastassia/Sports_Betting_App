import React from 'react';
import css from './homePage.module.scss'
import {useAppSelector} from "../../hook/hook";
import {TableOfEvents} from "../tableOfEvents/tableOfEvents";
import {EventsItemType} from "../../redux/eventsReducer";
import {useParams} from "react-router-dom";

export const HomePage: React.FC = () => {
    const {category} = useParams()

    const events = useAppSelector((state) => state.events.events)

    const selectedCategory = useAppSelector(state => state.categories.items.find(el => el.name === category))

    const eventsInThisCategory = events.filter((event) => event.category === selectedCategory?.name)
    let eventsInSelectedCategory: EventsItemType[] = []
    if (category === 'all') {
        eventsInSelectedCategory = events
    } else {
        eventsInSelectedCategory = eventsInThisCategory
    }



    /*const liveEvents = eventsInSelectedCategory.filter(event => event.live)
    const soonEvents = eventsInSelectedCategory.filter(event => !event.live)
    const [eventsForTable, setEventsForTable] = useState<EventsItemType[]>(liveEvents)

    const [buttonIsActive, setButtonIsActive] = useState(true)

    const onClickLiveHandler = () => {
        setEventsForTable(liveEvents)
    }

    const onClickSoonHandler = () => {
        setEventsForTable(soonEvents)
    }
*/
    return (
        <div className={css.wrapper_homePage}>

            <div className={css.wrapper__buttons}>
                <button
                    type='button'
                    value='Live'
                   /* className={buttonIsActive ? `${css.filterBar__button} ${css.activeBtn}` : css.filterBar__button}
                    onClick={onClickLiveHandler}*/
                >Live
                </button>
                <button
                    type='button'
                    value='Soon'
                     /*onClick={onClickSoonHandler}*/
                    className={css.filterBar__button}
                >Soon
                </button>
            </div>

            <TableOfEvents events={eventsInSelectedCategory}
                           />

        </div>
    );
};

