import React from 'react';
import './EmployeeList.css';

const ShowEmployeeList = ({ data }) => {
    return (
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Gender</th>
                        <th>Ethnic</th>
                        <th>Department</th>
                        <th>Vacation Day</th>
                        <th>Benefit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.id}</td>
                            <td>{item.Gender}</td>
                            <td>{item.ethnic}</td>
                            <td>{item.department}</td>
                            <td>{item.VacationDay}</td>
                            <td>{item.Benefit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowEmployeeList;