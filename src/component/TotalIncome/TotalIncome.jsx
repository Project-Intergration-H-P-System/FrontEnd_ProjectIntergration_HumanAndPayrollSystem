import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TotalIncome.css';


const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const [shareholderStatus, setShareholderStatus] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [department, setDepartment] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/total');
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        let filteredEmployees = employees.filter(employee => {
            const matchesShareholderStatus = shareholderStatus === '' || employee.SHAREHOLDER_STATUS.toLowerCase() === shareholderStatus.toLowerCase();
            const matchesGender = gender === '' || employee.CURRENT_GENDER.toLowerCase() === gender.toLowerCase();
            const matchesEthnicity = ethnicity === '' || employee.ETHNICITY.toLowerCase() === ethnicity.toLowerCase();
            const matchesEmploymentStatus = employmentStatus === '' || employee.EMPLOYMENT_STATUS.toLowerCase() === employmentStatus.toLowerCase();
            const matchesDepartment = department === '' || employee.DEPARTMENT.toLowerCase() === department.toLowerCase();

            return matchesShareholderStatus && matchesGender && matchesEthnicity && matchesEmploymentStatus && matchesDepartment;
        });

        setEmployees(filteredEmployees);
    };

    const renderShareholderStatus = (status) => {
        return status === 1 ? 'Yes' : 'No';
    };

    return (
        <div className="container_page">
            <div className='Quantity'>
                <div className='loca-heading'>
                    <div className='heading'>
                        Quantity Of Leave Days
                    </div>
                    <div className='note-heading'>
                        *To calculate total income, please select the boxes below
                    </div>
                </div>
                <div className="search-container">
                    <select value={shareholderStatus} onChange={(e) => setShareholderStatus(e.target.value)} style={{ fontSize: '14px' }}>
                        <option value="" disabled hidden>Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ fontSize: '14px' }}>
                        <option value="" disabled hidden>Gender</option>
                        <option value="Nam">Nam</option>
                        <option value="Nu">Nu</option>
                    </select>
                    <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} style={{ fontSize: '14px' }}>
                        <option value="" disabled hidden>Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Tay">Tay</option>
                    </select>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} style={{ fontSize: '14px' }}>
                        <option value="" disabled hidden>Employment Status</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
                    </select>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)} style={{ fontSize: '14px' }}>
                        <option value="" disabled hidden>Department</option>
                        <option value="Department1">DEV</option>
                        <option value="Department2">BA</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch} style={{ fontSize: '14px' }}>Search</button>
                    </div>
                </div>

            </div>
            <div>
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">Full Name</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Employment Status</th>
                            <th className="column-header">Department</th>
                            <th className="column-header">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="table-row">
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{renderShareholderStatus(employee.SHAREHOLDER_STATUS)}</td>
                                <td className="table-cell">{employee.CURRENT_GENDER}</td>
                                <td className="table-cell">{employee.ETHNICITY}</td>
                                <td className="table-cell">{employee.EMPLOYMENT_STATUS}</td>
                                <td className="table-cell">{employee.DEPARTMENT}</td>
                                <td className="table-cell">{employee.SALARY}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;
