import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import AddEmployeeList from './AddEmployeeList';
import UpdateEmployeeList from './UpdateEmployeeList'
import SearchEmployeeList from './SearchEmployeeList';
import ModalDelete from './ModelDelete';
import ViewEmployeeList from './ViewEmployeeList';


function EmployeeList() {
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateOpen, setUpdateOpen] = useState(false);
    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [originalEmployees, setOriginalEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [idToDelete, setIdToDelete] = useState(null);
    const [idToUpdate, setIdToUpdate] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [viewedEmployee, setViewedEmployee] = useState(null);



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




    const handleViewClick = (employee) => {
        setViewedEmployee(employee);
        setIsViewOpen(true);
    };
    const handleCloseViewDialog = () => {
        setIsViewOpen(false);
        setViewedEmployee(null);
    };

    const handleUpdateClick = (id) => {
        setIdToUpdate(id);
        setUpdateOpen(true);
    };

    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setDeleteOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await axios.delete('http://localhost:8080/delete/' + idToDelete)
            setEmployees((prevs) => prevs.filter((employee) => employee.PERSONAL_ID !== idToDelete));
            toast('🦄 Delete employee successfully!!!!');
            setDeleteOpen(false);
        } catch (e) {
            console.log(e)
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/list');
                console.log(response)
                setEmployees(response.data);
                setOriginalEmployees(response.data);
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

    const handleMouseEnter = (event) => {
        event.currentTarget.querySelector('.view').style.opacity = 1;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.querySelector('.view').style.opacity = 0;
    };


    return (
        <div className="employee-list">
            <SearchEmployeeList handleChange={handleSearch} />

            <button
                className="view-detail-button"
                onClick={() => setIsOpen(true)}
            >
                NEW EMPLOYEE
            </button>
            <AddEmployeeList
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                setEmployees={setEmployees}
                employees={employees}
            />
            {/* View employee dialog */}
            <ViewEmployeeList isOpen={isViewOpen} employee={viewedEmployee} closeModal={handleCloseViewDialog} />
            <UpdateEmployeeList
                id={idToUpdate}
                isOpen={isUpdateOpen}
                closeModal={() => setUpdateOpen(false)}
                setEmployees={setEmployees}
            />
            <div >
                <table className="table-section">
                    <thead>
                        <tr>
                            <th className="column-header">ID</th>
                            <th className="column-header">Full Name</th>
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
                            <tr key={employee.PERSONAL_ID} className="table-row">
                                <td className="table-cell">{employee.PERSONAL_ID}</td>
                                <td className="table-cell">{employee.FULLNAME}</td>
                                <td className="table-cell">{employee.SHAREHOLDER_STATUS === 1 ? "Yes" : "No"}</td>
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
                                            onClick={() => handleViewClick(employee)}
                                        >
                                            <FontAwesomeIcon icon={faList} className="icon" />
                                            <span className="view">View</span>
                                        </button>

                                        <button
                                            className="icon-button"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleUpdateClick(employee.PERSONAL_ID)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                                            <span className="view">Update</span>

                                        </button>

                                        <button
                                            className="icon-button"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleDeleteClick(employee.PERSONAL_ID)}
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
                <ModalDelete
                    isOpen={isDeleteOpen}
                    closeModal={() => setDeleteOpen(false)}
                    handleDelete={handleDeleteConfirm}
                />
            </div>
        </div>

    );
}
export default EmployeeList;
