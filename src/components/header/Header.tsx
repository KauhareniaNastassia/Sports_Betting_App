import React from 'react';
import css from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {


    return (
        <div className={css.header}>
            <div className={css.header__logo}>
                <NavLink to='/sports/all'>
                    <img src={logo} alt='logo'/>
                    <span>Online Bet</span>
                </NavLink>

            </div>


            <div>
                <button>Вход</button>
                <button>Регистрация</button>
            </div>
        </div>
    );
};

