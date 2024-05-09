import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';
import Modal from 'react-modal';
import { FaSearch } from "react-icons/fa";
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';


function EmployeeTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [originalEmployees, setOriginalEmployees] = useState([]);
    const [name, setName] = useState('');


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
    const handleChangee = (value) => {
        setName(value);
        handleSearch(value);
    };

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
                toast.error('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            const existingEmployee = employees.find(employee => employee.PERSONAL_ID === newEmployee.PERSONAL_ID || employee.SOCIAL_SECURITY_NUMBER === newEmployee.SOCIAL_SECURITY_NUMBER || employee.PayRates_idPayRates === newEmployee.PayRates_idPayRates);
            if (existingEmployee) {
                toast.error('Personal ID, Social Security Number, hoặc ID Payrate đã tồn tại.');
                return;
            }

            await axios.post('http://localhost:8080/create', newEmployee);
            const response = await axios.get('http://localhost:8080/list');
            setEmployees(response.data);

            toast.success('Add new employee successfully !');
            setIsOpen(false);
            console.log(newEmployee);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    // const handleAdd = async () => {
    //     try {
    //         // Kiểm tra xem có bất kỳ trường nào không được nhập
    //         const emptyFields = Object.entries(newEmployee).filter(([key, value]) => {
    //             return value === '';
    //         });

    //         if (emptyFields.length > 0) {
    //             const fieldNames = emptyFields.map(([key]) => key).join(', ');
    //             toast.error(`Please fill out all information in all fields: ${fieldNames} !`);
    //             return;
    //         }

    //         // Kiểm tra xem nhân viên đã tồn tại hay không
    //         const existingEmployee = employees.find(employee => employee.PERSONAL_ID === newEmployee.PERSONAL_ID || employee.SOCIAL_SECURITY_NUMBER === newEmployee.SOCIAL_SECURITY_NUMBER || employee.PayRates_idPayRates === newEmployee.PayRates_idPayRates);
    //         if (existingEmployee) {
    //             if (existingEmployee.PERSONAL_ID === newEmployee.PERSONAL_ID) {
    //                 toast.error('Personal ID already exists !');
    //             }
    //             if (existingEmployee.SOCIAL_SECURITY_NUMBER === newEmployee.SOCIAL_SECURITY_NUMBER) {
    //                 toast.error('Social Security Number already exists !');
    //             }
    //             if (existingEmployee.PayRates_idPayRates === newEmployee.PayRates_idPayRates) {
    //                 toast.error('ID Payrates already exists !');
    //             }
    //             return;
    //         }

    //         // Thực hiện thêm nhân viên
    //         await axios.post('http://localhost:8080/create', newEmployee);
    //         const response = await axios.get('http://localhost:8080/list');
    //         setEmployees(response.data);

    //         toast.success('Add new employee successfully !');
    //         setIsOpen(false);
    //         console.log(newEmployee);
    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // };
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (typeof searchTerm === 'string') {
            if (!searchTerm) {
                setEmployees(originalEmployees);
            } else {
                const filteredEmployees = originalEmployees.filter(employee =>
                    employee.FULLNAME.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setEmployees(filteredEmployees);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/list');
                setEmployees(response.data);
                setOriginalEmployees(response.data); // Lưu trữ danh sách nhân viên gốc
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleMouseEnter = (event) => {
        event.currentTarget.querySelector('.view').style.opacity = 1;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.querySelector('.view').style.opacity = 0;
    };

    return (
        <div className="employee-list">
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
                        onChange={(e) => handleChangee(e.target.value)}

                    />
                </div>
            </div>

            <button
                className="view-detail-button"
                onClick={() => setIsOpen(true)}


            >
                NEW EMPLOYEE
            </button>

            <div >
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">Full Name</th>
                            <th className="column-header">ID</th>
                            <th className="column-header">Shareholder Status</th>
                            <th className="column-header">Gender</th>
                            <th className="column-header">Ethnicity</th>
                            <th className="column-header">Country</th>
                            <th className="column-header">Employment Status</th>
                            <th className="column-header">Vacation Day</th>
                            <th className="column-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="table-row">
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{employee.PERSONAL_ID}</td>
                                <td className="table-cell">{employee.SHAREHOLDER_STATUS}</td>
                                <td className="table-cell">{employee.CURRENT_GENDER}</td>
                                <td className="table-cell">{employee.ETHNICITY}</td>
                                <td className="table-cell">{employee.CURRENT_COUNTRY}</td>
                                <td className="table-cell">{employee.EMPLOYMENT_STATUS}</td>
                                <td className="table-cell">{employee.VacationDays}</td>
                                <td className="table-cell">
                                    <div className="icon-buttons-container">
                                        <button
                                            className="icon-button"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={{}}
                                        >
                                            <FontAwesomeIcon icon={faList} className="icon" />
                                            <span className="view">View</span>
                                        </button>

                                        <button
                                            className="icon-button"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={{}}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                                            <span className="view">Update</span>
                                        </button>

                                        <button
                                            className="icon-button"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={{}}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="icon" />
                                            <span className="view">Delete</span>
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

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
                                type="number"
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
                                type="number"
                                name="SOCIAL_SECURITY_NUMBER"
                                value={newEmployee.SOCIAL_SECURITY_NUMBER}
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Employee Number:</div>
                            <input
                                type="number"
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
                )
                }
            </Modal>
        </div>
    );
}
export default EmployeeTable;

