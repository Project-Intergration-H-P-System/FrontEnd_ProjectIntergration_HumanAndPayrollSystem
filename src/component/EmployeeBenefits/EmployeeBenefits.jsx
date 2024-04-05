import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeBenefits.css';

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [shareholderStatusFilter, setShareholderStatusFilter] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('API_ENDPOINT_URL');
            setEmployees(response.data);
            setFilteredEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    // Hàm xử lý khi thay đổi Shareholder Status combobox
    const handleShareholderStatusChange = (event) => {
        const status = event.target.value;
        setShareholderStatusFilter(status);

        // Lọc nhân viên dựa trên Shareholder Status
        if (status !== '') {
            const filtered = employees.filter(employee => employee.shareholderStatus === status);
            setFilteredEmployees(filtered);
        } else {
            setFilteredEmployees(employees);
        }
    };

    // Hàm xử lý khi nhấn nút Search
    const handleSearch = () => {
        // Thực hiện tìm kiếm dựa trên các tiêu chí khác nếu cần
        // Ví dụ:
        // const filtered = employees.filter(employee => employee.someProperty === someValue);
        // setFilteredEmployees(filtered);
    };

    return (
        <div >
            {/* Employee Benefits Table */}
            <div className="employee-benefits">
                <h2 className="table-title">Employee Benefits</h2>
                <div className="filter-container">
                    <label htmlFor="shareholderStatus">Shareholder Status: </label>
                    <select id="shareholderStatus" value={shareholderStatusFilter} onChange={handleShareholderStatusChange}>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th className="column-header">Name</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Employment Status</th>
                            <th className="column-header">Department</th>
                            <th className="column-header">Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell">{`${employee.firstName} ${employee.lastName}`}</td>
                                <td className="table-cell">{employee.shareholderStatus}</td>
                                <td className="table-cell">{employee.gender}</td>
                                <td className="table-cell">{employee.ethnicity}</td>
                                <td className="table-cell">{employee.employmentStatus}</td>
                                <td className="table-cell">{employee.department}</td>
                                <td className="table-cell">{`${employee.benefit.deductible} * ${employee.benefit.percentageCoPay}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeTable;

