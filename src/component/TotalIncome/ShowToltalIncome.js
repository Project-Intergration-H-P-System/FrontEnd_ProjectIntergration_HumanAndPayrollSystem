import React, { useState } from 'react';
import './TotalIncome.css';
const ShowTotalIncome = ({ data }) => {
    return (
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sex</th>
                        <th>Working</th>
                        <th>Department</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Sex}</td>
                            <td>{item.Working}</td>
                            <td>{item.Department}</td>
                            <td>{item.TotalIncome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ShowTotalIncome;