import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuanityOfLeaveDays.css';

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [shareholderStatuses, setShareholderStatuses] = useState([]);
    const [searchResult, setSearchResult] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vacation');
                setEmployees(response.data);
                setLoading(false);

                const uniqueStatuses = [...new Set(response.data.map(employee => employee.SHAREHOLDER_STATUS))];
                setShareholderStatuses(uniqueStatuses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    const handleSearch = () => {
        const filtered = employees.filter(employee => {
            return employee.SHAREHOLDER_STATUS === shareholderStatus;
        });
        setEmployees(filtered);
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleShareholderStatusChange = (e) => {
        setShareholderStatus(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleEthnicityChange = (e) => {
        setEthnicity(e.target.value);
    };

    const handleEmploymentStatusChange = (e) => {
        setEmploymentStatus(e.target.value);
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
                    <input
                        type="text"
                        placeholder="Name"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <select defaultValue="" onChange={handleShareholderStatusChange}>
                        <option value="">Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="">Gender</option>
                        <option value="Nam">Nam</option>
                        <option value="Nu">Nu</option>
                    </select>
                    <select value={ethnicity} onChange={handleEthnicityChange}>
                        <option value="">Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Tay">Tay</option>
                    </select>
                    <select defaultValue="" onChange={handleEmploymentStatusChange}>
                        <option value="">Employment Status</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
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
                        {employees.map((employee) => (
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
export default EmployeeTable;

