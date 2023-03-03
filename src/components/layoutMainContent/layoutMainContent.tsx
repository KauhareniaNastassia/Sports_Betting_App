import React from 'react';
import {CategoryList} from "../categoryList/categoryList";
import {Outlet} from "react-router-dom";

export const LayoutMainContent = () => {
    return (
        <div>
            <CategoryList/>

            <Outlet/>
        </div>
    );
};

