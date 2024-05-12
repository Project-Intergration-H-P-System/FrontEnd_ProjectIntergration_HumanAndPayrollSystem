import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuanityOfLeaveDays.css';

function QuanityOfLeaveDays() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [searchConditions, setSearchConditions] = useState({
        shareholderStatus: '',
        gender: '',
        ethnicity: '',
        employmentStatus: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vacation');
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        const filtered = employees.filter(employee => {
            return (
                (employee.SHAREHOLDER_STATUS.toString() === searchConditions.shareholderStatus || !searchConditions.shareholderStatus) &&
                (employee.CURRENT_GENDER.toLowerCase() === searchConditions.gender.toLowerCase() || !searchConditions.gender) &&
                (employee.ETHNICITY.trim().toLowerCase() === searchConditions.ethnicity.trim().toLowerCase() || !searchConditions.ethnicity) &&
                (employee.EMPLOYMENT_STATUS.trim().toLowerCase() === searchConditions.employmentStatus.trim().toLowerCase() || !searchConditions.employmentStatus)
            );
        });
        setFilteredEmployees(filtered);
    }, [employees, searchConditions]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSearch = () => {
        setSearchConditions({
            shareholderStatus,
            gender,
            ethnicity,
            employmentStatus
        });
    };

    return (
        <div className="container_page">
            <div className='Quantity'>
                <div className='loca-heading'>
                    <div className='heading'>
                        Quantity Of Leave Days
                    </div>
                    <div className='note-heading'>
                        *To show the quantity of leave days of each employee and search by fields: shareholder status, gender, ethnicity and employment status
                    </div>
                </div>
                <div className="search-container">
                    <select value={shareholderStatus} onChange={(e) => setShareholderStatus(e.target.value)}>
                        <option value="">Shareholder Status</option>
                        <option value="1">Yes (1)</option>
                        <option value="0">No (0)</option>
                    </select>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Gender</option>
                        <option value="Nam">Nam</option>
                        <option value="Nu">Nu</option>
                    </select>
                    <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                        <option value="">Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Tay">Tay</option>
                    </select>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)}>
                        <option value="">Employment Status</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div >
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">Full Name</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Employment Status</th>
                            <th className="column-header">Vacation Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id} className="table-row">
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{employee.SHAREHOLDER_STATUS}</td>
                                <td className="table-cell">{employee.CURRENT_GENDER}</td>
                                <td className="table-cell">{employee.ETHNICITY}</td>
                                <td className="table-cell">{employee.EMPLOYMENT_STATUS}</td>
                                <td className="table-cell">{employee.VacationDays}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default QuanityOfLeaveDays;