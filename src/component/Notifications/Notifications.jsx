import React, { useState, useEffect, useRef } from 'react';
import '../UilBell/UilBell.jsx';
import { UilBell } from "@iconscout/react-unicons";
import 'react-toastify/dist/ReactToastify.css';
import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
import Anniversary from '../../component/SetAlerts/SetAlertHiringAnniversary/SetAlertHiringAnniversary.jsx';
import "./Notifications.css";


const Notifications = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const bellRef = useRef(null);




    //   useEffect(() => {
    //     function handleClickOutside(event) {
    //       if (bellRef.current && !bellRef.current.contains(event.target)) {
    //         setShowNotifications(false);
    //       }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, []);
    const handleCategoryClick = (category, event) => {
        setSelectedCategory(category);
        document.querySelectorAll('.notification-option').forEach((item) => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    }




    const handleDropdownClick = (event) => {
        event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click đến phần tử mẹ
    }

    return (
        <div className="container_page_notifications">
            <div >
                <div className='heading_notification'>
                    Notifications
                </div>

            </div>
            <div className="notification-dropdown" onClick={handleDropdownClick}>
                <div className="notification-options">
                    <div className="notification-option" onClick={(event) => handleCategoryClick('anniversary', event)}>
                        Anniversary Reminder
                    </div>
                    <div className="notification-option" onClick={(event) => handleCategoryClick('exceeded', event)}>
                        Exceeded Vacation Days
                    </div>

                    <div className="notification-option" onClick={(event) => handleCategoryClick('birthday', event)}>
                        Birthday Current Month
                    </div>
                </div>
                <div className="notification-content">


                    {selectedCategory === 'birthday' && (
                        <BirthDays />
                    )}
                    {selectedCategory === 'anniversary' && (
                        <Anniversary />
                    )}
                </div>
            </div>

        </div>
    );
}

export default Notifications;