import React, { useState, useEffect, useRef } from 'react';
import './UilBell.css';
import { UilBell } from "@iconscout/react-unicons";
import 'react-toastify/dist/ReactToastify.css';
import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
import Anniversary from '../../component/SetAlerts/SetAlertHiringAnniversary/SetAlertHiringAnniversary.jsx';


const Uilbelll = ({ initialShowNotifications = false }) => {
  const [showNotifications, setShowNotifications] = useState(initialShowNotifications);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const bellRef = useRef(null);




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

                <div className="notification-option" onClick={(event) => handleCategoryClick('birthday', event)}>
                  Birthday Current Month
                </div>
              </div>
              <div className="notification-content">

                <h4>Notifications</h4>
                {selectedCategory === 'birthday' && (
                  <BirthDays />
                )}
                {selectedCategory === 'anniversary' && (
                  <Anniversary />
                )}
              </div>
            </div>

          </div>
        )}
      </button>
    </div>
  );
}

export default Uilbelll;
