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
        console.log(`Thank you, your bet in the match ${host} - ${guest} on the ${bet} has been accepted!`)
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


/* const [hostWin, setHostWin] = useState(false)
 const [guestWin, setGuestWin] = useState(false)
 const [draw, setDraw] = useState(false)


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
                         className={css.loginForm__input}
                         type='radio'
                         id='hostWin'

                         checked={hostWin}

                         {...register('hostWin', {
                             onChange: (e) => setHostWin(e.target.value)
                             })
                         }

                     />
                     <label className={css.loginForm__label} htmlFor='hostWin'>Win of host</label>


                 </div>

                 <div className={css.loginForm__input_item}>

                     <input
                         className={css.loginForm__input}
                         type="radio"
                         id='guestWin'
                         value='guestWin'
                         checked={guestWin}

                         {...register('guestWin', {
                             onChange: () => setGuestWin(true)
                         })
                         }
                     />
                     <label className={css.loginForm__label} htmlFor='guestWin'>Win of guest</label>

                     <input
                         className={css.loginForm__input}
                         type="radio"
                         id='draw'
                         placeholder=' '
                         value='draw'
                         checked={draw}
                         {...register('draw', {
                             onChange: () => setDraw(true)
                         })
                         }

                     />
                     <label className={css.loginForm__label} htmlFor='draw'>Draw</label>
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
 </form>*/

