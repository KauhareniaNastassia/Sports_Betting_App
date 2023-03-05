import React from 'react';
import css from '../categoryList.module.scss'
import {NavLink} from "react-router-dom";

type CategoryItemPropsType = {
    id: number
    name: string
    icon: any
}

export const CategoryItem: React.FC<CategoryItemPropsType> = ({
                                                                  id, name, icon
                                                              }) => {
    return (
        <NavLink to={`/sports/${name}`}
        className={({isActive}) => isActive ? css.wrapper_categoryItemActive : css.wrapper_categoryItem}>

            <li className={css.wrapper_categoryItem} key={id}>
                <img src={icon} alt='categoryIcon' className={css.categoryItem__icon}/>
                <span className={css.categoryItem__name}>{name}</span>

            </li>
        </NavLink>
    );
};

