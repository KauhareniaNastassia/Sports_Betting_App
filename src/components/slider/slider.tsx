import React from 'react';
import sportImg from '../../assets/img/sport1.png'
import css from './slider.module.scss'

export const Slider: React.FC = () => {
    return (
        <div className={css.wrapper}>
            <img className={css.slider_img} src={sportImg} alt='sport img'/>
        </div>
    );
};

