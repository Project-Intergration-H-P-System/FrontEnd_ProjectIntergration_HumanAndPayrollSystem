import React from 'react';
import './EmployeeBenefits.css';

const ShowEmployeeBenefits = ({ data }) => {
    return (
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SharehoderStatus</th>
                        <th>Gender</th>
                        <th>Ethnic</th>
                        <th>Employment Status</th>
                        <th>Department</th>
                        <th>Benefit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.SharehoderStatus}</td>
                            <td>{item.Gender}</td>
                            <td>{item.ethnic}</td>
                            <td>{item.EmploymentStatus}</td>
                            <td>{item.department}</td>
                            <td>{item.Benefit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowEmployeeBenefits;