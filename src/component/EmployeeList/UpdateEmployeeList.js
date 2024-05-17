import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import UpdateEmployeeModal from './UpdateEmployeeModal';

const UpdateEmployeeList = ({ id, isOpen, closeModal, setEmployees }) => {
    // const { id } = useParams();


    const [updateEmployee, setUpdateEmployee] = useState({
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
        terminationDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateEmployee({
            ...updateEmployee,
            [name]: value
        });
    };

    useEffect(() => {
        findById();
    }, [id]);

    const findById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/` + id);
            if (response.data) {
                setUpdateEmployee(response.data);
            }
        } catch (e) {
            console.error('Error fetching employee:', e);
            toast.error('Error fetching employee details.');
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/update/` + id, updateEmployee);
            const response = await axios.get('http://localhost:8080/list');
            setEmployees(response.data);

            toast.success('Employee updated successfully!');
            closeModal();
        } catch (error) {
            console.error('Error updating employee:', error);
            toast.error('Failed to update employee.');
        }
    };

    return (
        <UpdateEmployeeModal
            isOpen={isOpen}
            closeModal={closeModal}
            updateEmployee={updateEmployee}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
        />
    );
}

export default UpdateEmployeeList;
