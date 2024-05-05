import React from 'react';
import './TotalIncome.css';

const ShowTotalIncome = ({ data }) => {
    return (
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Shareholder Status</th>
                        <th>Ethnicity</th>
                        <th>Gender</th>
                        <th>Employment Status</th>
                        <th>Department</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.shareholderStatus}</td>
                            <td>{item.ethnicity}</td>
                            <td>{item.gender}</td>
                            <td>{item.employmentStatus}</td>
                            <td>{item.department}</td>
                            <td>{item.totalIncome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTotalIncome;
