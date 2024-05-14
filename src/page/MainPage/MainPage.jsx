import React, { useState, useEffect, useRef } from 'react';
import './MainPage.css';
import SlideBar from '../../component/ControlLayout/SlideBar';
import { UilBell } from "@iconscout/react-unicons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
import ToggleButton from '../../component/SetAlerts/ToggleButton/ToggleButton';


const MainPage = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const bellRef = useRef(null);

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    useEffect(() => {
        function handleClickOutside(event) {
            if (bellRef.current && !bellRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleCategoryClick = (category, event) => {
        setSelectedCategory(category);
        document.querySelectorAll('.notification-option').forEach((item) => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    }


    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    }

    const handleDropdownClick = (event) => {
        event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click đến phần tử mẹ
    }

    return (
        <div>
            <div className='App'>
                <SlideBar />
                <ToastContainer />
            </div>
            <button className='Bell-main' ref={bellRef}>
                <UilBell onClick={toggleNotifications} />
                {showNotifications && (
                    <div >
                        <div className="notification-dropdown" onClick={handleDropdownClick}>
                            <div className="notification-options">
                                <div className="notification-option" onClick={(event) => handleCategoryClick('anniversary', event)}>
                                    Anniversary Reminder
                                </div>
                                <div className="notification-option" onClick={(event) => handleCategoryClick('exceeded', event)}>
                                    Exceeded Vacation Days
                                </div>
                                <div className="notification-option" onClick={(event) => handleCategoryClick('benefits', event)}>
                                    Benefits Plan Changes
                                </div>
                                <div className="notification-option" onClick={(event) => handleCategoryClick('birthday', event)}>
                                    Birthday Current Month
                                </div>
                            </div>
                            <div className="notification-content">
                                {/* Nội dung của dropdown */}
                                {selectedCategory === 'anniversary' && (
                                    <div>Anniversary Reminders</div>
                                )}
                                {selectedCategory === 'exceeded' && (
                                    <div>Exceeded Vacation Days</div>
                                )}
                                {selectedCategory === 'benefits' && (
                                    <div>Benefits Plan Changes</div>
                                )}
                                {selectedCategory === 'birthday' && (
                                    <div>
                                        <ToggleButton isToggled={isToggled} handleToggle={handleToggle} />
                                        {isToggled ? (
                                            <BirthDays />
                                        ) : (
                                            <div>Birthday Notifications</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}
            </button>
        </div>
    );
}

export default MainPage;
