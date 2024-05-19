import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AddEmployeeModal from './AddEmployeeModal';


function AddEmployeeList({ isOpen, closeModal, setEmployees }) {
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDay: '',
        ssNumber: '',
        driver: '',
        address: '',
        address2: '',
        country: '',
        zip: '',
        gender: '',
        phoneNumber: '',
        email: '',
        marital: '',
        ethnicity: '',
        status: '',
        benefitid: '',
        employstatus: '',
        ecode: '',
        workcode: '',
        number: '',
        prname: '',
        vacations: '',
        prid: '',
        pd: '',
        py: '',
        depart: '',
        hireDate: '',
        terminationDate: '',
        month: '',
        totalnumber: ''
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
            // Kiểm tra xem có bất kỳ trường nào không được nhập
            const emptyFields = Object.entries(newEmployee).filter(([key, value]) => {
                return value === '';
            });

            if (emptyFields.length > 0) {
                const fieldNames = emptyFields.map(([key]) => key).join(', ');
                toast.error(`Please fill out all information in the remaining fields below: ${fieldNames} !`);
                return;
            }


            // Thực hiện thêm nhân viên
            await axios.post('http://localhost:8080/create', newEmployee);
            const response = await axios.get('http://localhost:8080/list');
            setEmployees(response.data);

            toast.success('Add new employee successfully !');
            closeModal();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <AddEmployeeModal
            isOpen={isOpen}
            closeModal={closeModal}
            newEmployee={newEmployee}
            handleChange={handleChange}
            handleAdd={handleAdd}
        />
    );
}

export default AddEmployeeList;
