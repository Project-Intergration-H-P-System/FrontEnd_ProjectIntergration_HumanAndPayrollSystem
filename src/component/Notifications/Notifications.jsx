import React, { useState } from 'react';
import '../UilBell/UilBell.jsx';
import 'react-toastify/dist/ReactToastify.css';
import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
import Anniversary from '../../component/SetAlerts/SetAlertHiringAnniversary/SetAlertHiringAnniversary.jsx';
import Vacation from '../SetAlerts/SetAlertVacation/SetAlertVacation.jsx';
import "./Notifications.css";


const Notifications = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

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
            <div className='heading_notification'>
                Notifications
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
                    {selectedCategory === 'exceeded' && (
                        <Vacation />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Notifications;