import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';
import AddEmployeeList from './AddEmployeeList';
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
    const [showAddForm, setShowAddForm] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        Name: '',
        id: '',
        Gender: '',
        ethnic: '',
        department: '',
        VacationDay: '',
        Benefit: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/list');
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
    const handleAdd = () => {
        setShowAddForm(true);
    };
    const handleEdit = () => {
        console.log('Sửa');
    };

    const handleDelete = () => {
        console.log('Xóa');
    };

    const handleView = (item) => {
        console.log('View', item);
    };

    const handleSave = () => {
        const isAnyFieldNotEmpty = Object.values(newEmployee).some(value => value.trim() !== '');
        const areAllFieldsNotEmpty = Object.values(newEmployee).every(value => value.trim() !== '');

        if (areAllFieldsNotEmpty) {
            const updatedData = [...searchResult, newEmployee];
            setSearchResult(updatedData);
            setShowAddForm(false);
            setNewEmployee({
                Name: '',
                id: '',
                Gender: '',
                ethnic: '',
                department: '',
                VacationDay: '',
                Benefit: ''
            });
        } else if (isAnyFieldNotEmpty) {
            alert('Vui lòng điền đầy đủ thông tin');
        } else {
            setShowAddForm(false);
        }
    };
    return (
        <div className="container_page">
            <div className='Quantity'>
                <div className='loca-heading'>
                    <div className='heading'>
                        Employee List
                    </div>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Name"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div >
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">Full Name</th>
                            <th className="column-header">ID</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Vacation Day</th>
                            <th className="column-header">SOCIAL SECURITY NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="table-row">
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{employee.PERSONAL_ID}</td>
                                <td className="table-cell">{employee.CURRENT_GENDER}</td>
                                <td className="table-cell">{employee.ETHNICITY}</td>
                                <td className="table-cell">{employee.SHAREHOLDER_STATUS}</td>
                                <td className="table-cell">{employee.VacationDays}</td>
                                <td className="table-cell">{employee.SOCIAL_SECURITY_NUMBER}</td>
                                <button className="view-button" onClick={() => handleView(employee)}>View</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="button-section">
                <button className="add-button" onClick={handleAdd}>Thêm</button>
                <button className="edit-button" onClick={handleEdit}>Sửa</button>
                <button className="delete-button" onClick={handleDelete}>Xóa</button>
            </div>
            {showAddForm && (
                <AddEmployeeList setShowAddForm={setShowAddForm} setEmployees={setEmployees} />
            )}
        </div>
    );
}
export default EmployeeTable;

