import React from 'react';
import Modal from 'react-modal';
import './EmployeeList.css';

const UpdateEmployeeModal = ({ isOpen, closeModal, updateEmployee, handleChange, handleUpdate }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            appElement={document.getElementById('root')}
        >
            {updateEmployee && (
                <div>
                    <h2 className="modal-header">Update employee</h2>
                    <div className="modal-row">
                        <div className="modal-label">First Name:</div>
                        <input
                            type="text"
                            name="firstName"
                            value={updateEmployee.firstName}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Middle Name:</div>
                        <input
                            type="text"
                            name="middleName"
                            value={updateEmployee.middleName}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Last Name:</div>
                        <input
                            type="text"
                            name="lastName"
                            value={updateEmployee.lastName}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Birth Day:</div>
                        <input
                            type="date"
                            name="birthDay"
                            value={updateEmployee.birthDay}
                            placeholder='Enter birthDay'
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Social Security Number:</div>
                        <input
                            type="text"
                            name="ssNumber"
                            value={updateEmployee.ssNumber}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">DRIVERS LICENSE:</div>
                        <input
                            type="text"
                            name="driver"
                            value={updateEmployee.driver}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">ADDRESS:</div>
                        <input
                            type="text"
                            name="address"
                            value={updateEmployee.address}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Country:</div>
                        <input
                            type="text"
                            name="country"
                            value={updateEmployee.country}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">ZIP:</div>
                        <input
                            type="number"
                            name="zip"
                            value={updateEmployee.zip}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Phone Number:</div>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={updateEmployee.phoneNumber}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Email:</div>
                        <input
                            type="text"
                            name="email"
                            value={updateEmployee.email}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">PayRate:</div>
                        <input
                            type="text"
                            name="prname"
                            value={updateEmployee.prname}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Vacations:</div>
                        <input
                            type="number"
                            name="vacations"
                            value={updateEmployee.vacations}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">PaidToDate:</div>
                        <input
                            type="number"
                            name="pd"
                            value={updateEmployee.pd}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">PaidLastYear:</div>
                        <input
                            type="number"
                            name="py"
                            value={updateEmployee.py}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">EMPLOYMENT CODE:</div>
                        <input
                            type="text"
                            name="ecode"
                            value={updateEmployee.ecode}
                            placeholder='540-*'
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">WORKERS COMP CODE:</div>
                        <input
                            type="text"
                            name="workcode"
                            value={updateEmployee.workcode}
                            placeholder='C#,Java,Nodejs'
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">NUMBER DAYS REQUIREMENT OF WORKING:</div>
                        <input
                            type="text"
                            name="number"
                            value={updateEmployee.number}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Ethnicity:</div>
                        <select
                            name="ethnicity"
                            value={updateEmployee.ethnicity}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select ethnicity</option>
                            <option value="Kinh      ">Kinh</option>
                            <option value="Tay       ">Tay</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Gender:</div>
                        <select
                            name="gender"
                            value={updateEmployee.gender}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select gender</option>
                            <option value="Nam">Nam</option>
                            <option value="Nu">Nu</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">MARITAL STATUS:</div>
                        <select
                            name="marital"
                            value={updateEmployee.marital}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select marital status</option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Shareholder Status:</div>
                        <select
                            name="status"
                            value={updateEmployee.status}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select status</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Benefit ID:</div>
                        <select
                            name="benefitid"
                            value={updateEmployee.benefitid}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select benefit id</option>
                            <option value="1">Luongki1</option>
                            <option value="2">Bonus</option>
                            <option value="3">ThuongTet</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">ID Payrates:</div>
                        <select
                            name="prid"
                            value={updateEmployee.prid}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select id payrate</option>
                            <option value="11">PR01</option>
                            <option value="22">PR02</option>
                            <option value="33">PR03</option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Employment Status:</div>
                        <select
                            name="employstatus"
                            value={updateEmployee.employstatus}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select employstatus</option>
                            <option value="Part-time ">Part-time </option>
                            <option value="Full-time ">Full-time </option>
                        </select>
                    </div>
                    <div className="modal-row">
                        <div className="modal-label">Department:</div>
                        <select
                            name="depart"
                            value={updateEmployee.depart}
                            onChange={handleChange}
                            className="modal-input"
                        >
                            <option value="">Select employstatus</option>
                            <option value="DEV">DEV</option>
                            <option value="BA">BA</option>
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
                            onClick={handleUpdate}
                        >
                            Update
                        </button>

                    </div>
                </div>
            )}
        </Modal>
    );
}

export default UpdateEmployeeModal;
