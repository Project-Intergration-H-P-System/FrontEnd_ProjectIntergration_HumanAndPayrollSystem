import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Triangle from './Triangle';
import BirthdayNotification from './SetAlertBirthday';
import { Card } from 'antd';

const BirthDays = () => {
    const [notiData, setNotiData] = useState([]);

    const test = BirthdayNotification({ data: notiData });
    // console.log(notiData);
    // console.log(test);

    useEffect(() => {
        const fetchBirthdayData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/alert/birtday');
                const newData = response.data;
                setNotiData(newData);
            } catch (error) {
                console.error("Error fetching birthday data:", error);
            }
        };

        fetchBirthdayData();
    }, []);

    const triangle = {
        size: '20px',
        location: '87.5%',
        color: '#b3fce6',
    };


    // Check if test is an array
    const notifications = Array.isArray(test) ? test : [];

    return (
        <div className='grid grid-cols-1 w-full h-auto'>
            <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />
            <div className='w-full h-screen p-3 rounded-xl' style={{ background: '#b3fce6' }}>
                {/* Render BirthdayNotification as a component */}
                {notifications.map((notification, index) => (
                    <Card key={index} >
                        <p><strong>Full Name: </strong>{notification.fullName}</p>
                        <p><strong>Birthday: </strong>{notification.dateTime}</p>
                        <p><strong>State: </strong>{notification.message}</p>
                    </Card>
                ))}

            </div>
        </div>
    );
};

export default BirthDays;
