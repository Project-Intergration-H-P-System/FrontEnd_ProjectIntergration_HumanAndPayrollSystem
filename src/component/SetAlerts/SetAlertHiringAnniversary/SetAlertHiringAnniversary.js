import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


function AnniversaryReminder({ data }) {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (Array.isArray(data)) {

            const processedMessages = processHiringAnniversary(data);
            setMessages(prevMessages => {
                // Make sure to update state based on the previous state
                if (prevMessages !== processedMessages) {
                    return processedMessages;
                }
                return prevMessages;
            });
        }
    }, [data]);

    // function processHiringAnniversary(data) {
    //     const today = new Date();
    //     const processedMessages = [];

    //     data.forEach(employee => {
    //         const hiringAnniversaryDay = new Date(employee.HIRE_DATE_FOR_WORKING);
    //         console.log(hiringAnniversaryDay);
    //         const thisYearhiringAnniversaryDay = new Date(today.getFullYear(), hiringAnniversaryDay.getMonth(), hiringAnniversaryDay.getDate());

    //         let daysUntilHiringAnniversary;
    //         let hiringAnniversaryMessage;

    //         const isTodayHiringAnniversary = (hiringAnniversaryDay.getDate() === today.getDate() && hiringAnniversaryDay.getMonth() === today.getMonth());
    //         const isFutureHiringAnniversary = (thisYearhiringAnniversaryDay > today);

    //         if (isTodayHiringAnniversary) {
    //             hiringAnniversaryMessage = {
    //                 dateTime: dayjs(hiringAnniversaryDay).format('DD/MM/YYYY'),
    //                 fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
    //                 message: `Today is ${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s hiring anniversary day !`
    //             };
    //         } else if (isFutureHiringAnniversary) {
    //             daysUntilHiringAnniversary = Math.ceil((thisYearhiringAnniversaryDay - today) / (1000 * 60 * 60 * 24));
    //             hiringAnniversaryMessage = {

    //                 dateTime: dayjs(hiringAnniversaryDay).format('DD/MM/YYYY'),
    //                 fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
    //                 message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s hiring anniversary day is in ${daysUntilHiringAnniversary} ${daysUntilHiringAnniversary > 1 ? "days" : "day"} left !`
    //             };
    //         } else {
    //             const daysSinceHiringAnniversary = Math.ceil((today - thisYearhiringAnniversaryDay) / (1000 * 60 * 60 * 24));
    //             hiringAnniversaryMessage = {

    //                 dateTime: dayjs(hiringAnniversaryDay).format('DD/MM/YYYY'),
    //                 fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
    //                 message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s birthday was ${daysSinceHiringAnniversary} ${daysSinceHiringAnniversary > 1 ? "days" : "day"} ago !`
    //             };
    //         }

    //         processedMessages.push(hiringAnniversaryMessage);
    //     });

    //     return processedMessages;
    // }



    function processHiringAnniversary(data) {
        const today = new Date();
        const processedMessages = [];

        data.forEach(employee => {
            const hireDate = new Date(employee["EMPLOYMENT.HIRE_DATE_FOR_WORKING"]);
            const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

            // Check if the employee has been employed for at least one year
            if ((today - hireDate) >= oneYearInMilliseconds) {
                const thisYearAnniversary = new Date(today.getFullYear(), hireDate.getMonth(), hireDate.getDate());
                let daysUntilAnniversary;
                let hiringAnniversaryMessage;

                const isTodayAnniversary = (hireDate.getDate() === today.getDate() && hireDate.getMonth() === today.getMonth());
                const isFutureAnniversary = (thisYearAnniversary > today);

                if (isTodayAnniversary) {
                    hiringAnniversaryMessage = {
                        dateTime: dayjs(hireDate).format('DD/MM/YYYY'),
                        fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                        message: `Today is ${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s hiring anniversary day!`
                    };
                } else if (isFutureAnniversary) {
                    daysUntilAnniversary = Math.ceil((thisYearAnniversary - today) / (1000 * 60 * 60 * 24));
                    hiringAnniversaryMessage = {
                        dateTime: dayjs(hireDate).format('DD/MM/YYYY'),
                        fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                        message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s hiring anniversary day is in ${daysUntilAnniversary} ${daysUntilAnniversary > 1 ? "days" : "day"} left!`
                    };
                } else {
                    const daysSinceAnniversary = Math.ceil((today - thisYearAnniversary) / (1000 * 60 * 60 * 24));
                    hiringAnniversaryMessage = {
                        dateTime: dayjs(hireDate).format('DD/MM/YYYY'),
                        fullName: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}`,
                        message: `${employee.CURRENT_FIRST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_LAST_NAME}'s hiring anniversary was ${daysSinceAnniversary} ${daysSinceAnniversary > 1 ? "days" : "day"} ago!`
                    };
                }

                processedMessages.push(hiringAnniversaryMessage);
            }
        });

        return processedMessages;
    }


    return messages;
}

export default AnniversaryReminder;