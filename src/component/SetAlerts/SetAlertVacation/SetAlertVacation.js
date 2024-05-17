import { useEffect, useState } from 'react';

function ExceededVacation({ data }) {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (Array.isArray(data)) {

            const processedMessages = processExceededVacation(data);
            setMessages(prevMessages => {
                // Make sure to update state based on the previous state
                if (prevMessages !== processedMessages) {
                    return processedMessages;
                }
                return prevMessages;
            });
        }
    }, [data]);

    function processExceededVacation(data) {
        const processedMessages = [];

        data.forEach(employee => {
            const numberOfDaysOff = employee.totalVacationDays;
            const numberOfDaysOffAllowed = employee.VacationDays;
            const numberOfExceededVacation = Math.ceil((numberOfDaysOff - numberOfDaysOffAllowed));

            const ExceededVacationMessage = {
                NumberOfDaysOffAllowed: `${employee.VacationDays}`,
                NumberOfDaysOff: `${employee.totalVacationDays}`,
                fullName: `${employee.FirstName} ${employee.LastName}`,
                message: `${employee.FirstName} ${employee.LastName} took more than ${numberOfExceededVacation} ${numberOfExceededVacation > 1 ? "days" : "day"} off from a certain number of vacation days !`
            };
            processedMessages.push(ExceededVacationMessage);
        }
        );
        return processedMessages;
    }
    return messages;
}

export default ExceededVacation;