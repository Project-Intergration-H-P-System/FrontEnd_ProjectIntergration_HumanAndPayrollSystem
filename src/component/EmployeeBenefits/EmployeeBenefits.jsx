import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../EmployeeBenefits/EmployeeBenefits.css';

function EmployeeBenefits() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [searchConditions, setSearchConditions] = useState({
        shareholderStatus: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/benefit');
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        const filtered = employees.filter(employee => {
            return (
                (employee.SHAREHOLDER_STATUS.toString() === searchConditions.shareholderStatus || !searchConditions.shareholderStatus)
            );
        });
        setFilteredEmployees(filtered);
    }, [employees, searchConditions]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSearch = () => {
        setSearchConditions({
            shareholderStatus
        });
    };

    return (
        <div >
            <div className="container_page">
                <div className='loca-heading'>
                    <div className='heading'>
                        Employee Benefits
                    </div>
                    <div className='note-heading'>
                        *Show the list of employee's benefits and total benefits follow by shareholder status field
                    </div>
                </div>
                <div className="search-container">
                    <select value={shareholderStatus} onChange={(e) => setShareholderStatus(e.target.value)}>
                        <option value="">Shareholder Status</option>
                        <option value="1">Yes (1)</option>
                        <option value="0">No (0)</option>
                    </select>

                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">Full Name</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id} className="table-row">
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{employee.SHAREHOLDER_STATUS}</td>
                                <td className="table-cell">{employee.CURRENT_GENDER}</td>
                                <td className="table-cell">{employee.ETHNICITY}</td>
                                <td className="table-cell">{employee.FROFIT}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EmployeeBenefits;

