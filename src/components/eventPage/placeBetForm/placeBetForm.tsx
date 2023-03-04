import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAppSuccessMessageAC} from "../../../redux/eventReducer";
import css from './placeBetForm.module.scss'
import {RateType} from "../../../redux/eventsReducer";

type PlaceBetFormPropsType = {
    host: string
    guest: string
    rate: RateType
}


export const PlaceBetForm: React.FC<PlaceBetFormPropsType> = ({host, guest, rate}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [bet, setBet] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBet(e.target.value);
    }

    const onClickHandler = () => {
        navigate('/sports/all')

        dispatch(setAppSuccessMessageAC(`Thank you, your bet in the match ${host} - ${guest} on the ${bet} has been accepted!`))
    }

    return (
        <form className={css.placeBetForm_wrapper}>
            <div className={css.placeBetForm_input_wrapper}>
                <input type="radio" value="home win" id="hostWin"
                       onChange={handleChange} name="bet" className={css.placeBetForm_input}/>
                <label htmlFor="hostWin">
                    <span className={css.placeBetForm_input_radio}></span>
                    <span>Home win </span>
                    <span>{rate.winOfHost}
                </span></label>
            </div>

            <div className={css.placeBetForm_input_wrapper}>
                <input type="radio" value="draw" id="draw"
                       onChange={handleChange} name="bet"/>
                <label htmlFor="draw">
                    <span className={css.placeBetForm_input_radio}></span>
                    <span>Draw</span>
                    <span>{rate.draw}</span></label>
            </div>

            <div className={css.placeBetForm_input_wrapper}>
                <input type="radio" value="away win" id="guestWin"
                       onChange={handleChange} name="bet"/>
                <label htmlFor="guestWin">
                    <span className={css.placeBetForm_input_radio}></span>
                    <span>Away Win</span>
                    <span>{rate.winOfGuest}</span></label>
            </div>


            <button type='button' disabled={bet === ''} onClick={onClickHandler} className={css.placeBetForm_button}>
                Place bet
            </button>
        </form>


    );
}

