import React from 'react';
import Modal from 'react-modal';
import './EmployeeList.css';

const ViewEmployeeList = ({ isOpen, employee, closeModal }) => {
    if (!isOpen || !employee) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            appElement={document.getElementById('root')}
        >
            {employee && (
                <div>
                    <h2 className="modal-header">View Employee</h2>

                    <div className="modal-row">
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Personal ID:</div>
                        <input
                            type="text"
                            value={employee.PERSONAL_ID}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">First Name:</div>
                        <input
                            type="text"
                            value={employee.CURRENT_FIRST_NAME}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Middle Name:</div>
                        <input
                            type="text"
                            value={employee.CURRENT_MIDDLE_NAME}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Last Name:</div>
                        <input
                            type="text"
                            value={employee.CURRENT_LAST_NAME}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Shareholder Status:</div>
                        <input
                            type="text"
                            value={employee.SHAREHOLDER_STATUS === 1 ? 'Yes' : 'No'}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Gender:</div>
                        <input
                            type="text"
                            value={employee.CURRENT_GENDER === 'Nam' ? 'Nam' : 'Nu'}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Ethnicity:</div>
                        <input
                            type="text"
                            value={employee.ETHNICITY}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">City:</div>
                        <input
                            type="text"
                            value={employee.CURRENT_ADDRESS_2}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Employment Status:</div>
                        <input
                            type="text"
                            value={employee.EMPLOYMENT_STATUS}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Vacation Day:</div>
                        <input
                            type="text"
                            value={employee.VacationDays}
                            disabled
                            className="modal-input"
                        />
                    </div>
                    {/* <div className="modal-row">
                        <div className="modal-label">Employee Number:</div>
                        <input
                            type="text"
                            value={employee.EmployeeNumber}
                            disabled
                            className="modal-input"
                        />
                    </div> */}



                    <div className="modal-buttons">
                        <button
                            className="close-button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default ViewEmployeeList;