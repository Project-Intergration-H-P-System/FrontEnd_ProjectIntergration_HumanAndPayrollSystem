import React, { useState, useEffect, useRef } from 'react';
import './MainPage.css';
import SlideBar from '../../component/ControlLayout/SlideBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uilbelll from '../../component/UilBell/UilBell.jsx';


const MainPage = () => {
    return (
        <div>
            <div className='App'>
                <SlideBar />
                <ToastContainer />
            </div>
            <Uilbelll />
        </div>
    );
}

export default MainPage;
