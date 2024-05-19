import React from 'react';
import Modal from 'react-modal';
import './EmployeeList.css';

const AddEmployeeModal = ({ isOpen, closeModal, newEmployee, handleChange, handleAdd }) => {
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
                    <h2 className="modal-header">Add new employee</h2>
                    <div className='modal-table-object'>
                        <div className="modal-row">
                            <div className="modal-label">First Name:</div>
                            <input
                                type="text"
                                name="firstName"
                                value={newEmployee.firstName}
                                placeholder='Enter first name'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Middle Name:</div>
                            <input
                                type="text"
                                name="middleName"
                                value={newEmployee.middleName}
                                placeholder='Enter middle name'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Last Name:</div>
                            <input
                                type="text"
                                name="lastName"
                                value={newEmployee.lastName}
                                placeholder='Enter last name'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Birth Day:</div>
                            <input
                                type="date"
                                name="birthDay"
                                value={newEmployee.birthDay}
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
                                value={newEmployee.ssNumber}
                                placeholder='Enter ssNumber '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Drivers License:</div>
                            <input
                                type="text"
                                name="driver"
                                value={newEmployee.driver}
                                placeholder='Enter driver license '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Current address1:</div>
                            <input
                                type="text"
                                name="address"
                                value={newEmployee.address}
                                placeholder='Enter address '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Current address2:</div>
                            <input
                                type="text"
                                name="address2"
                                value={newEmployee.address2}
                                placeholder='Enter address2 '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Country:</div>
                            <input
                                type="text"
                                name="country"
                                value={newEmployee.country}
                                placeholder='Enter country '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Zip:</div>
                            <input
                                type="number"
                                name="zip"
                                value={newEmployee.zip}
                                placeholder='Enter zip (number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Phone Number:</div>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={newEmployee.phoneNumber}
                                placeholder='Enter phoneNumber '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Email:</div>
                            <input
                                type="text"
                                name="email"
                                value={newEmployee.email}
                                placeholder='Enter email '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">PayRate:</div>
                            <input
                                type="text"
                                name="prname"
                                value={newEmployee.prname}
                                placeholder='Enter PayRate '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Vacations:</div>
                            <input
                                type="number"
                                name="vacations"
                                value={newEmployee.vacations}
                                placeholder='Enter vacations(number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">PaidToDate:</div>
                            <input
                                type="number"
                                name="pd"
                                value={newEmployee.pd}
                                placeholder='Enter PaidToDate(number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">PaidLastYear:</div>
                            <input
                                type="number"
                                name="py"
                                value={newEmployee.py}
                                placeholder='Enter PaidLastYear(number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Employment Code:</div>
                            <input
                                type="text"
                                name="ecode"
                                value={newEmployee.ecode}
                                placeholder='Enter employment code(540*)'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Worker Comp Code:</div>
                            <input
                                type="text"
                                name="workcode"
                                value={newEmployee.workcode}
                                placeholder='Enter workcode'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Days Of Work:</div>
                            <input
                                type="text"
                                name="number"
                                value={newEmployee.number}
                                placeholder='Enter workingday'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Hire Day:</div>
                            <input
                                type="date"
                                name="hireDate"
                                value={newEmployee.hireDate}
                                placeholder='Enter hireDate'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Terminate Day:</div>
                            <input
                                type="date"
                                name="terminationDate"
                                value={newEmployee.terminationDate}
                                placeholder='Enter terminationDate'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Ethnicity:</div>
                            <input
                                type="text"
                                name="ethnicity"
                                value={newEmployee.ethnicity}
                                placeholder='Enter ethnicity'
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Month Working:</div>
                            <input
                                type="number"
                                name="month"
                                value={newEmployee.month}
                                placeholder='Enter month(number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Total Number Vacation:</div>
                            <input
                                type="number"
                                name="totalnumber"
                                value={newEmployee.totalnumber}
                                placeholder='Enter totalnumber(number) '
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Gender:</div>
                            <select
                                name="gender"
                                value={newEmployee.gender}
                                onChange={handleChange}
                                className="modal-input"
                            >
                                <option value="">Select gender</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nu</option>
                            </select>
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Marital Status:</div>
                            <select
                                name="marital"
                                value={newEmployee.marital}
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
                                value={newEmployee.status}
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
                                value={newEmployee.benefitid}
                                onChange={handleChange}
                                className="modal-input"
                            >
                                <option value="">Select benefit id</option>
                                <option value="1">Wage</option>
                                <option value="2">Bonus</option>
                                <option value="3">Allowance</option>
                            </select>
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">ID Payrates:</div>
                            <select
                                name="prid"
                                value={newEmployee.prid}
                                onChange={handleChange}
                                className="modal-input"
                            >
                                <option value="">Select id payrate</option>
                                <option value="11">Wage</option>
                                <option value="22">Bonus</option>
                                <option value="33">Allowance</option>
                            </select>
                        </div>
                        <div className="modal-row">
                            <div className="modal-label">Employment Status:</div>
                            <select
                                name="employstatus"
                                value={newEmployee.employstatus}
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
                                value={newEmployee.depart}
                                onChange={handleChange}
                                className="modal-input"
                            >
                                <option value="">Select employstatus</option>
                                <option value="DEV">DEV</option>
                                <option value="BA">BA</option>
                                <option value="TESTER">TESTER</option>
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
                </div>
            )}
        </Modal>
    );
}

export default AddEmployeeModal;
