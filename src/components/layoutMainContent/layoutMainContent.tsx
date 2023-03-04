import React from 'react';
import {CategoryList} from "../categoryList/categoryList";
import {Outlet} from "react-router-dom";
import css from './layoutMainContent.module.scss'

export const LayoutMainContent:React.FC = () => {
    return (
        <div className={css.wrapper_layout}>
            <CategoryList/>

            <Outlet/>
        </div>
    );
};

