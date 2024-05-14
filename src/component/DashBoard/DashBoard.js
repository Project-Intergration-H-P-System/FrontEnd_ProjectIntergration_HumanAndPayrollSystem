import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashBoard.css';
import Chart from 'chart.js/auto';
const Dashboard = ({ setSelected, totalEmployees }) => {

    const handleEmployeeClick = () => {
        setSelected(1);
    };

    const handleNotificationClick = () => {
        // Implement your logic for notifications
    };

    useEffect(() => {
        let vacationDaysChart;

        const fetchData_vacation = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vacation');
                const data = response.data;

                const employeeNames = data.map(employee => employee.FULLNAME);
                const vacationDays = data.map(employee => employee.VacationDays);

                // Tạo biểu đồ
                const ctx = document.getElementById('vacation-days-chart').getContext('2d');
                vacationDaysChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: employeeNames,
                        datasets: [{
                            label: 'Vacation Days',
                            data: vacationDays,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData_vacation();
        return () => {
            if (vacationDaysChart) {
                vacationDaysChart.destroy();
            }
        };
    }, []);
    useEffect(() => {
        let TotalIncomeChart;

        const fetchData_totalincome = async () => {
            try {
                const response = await axios.get('http://localhost:8080/total');
                const data = response.data;

                const employeeNames = data.map(employee => employee.FULLNAME);
                const SALARY = data.map(employee => employee.SALARY);

                const ctx = document.getElementById('vacation-days-chart-2').getContext('2d');
                TotalIncomeChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: employeeNames,
                        datasets: [{
                            label: 'Total Income',
                            data: SALARY,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData_totalincome();

        return () => {
            if (TotalIncomeChart) {
                TotalIncomeChart.destroy();
            }
        };
    }, []);

    return (
        <div className="dashboard">
            <div className='loca-heading'>
                <div className='heading'>
                    DashBoard
                </div>
            </div>
            <div className="dashboard-container">
                <div className="dashboard-item employee" onClick={handleEmployeeClick}>
                    <div className="icon"><i className="fas fa-users"></i></div>
                    <div className="content">
                        <h3>Employee</h3>
                        <p>{totalEmployees}</p> {/* Hiển thị số lượng nhân viên */}

                    </div>
                </div>
                <div className="dashboard-item notification" onClick={handleNotificationClick}>
                    <div className="icon"><i className="fas fa-bell"></i></div>
                    <div className="content">
                        <h3>Notification</h3>
                        <p>4</p>
                    </div>
                </div>
                {/* <div className="dashboard-item calendar" onClick={handleCalendarClick}>
                    <div className="icon"><i className="fas fa-calendar-alt"></i></div>
                    <div className="content">
                        <h3>Calendar</h3>
                        <p>6</p>
                    </div>
                </div> */}
            </div>
            <div className="chart-container">
                <div className="chart-item">
                    <h3>Total Income of employees by department</h3>
                    <canvas id="vacation-days-chart-2"></canvas>
                </div>
                <div className="chart-item">
                    <h3>Total vacation days by department</h3>
                    <canvas id="vacation-days-chart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
