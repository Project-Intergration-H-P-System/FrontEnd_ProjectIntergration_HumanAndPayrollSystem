import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Triangle from './Triangle';
import ExceededVacation from './SetAlertVacation';
import { Card } from 'antd';

const Vacation = () => {
    const [notiData, setNotiData] = useState([]);

    const test = ExceededVacation({ data: notiData });

    console.log(test);
    useEffect(() => {
        const fetchVacationData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/alert/vacation');
                const newData = response.data;
                setNotiData(newData);

            } catch (error) {
                console.error("Error fetching birthday data:", error);
            }
        };

        fetchVacationData();
    }, []);

    const triangle = {
        size: '20px',
        location: '50%',
        color: '#cb468254',
    };


    // Check if test is an array
    const notifications = Array.isArray(test) ? test : [];

    return (
        <div className='grid grid-cols-1 w-full h-auto'>
            <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />
            <div className='w-full h-screen p-3 rounded-xl' style={{ background: '#cb468254' }}>
                {notifications.map((notification, index) => (
                    <Card key={index} >
                        <p><strong>Full Name: </strong>{notification.fullName}</p>
                        <p><strong>A certain number of days are allowed: </strong>{notification.NumberOfDaysOffAllowed}</p>
                        <p><strong>Number of days taken leave: </strong>{notification.NumberOfDaysOff}</p>
                        <p><strong>State: </strong>{notification.message}</p>
                    </Card>
                ))}

            </div>
        </div>
    );
};

export default Vacation;
