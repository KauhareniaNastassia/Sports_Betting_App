import React from 'react';
import css from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <div className={css.header}>
            <NavLink to='/sports/all'>
                <div className={css.header__logo}>
                    <img src={logo} alt='logo'/>
                    <span>Online Bet</span>
                </div>
            </NavLink>

            <div className={css.header_buttonBlock}>
                <button className={css.header_button}>Вход</button>
                <button className={css.header_button}>Регистрация</button>
            </div>
        </div>
    );
};

