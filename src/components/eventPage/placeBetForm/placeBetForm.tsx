import React, {ChangeEvent, useState} from 'react';
import css from './placeBetForm.module.scss'
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAppSuccessMessageAC} from "../../../redux/eventReducer";

type PlaceBetFormPropsType = {
    host: string
    guest: string
}


export const PlaceBetForm:React.FC<PlaceBetFormPropsType> = ({host, guest}) => {
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
        <form>
            <input type="radio" value="home win" id="hostWin"
                   onChange={handleChange} name="bet"/>
            <label htmlFor="hostWin">hostWin</label>

            <input type="radio" value="away win" id="guestWin"
                   onChange={handleChange} name="bet"/>
            <label htmlFor="guestWin">guestWin</label>

            <input type="radio" value="draw" id="draw"
                   onChange={handleChange} name="bet"/>
            <label htmlFor="draw">draw</label>


            <button type='button' disabled={bet === ''} onClick={onClickHandler}>
                Place bet
            </button>
        </form>


    );
}

