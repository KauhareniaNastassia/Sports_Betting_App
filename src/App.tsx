import React from 'react';
import logo from './logo.svg';
import css from './App.module.scss'
import {Header} from "./components/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/homePage/homePage";
import {EventPage} from "./components/eventPage/eventPage";
import {Slider} from "./components/slider/slider";
import {CategoryList} from "./components/categoryList/categoryList";
import {LayoutMainContent} from "./components/layoutMainContent/layoutMainContent";


function App() {
    return (
        <div className={css.app}>
            <Header/>
            <Slider/>
            <div className={css.wrapper__content}>
                    <Routes>
                        <Route element={<LayoutMainContent/>}>
                            <Route path="/" element={<Navigate to="/sports/all"/>}/>
                            <Route path="/sports/:category" element={<HomePage/>}/>
                        </Route>

                        <Route path="/sports/:category/:eventId" element={<EventPage/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
