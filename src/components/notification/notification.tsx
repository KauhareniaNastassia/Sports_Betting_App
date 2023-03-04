import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hook/hook";
import {useDispatch} from "react-redux";
import {setAppSuccessMessageAC} from "../../redux/eventReducer";
import css from './notification.module.scss'
import closeErrorIcon from '../../assets/img/close-error-icon.svg'

export const Notification:React.FC = () => {

    const successMessage = useAppSelector(state => state.event.successMessage)
    const dispatch = useDispatch()

    const [isNotificationShown, setIsNotificationShow] = useState(false)

    const onClickCloseNotification = () => {
        setIsNotificationShow(false)
        dispatch(setAppSuccessMessageAC(null))
    }

    useEffect( () => {
        const timer = setInterval( () => {
            onClickCloseNotification()
        }, 5000)

        return () => clearInterval(timer)
    } )



    return (
        <div className={css.wrapper__notification}>
            {successMessage &&

                <div>

                    {successMessage}

                    <button type='button' onClick={onClickCloseNotification} className={css.error_button}>
                        <img src={closeErrorIcon} alt='close-error'/>
                    </button>


                </div>

            }


        </div>
    );
};
