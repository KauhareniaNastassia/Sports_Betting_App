import React from 'react';
import {NavLink} from "react-router-dom";
import css from './footer.module.scss'
import facebookLogo from '../../assets/img/facebook-logo.svg'
import instagramLogo from '../../assets/img/instagram-logo.svg'
import vkLogo from '../../assets/img/vk-logo.svg'

export const Footer: React.FC = () => {
    return (
        <div className={css.wrapper}>

        <span>
            © 2023 Online Bet. Все права защищены.
        </span>
            <div className={css.social}>
                <NavLink to='https://www.facebook.com/' target='_blank'>
                    <img src={facebookLogo} alt='Facebook logo'/>
                </NavLink>
                <NavLink to='/https://www.instagram.com/' target='_blank'>
                    <img src={instagramLogo} alt='Instagram logo'/>
                </NavLink>
                <NavLink to='https://vk.com/' target='_blank'>
                    <img src={vkLogo} alt='VK logo'/>
                </NavLink>

            </div>

        </div>
    );
};

