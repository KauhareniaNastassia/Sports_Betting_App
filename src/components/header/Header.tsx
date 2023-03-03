import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.scss'
import logo from '../../assets/img/logo.svg'

export const Header: React.FC = () => {


    return (
        <div className={css.header}>
            <div className={css.header__logo}>
                <img src={logo} alt='logo'/>
                <span>Online Bet</span>
            </div>


            <div>
                <button>Вход</button>
                <button>Регистрация</button>
            </div>
        </div>
    );
};

