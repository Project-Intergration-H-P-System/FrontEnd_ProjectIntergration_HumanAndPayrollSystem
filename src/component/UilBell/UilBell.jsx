// import React, { useState, useEffect, useRef } from 'react';
// import './UilBell.css';
// import { UilBell } from "@iconscout/react-unicons";
// import 'react-toastify/dist/ReactToastify.css';
// import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
// import Anniversary from '../../component/SetAlerts/SetAlertHiringAnniversary/SetAlertHiringAnniversary.jsx';
// import Vacation from '../SetAlerts/SetAlertVacation/SetAlertVacation.jsx';

// const Uilbelll = ({ initialShowNotifications = false }) => {
//   const [showNotifications, setShowNotifications] = useState(initialShowNotifications);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const bellRef = useRef(null);

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
//   const handleCategoryClick = (category, event) => {
//     setSelectedCategory(category);
//     document.querySelectorAll('.notification-option-UilBell').forEach((item) => {
//       item.classList.remove('active');
//     });
//     event.target.classList.add('active');
//   }


//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   }

//   const handleDropdownClick = (event) => {
//     event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click đến phần tử mẹ
//   }

//   return (
//     <div>
//       <button className='Bell-main-UilBell' ref={bellRef}>
//         <UilBell onClick={toggleNotifications} />
//         {showNotifications && (
//           <div >
//             <div className="notification-dropdown-UilBell" onClick={handleDropdownClick}>
//               <div className="notification-options-UilBell">
//                 <div className="notification-option-UilBell" onClick={(event) => handleCategoryClick('anniversary', event)}>
//                   Anniversary Reminder
//                 </div>
//                 <div className="notification-option-UilBell" onClick={(event) => handleCategoryClick('exceeded', event)}>
//                   Exceeded Vacation Days
//                 </div>

//                 <div className="notification-option-UilBell" onClick={(event) => handleCategoryClick('birthday', event)}>
//                   Birthday Current Month
//                 </div>
//               </div>
//               <div className="notification-content-UilBell">
//                 {/* 
//                 <h4>Notifications</h4> */}
//                 {selectedCategory === 'birthday' && (
//                   <BirthDays />
//                 )}
//                 {selectedCategory === 'anniversary' && (
//                   <Anniversary />
//                 )}
//                 {selectedCategory === 'exceeded' && (
//                   <Vacation />
//                 )}
//               </div>
//             </div>

//           </div>
//         )}
//       </button>
//     </div>
//   );
// }

// export default Uilbelll;

import React, { useState, useEffect, useRef } from 'react';
import './UilBell.css';
import { UilBell } from "@iconscout/react-unicons";
import 'react-toastify/dist/ReactToastify.css';
import BirthDays from '../../component/SetAlerts/SetAlertBirthday/SetAlerBirthday';
import Anniversary from '../../component/SetAlerts/SetAlertHiringAnniversary/SetAlertHiringAnniversary.jsx';
import Vacation from '../SetAlerts/SetAlertVacation/SetAlertVacation.jsx';

const Uilbelll = ({ initialShowNotifications = false }) => {
  const [showNotifications, setShowNotifications] = useState(initialShowNotifications);
  const [selectedCategory, setSelectedCategory] = useState('birthday'); // Set default category to 'birthday'
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

  useEffect(() => {
    // Add 'active' class to the birthday option by default
    const birthdayOption = document.querySelector('.notification-option-UilBell[data-category="birthday"]');
    if (birthdayOption) {
      birthdayOption.classList.add('active');
    }
  }, []);

  const handleCategoryClick = (category, event) => {
    setSelectedCategory(category);
    document.querySelectorAll('.notification-option-UilBell').forEach((item) => {
      item.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  }

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevents event propagation to parent elements
  }

  return (
    <div>
      <button className='Bell-main-UilBell' ref={bellRef}>
        <UilBell onClick={toggleNotifications} />
        {showNotifications && (
          <div>
            <div className="notification-dropdown-UilBell" onClick={handleDropdownClick}>
              <div className="notification-options-UilBell">
                <div className="notification-option-UilBell" data-category="anniversary" onClick={(event) => handleCategoryClick('anniversary', event)}>
                  Anniversary Reminder
                </div>
                <div className="notification-option-UilBell" data-category="exceeded" onClick={(event) => handleCategoryClick('exceeded', event)}>
                  Exceeded Vacation Days
                </div>
                <div className="notification-option-UilBell" data-category="birthday" onClick={(event) => handleCategoryClick('birthday', event)}>
                  Birthday Current Month
                </div>
              </div>
              <div className="notification-content-UilBell">
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
        )}
      </button>
    </div>
  );
}

export default Uilbelll;

