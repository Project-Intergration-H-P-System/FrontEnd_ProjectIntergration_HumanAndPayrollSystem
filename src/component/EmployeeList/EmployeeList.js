import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './EmployeeList.css';

const EmployeeList = () => {
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
    const sampleData = [
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
    ];
    const [searchResult, setSearchResult] = useState(sampleData);
    const [name, setName] = useState('');

    const handleSearch = () => {
        const filteredData = sampleData.filter(item => {
            return (
                (name === '' || item.Name === name)
            );
        });
        setSearchResult(filteredData);
    };

    const handleChange = (value) => {
        setName(value);
        handleSearch(value)
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
            <div className='heading-page'>
                <div className='loca-heading'>
                    <div className='heading'>
                        Employee List
                    </div>
                </div>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input
                        placeholder="Type to search name..."
                        value={name}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>FullName</th>
                            <th>ID</th>
                            <th>Gender</th>
                            <th>Ethnic</th>
                            <th>Department</th>
                            <th>Vacation Day</th>
                            <th>Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.id}</td>
                                <td>{item.Gender}</td>
                                <td>{item.ethnic}</td>
                                <td>{item.department}</td>
                                <td>{item.VacationDay}</td>
                                <td>{item.Benefit}</td>
                                <td>
                                    <button className='view-button' onClick={() => handleView(item)}>View</button>
                                </td>
                            </tr>
                        ))}
                        {showAddForm && (
                            <tr>
                                <td>
                                    <input
                                        placeholder="Name"
                                        value={newEmployee.Name}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, Name: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="ID"
                                        value={newEmployee.id}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Gender"
                                        value={newEmployee.Gender}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, Gender: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Ethnicity"
                                        value={newEmployee.ethnic}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, ethnic: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Department"
                                        value={newEmployee.department}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Vacation Day"
                                        value={newEmployee.VacationDay}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, VacationDay: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Benefit"
                                        value={newEmployee.Benefit}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, Benefit: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <button className='save-button' onClick={handleSave}>Save</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="button-section">
                <button onClick={handleAdd}>Thêm</button>
                <button onClick={handleEdit}>Sửa</button>
                <button onClick={handleDelete}>Xóa</button>

            </div>
        </div>
    );
};

export default EmployeeList;