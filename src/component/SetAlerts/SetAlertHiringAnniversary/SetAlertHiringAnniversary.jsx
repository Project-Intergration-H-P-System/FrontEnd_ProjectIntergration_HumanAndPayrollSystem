import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Triangle from './Triangle';
import AnniversaryReminder from './SetAlertHiringAnniversary';
import { Card } from 'antd';

const Anniversary = () => {
    const [notiData, setNotiData] = useState([]);

    const test = AnniversaryReminder({ data: notiData });

    console.log(test);
    useEffect(() => {
        const fetchHiringAnnivesaryData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/alert/aniversary');
                const newData = response.data;
                setNotiData(newData);

            } catch (error) {
                console.error("Error fetching birthday data:", error);
            }
        };

        fetchHiringAnnivesaryData();
    }, []);

    const triangle = {
        size: '20px',
        location: '20%',
        color: '#cb468254',
    };


    // Check if test is an array
    const notifications = Array.isArray(test) ? test : [];

    return (
        <div className='grid grid-cols-1 w-full h-auto'>
            <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />
            <div className='w-full h-screen p-3 rounded-xl' style={{ background: '#cb468254' }}>
                {/* Render BirthdayNotification as a component */}
                {notifications.map((notification, index) => (
                    <Card key={index} >
                        <p><strong>Full Name: </strong>{notification.fullName}</p>
                        <p><strong>Hiring Anniversary: </strong>{notification.dateTime}</p>
                        <p><strong>State: </strong>{notification.message}</p>
                    </Card>
                ))}

            </div>
        </div>
    );
};

export default Anniversary;
