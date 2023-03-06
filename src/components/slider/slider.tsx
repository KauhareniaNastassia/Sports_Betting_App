import React from 'react';
import sportImg1 from '../../assets/img/sport1.png'
import sportImg2 from '../../assets/img/sport2.png'
import sportImg3 from '../../assets/img/sport3.png'
import css from './slider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper";
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation';

type PhotosType = {
    photoId:number
    photo: any
}


export const Slider: React.FC = () => {

    let photos:PhotosType[] = [
        {
            photoId: 1,
            photo: sportImg1,
        },
        {
            photoId: 2,
            photo: sportImg2,
        },
        {
            photoId: 3,
            photo: sportImg3,
        },
    ]


    return (
        <div className={css.wrapper}>
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                autoHeight={false}
                loop={true}
                autoplay={{delay: 8000}}
            >
                {photos.map(photo => {
                    return <SwiperSlide key={photo.photoId} className={css.swiper_slide}>
                        <img className={css.slider_img} src={photo.photo} alt='photo'/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

