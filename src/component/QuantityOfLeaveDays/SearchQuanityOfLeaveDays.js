import React, { useState } from 'react';
import './QuanityOfLeaveDays.css';

const SearchQuanityOfLeaveDays = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const searchData = {
            searchTerm,
            shareholderStatus,
            gender,
            ethnicity,
            employmentStatus
        };
        onSearch(searchData);
    };

    const handleShareholderStatusChange = (e) => {
        setShareholderStatus(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleEthnicityChange = (e) => {
        setEthnicity(e.target.value);
    };

    const handleEmploymentStatusChange = (e) => {
        setEmploymentStatus(e.target.value);
    };

    return (
        <div className='Quantity'>
            <div className='loca-heading'>
            <div className='heading'>
                    Quantity Of Leave Days
                </div>
                <div className='note-heading'>
                    *To calculate total income, please select the boxes below
                </div>
            </div>
            {/* <div className="search-section">            */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Name"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <select defaultValue="" onChange={handleShareholderStatusChange}>
                        <option value="" className="placeholder" /* disabled hidden*/ >Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="" >Gender</option>
                        <option value="Nam">Nam</option>
                        <option value="Nu">Nu</option>
                    </select>
                    <select value={ethnicity} onChange={handleEthnicityChange}>
                        <option value="" >Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Tay">Tay</option>
                    </select>
                    <select defaultValue="" onChange={handleEmploymentStatusChange}>
                        <option value="" >Employment Status</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default SearchQuanityOfLeaveDays;