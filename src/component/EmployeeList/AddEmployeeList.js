import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import './EmployeeList.css';

function AddEmployeeList({ isOpen, closeModal, setEmployees, employees }) {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({
            ...newEmployee,
            [name]: value
        });
    };

    const handleAdd = async () => {
        try {
            if (!newEmployee.PERSONAL_ID || !newEmployee.CURRENT_FIRST_NAME || !newEmployee.CURRENT_LAST_NAME || !newEmployee.SOCIAL_SECURITY_NUMBER || !newEmployee.EmployeeNumber || !newEmployee.SHAREHOLDER_STATUS || !newEmployee.CURRENT_GENDER || !newEmployee.PayRates_idPayRates) {
                // toast.error('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            const existingEmployee = employees.find(employee => employee.PERSONAL_ID === newEmployee.PERSONAL_ID || employee.SOCIAL_SECURITY_NUMBER === newEmployee.SOCIAL_SECURITY_NUMBER || employee.PayRates_idPayRates === newEmployee.PayRates_idPayRates);
            if (existingEmployee) {
                // toast.error('Personal ID, Social Security Number, hoặc ID Payrate đã tồn tại.');
                return;
            }

            await axios.post('http://localhost:8080/create', newEmployee);
            const response = await axios.get('http://localhost:8080/list');
            setEmployees(response.data);

            // toast.success('Add new employee successfully !');
            alert("Thành công !")
            closeModal();
            console.log(newEmployee);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            appElement={document.getElementById('root')}
        >
            {newEmployee && (
                <div>
                    <h2>Add new employee</h2>
                    <div className="modal-row">
                        <div className="modal-label">Personal ID:</div>
                        <input
                            type="text"
                            name="PERSONAL_ID"
                            value={newEmployee.PERSONAL_ID}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">First Name:</div>
                        <input
                            type="text"
                            name="CURRENT_FIRST_NAME"
                            value={newEmployee.CURRENT_FIRST_NAME}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Middle Name:</div>
                        <input
                            type="text"
                            name="CURRENT_MIDDLE_NAME"
                            value={newEmployee.CURRENT_MIDDLE_NAME}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Last Name:</div>
                        <input
                            type="text"
                            name="CURRENT_LAST_NAME"
                            value={newEmployee.CURRENT_LAST_NAME}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Social Security Number:</div>
                        <input
                            type="text"
                            name="SOCIAL_SECURITY_NUMBER"
                            value={newEmployee.SOCIAL_SECURITY_NUMBER}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Employee Number:</div>
                        <input
                            type="text"
                            name="EmployeeNumber"
                            value={newEmployee.EmployeeNumber}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Ethnicity:</div>
                        <input
                            type="text"
                            name="ETHNICITY"
                            value={newEmployee.ETHNICITY}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Shareholder Status:</div>
                        <select
                            name="SHAREHOLDER_STATUS"
                            value={newEmployee.SHAREHOLDER_STATUS}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Gender:</div>
                        <select
                            name="CURRENT_GENDER"
                            value={newEmployee.CURRENT_GENDER}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">ID Payrates:</div>
                        <select
                            name="PayRates_idPayRates"
                            value={newEmployee.PayRates_idPayRates}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select</option>
                            <option value="11">11</option>
                            <option value="22">22</option>
                            <option value="33">33</option>
                        </select>
                    </div>
                    <div className="modal-buttons">
                        <button
                            className="close-button"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="save-button"
                            onClick={handleAdd}
                        >
                            Add
                        </button>

                    </div>
                </div>
            )}
        </Modal>
    );
}

export default AddEmployeeList;
