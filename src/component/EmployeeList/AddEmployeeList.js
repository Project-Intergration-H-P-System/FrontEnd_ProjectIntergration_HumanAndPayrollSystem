import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeList = ({ setShowAddForm, setEmployees }) => {
    const [newEmployee, setNewEmployee] = useState({
        PERSONAL_ID: '',
        CURRENT_FIRST_NAME: '',
        CURRENT_MIDDLE_NAME: '',
        CURRENT_LAST_NAME: '',
        SOCIAL_SECURITY_NUMBER: '',
        EmployeeNumber: '',
        ETHNICITY: '',
        SHAREHOLDER_STATUS: '',
        CURRENT_GENDER: '',
        PayRates_idPayRates: ''
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({
            ...newEmployee,
            [name]: value
        });
    };
    const handleSave = async () => {
        try {
            await axios.post('http://localhost:8080/create', newEmployee);
            setShowAddForm(false);
            const response = await axios.get('http://localhost:8080/list');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="add-form">
            <h2>Add New Employee</h2>
            <form>
                <label>Personal ID:</label>
                <input type="text" name="PERSONAL_ID" value={newEmployee.PERSONAL_ID} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="CURRENT_FIRST_NAME" value={newEmployee.CURRENT_FIRST_NAME} onChange={handleChange} />
                <label>Middle Name:</label>
                <input type="text" name="CURRENT_MIDDLE_NAME" value={newEmployee.CURRENT_MIDDLE_NAME} onChange={handleChange} />
                <label>Last Name:</label>
                <input type="text" name="CURRENT_LAST_NAME" value={newEmployee.CURRENT_LAST_NAME} onChange={handleChange} />
                <label>Social Security Number:</label>
                <input type="text" name="SOCIAL_SECURITY_NUMBER" value={newEmployee.SOCIAL_SECURITY_NUMBER} onChange={handleChange} />
                <label>Employee Number:</label>
                <input type="text" name="EmployeeNumber" value={newEmployee.EmployeeNumber} onChange={handleChange} />
                <label>Ethnicity:</label>
                <input type="text" name="ETHNICITY" value={newEmployee.ETHNICITY} onChange={handleChange} />
                <label>Shareholder Status:</label>
                <select name="SHAREHOLDER_STATUS" value={newEmployee.SHAREHOLDER_STATUS} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
                <label>Gender:</label>
                <select name="CURRENT_GENDER" value={newEmployee.CURRENT_GENDER} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>ID Payrates:</label>
                <select name="PayRates_idPayRates" value={newEmployee.PayRates_idPayRates} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="11">11</option>
                    <option value="22">22</option>
                    <option value="33">33</option>
                </select>
                <button type="button" onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default AddEmployeeList;