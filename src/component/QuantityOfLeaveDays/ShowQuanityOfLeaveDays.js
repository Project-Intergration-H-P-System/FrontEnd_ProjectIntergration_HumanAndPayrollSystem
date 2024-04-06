import React from 'react';

const ShowQuanityOfLeaveDays = ({ data }) => {
    return (
        <div className="table-section">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SharehoderStatus</th>
                        <th>Sex</th>
                        <th>Ethnic</th>
                        <th>Employment Status</th>
                        <th>Department</th>
                        <th>QOLD</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.SharehoderStatus}</td>
                            <td>{item.sex}</td>
                            <td>{item.ethnic}</td>
                            <td>{item.EmploymentStatus}</td>
                            <td>{item.department}</td>
                            <td>{item.qold}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowQuanityOfLeaveDays;