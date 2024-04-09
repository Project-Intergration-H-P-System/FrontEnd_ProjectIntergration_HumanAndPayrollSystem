import React, { useState } from 'react';
import './TotalIncome.css';


const SearchTotalIncome = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [otpSex, setSex] = useState('');
    const [otpDepartment, setDepartment] = useState('');
    const [otpWorking, setWorking] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const searchData = {
            searchTerm,
            otpSex,
            otpDepartment,
            otpWorking
        };
        onSearch(searchData);
    };


    const handleSexChange = (e) => {
        setSex(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleWorkingChange = (e) => {
        setWorking(e.target.value);
    };

    return (
        <div className='Quantity'>
            <div className='loca-heading'>
            <div className='heading'>
                Total income
                </div>
                <div className='note-heading'>
                *To calculate total income, please select the boxes below
                </div>
            </div>
            <div className="search-section">
            
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Name"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <select value={otpSex} onChange={handleSexChange}>
                        <option value="" >Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select value={otpDepartment} onChange={handleDepartmentChange}>
                        <option value="" >Department</option>
                        <option value="QA">QA</option>
                    </select>
                    <select value={otpWorking} onChange={handleWorkingChange}>
                        <option value="" >Working</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchTotalIncome;