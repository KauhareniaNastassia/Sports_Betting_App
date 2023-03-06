import React from 'react';
import {useAppSelector} from "../../hook/hook";
import css from './categoryList.module.scss'
import {CategoryItem} from "./categoryItem/categoryItem";
import allSportsIcon from '../../assets/img/champion.svg'
import {NavLink} from "react-router-dom";

export const CategoryList: React.FC = () => {

    const categories = useAppSelector(state => state.categories.items)

    return (
        <div className={css.wrapper_category_menu}>

            <ul className={css.wrapper_categoryList}>
                <NavLink to='/sports/all'
                         className={({isActive}) => isActive ? css.wrapper_categoryItemActive : css.wrapper_categoryItem}>
                    <li className={css.wrapper_categoryItem}>
                        <img src={allSportsIcon} alt='categoryIcon' className={css.categoryItem__icon}/>
                        <span className={css.categoryItem__name}> All spots </span>
                    </li>
                </NavLink>

                {categories.map((category) => <CategoryItem key={category.id}
                                                            id={category.id}
                                                            name={category.name}
                                                            icon={category.icon}/>
                )}
            </ul>

        </div>
    );
};

