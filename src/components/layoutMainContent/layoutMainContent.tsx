import React from 'react';
import {CategoryList} from "../categoryList/categoryList";
import {Outlet} from "react-router-dom";
import css from './layoutMainContent.module.scss'
import {Notification} from "../notification/notification";
import {useAppSelector} from "../../hook/hook";

export const LayoutMainContent:React.FC = () => {

    const successMessage = useAppSelector(state => state.event.successMessage)

    return (
        <div className={css.wrapper_layout}>
            <div className={css.wrapper_layout}>
                {successMessage && <Notification/>}
            </div>

            <CategoryList/>

            <Outlet/>
        </div>
    );
};

