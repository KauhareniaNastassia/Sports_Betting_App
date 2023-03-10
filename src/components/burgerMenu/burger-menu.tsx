import React, {useRef, useState} from "react";
import css from './burger-menu.module.scss'
import {useOnClickOutsideCloseSideBar} from "../../hook/onClickOutsideCloseSideBar";


export const BurgerMenu: React.FC = () => {

    const [showMenuBtn, setShowMenuBtn] = useState(false)
    const [popUpClose, setPopUpClose] = useState(true)
    const node = useRef<HTMLDivElement>(null);

    const onClickOpenMenu = () => {
        setShowMenuBtn(!showMenuBtn)
        setPopUpClose(!popUpClose)
    }

    const closeSideBar = () => {
        setShowMenuBtn(false)
        setPopUpClose(true)
    }

    useOnClickOutsideCloseSideBar(node, closeSideBar);

    return (
        <div className={css.burger_wrapper} ref={node}>

            <button
                type='button'
                className={showMenuBtn ? `${css.menu__btn} ${css.menu_open}` : `${css.menu__btn} ${css.menu_close}`}
                onClick={onClickOpenMenu}
            >
                <span className={css.menu__btn_span}/>
                <span className={css.menu__btn_span}/>
                <span className={css.menu__btn_span}/>
            </button>

            {!popUpClose &&

                <div className={css.burger_popUp}>
                    <button className={css.burger_popUp_button}>Sign In</button>
                    <button className={css.burger_popUp_button}>Registration</button>
                    <button className={css.burger_popUp_button}>Contacts</button>
                </div>
            }
        </div>
    )
}
