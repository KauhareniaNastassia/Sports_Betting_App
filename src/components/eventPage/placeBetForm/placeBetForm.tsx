import React from 'react';
import css from './placeBetForm.module.scss'
import {useForm} from "react-hook-form";

type PlaceBetFormDataType = {
    hostWin: boolean
    guestWin: boolean
    draw: boolean
}


const PlaceBetForm = () => {


    const {register, handleSubmit, formState: {errors}} = useForm<PlaceBetFormDataType>({
        defaultValues: {
            hostWin: false,
            guestWin: false,
            draw: false,
        },
        mode: 'onChange',
    });

    const onSubmit = (data: PlaceBetFormDataType) => {
        console.log(data)

    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrapper_loginForm}>

            <div className={css.loginForm__inputBlock}>

                <div className={css.loginForm__input_wrapper}>
                    <div className={css.loginForm__input_item}>
                        <input
                            /* onFocus={}*/
                            className={css.loginForm__input}
                            type='radio'
                            id='hostWin'

                            placeholder='Win of host'

                            {...register('hostWin', {

                                required: true

                            })}
                        />
                        <label className={css.loginForm__label} htmlFor='hostWin'>Win of host</label>


                    </div>

                    <div className={css.loginForm__input_item}>

                        <input
                            className={css.loginForm__input}
                            type={"radio"}
                            id='guestWin'
                            placeholder=' '


                            {...register('guestWin', {
                                required: true

                            })}

                        />
                        <label className={css.loginForm__label} htmlFor='password'>Пароль</label>

                        <input
                            className={css.loginForm__input}
                            type={"radio"}
                            id='draw'
                            placeholder=' '


                            {...register('draw', {
                                required: true

                            })}

                        />
                        <label className={css.loginForm__label} htmlFor='draw'>Пароль</label>
                    </div>
                </div>




            </div>


            <div className={css.loginForm_buttonBlock}>
                <input
                    className={css.loginForm_submitBTN}
                    type='submit'
                    value='PLACE BET'
                    />


            </div>


        </div>
    </form>
};

export default PlaceBetForm;