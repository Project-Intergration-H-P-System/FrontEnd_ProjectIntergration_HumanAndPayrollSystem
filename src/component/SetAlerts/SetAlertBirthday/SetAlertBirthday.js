import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


function BirthdayNotification({ data }) {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (Array.isArray(data)) {

            const processedMessages = processBirthdays(data);
            setMessages(prevMessages => {
                // Make sure to update state based on the previous state
                if (prevMessages !== processedMessages) {
                    return processedMessages;
                }
                return prevMessages;
            });
        }
    }, [data]);

    function processBirthdays(data) {
        const today = new Date();
        const processedMessages = [];

        data.forEach(employee => {
            const birthDate = new Date(employee.BIRTH_DATE);
            const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

            let daysUntilBirthday;
            let birthdayMessage;

            // Compare month and day only
            const isTodayBirthday = (birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth());
            const isFutureBirthday = (thisYearBirthday > today);

            if (isTodayBirthday) {
                // Birthday is today
                birthdayMessage = {

                    dateTime: dayjs(birthDate).format('DD/MM/YYYY'), // Format with the original birth date year
                    fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                    message: `Today is ${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s birthday !`
                };
            } else if (isFutureBirthday) {
                // Birthday has not occurred yet this year
                daysUntilBirthday = Math.ceil((thisYearBirthday - today) / (1000 * 60 * 60 * 24));
                birthdayMessage = {

                    dateTime: dayjs(birthDate).format('DD/MM/YYYY'), // Format with the original birth date year
                    fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                    message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s birthday is in ${daysUntilBirthday} days left !`
                };
            } else {
                // Birthday has already passed this year
                const daysSinceBirthday = Math.ceil((today - thisYearBirthday) / (1000 * 60 * 60 * 24));
                birthdayMessage = {

                    dateTime: dayjs(birthDate).format('DD/MM/YYYY'),
                    fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                    message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s birthday was ${daysSinceBirthday} days ago !`
                };
            }

            processedMessages.push(birthdayMessage);
        });

        return processedMessages;
    }


    return messages;
}

export default BirthdayNotification;