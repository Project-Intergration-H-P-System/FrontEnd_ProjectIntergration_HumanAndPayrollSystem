import React, { useState } from 'react';
import './TotalIncome.css';

const SearchTotalIncome = ({ onSearch }) => {
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [department, setDepartment] = useState('');

    const handleSearch = () => {
        const searchData = {
            shareholderStatus,
            gender,
            ethnicity,
            employmentStatus,
            department
        };
        onSearch(searchData);
    };

    return (
        <div className='Quantity'>
            <div className='loca-heading'>
                <div className='heading'>Total income</div>
                <div className='note-heading'>*To calculate total income, please select the boxes below</div>
            </div>
            <div className="search-section">
                <div className="search-container">
                    <select value={shareholderStatus} onChange={(e) => setShareholderStatus(e.target.value)}>
                        <option value="">Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                        <option value="">Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Han">Han</option>
                    </select>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)}>
                        <option value="">Employment Status</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
                    </select>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="">Department</option>
                        <option value="QA">QA</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="IT">IT</option>
                        <option value="Support">Support</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Operations">Operations</option>
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
