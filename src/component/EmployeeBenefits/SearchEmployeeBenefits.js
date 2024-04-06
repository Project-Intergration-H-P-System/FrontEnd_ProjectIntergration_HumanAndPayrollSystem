import React, { useState } from 'react';
import './EmployeeBenefits.css';

const SearchEmployeeBenefits = ({ onSearch }) => {

    const [shareholderStatus, setShareholderStatus] = useState('');

    const handleSearch = () => {
        const searchData = {
            shareholderStatus,
        };
        onSearch(searchData);
    };

    const handleShareholderStatusChange = (e) => {
        setShareholderStatus(e.target.value);
    };

    return (
        <div className='Quantity'>
            <div className='loca-heading'>
                <div className='heading'>
                    Benefits
                </div>
                <div className='note-heading'>
                    *To calculate the benefits of each employee
                </div>
            </div>
            <div className="search-section">

                <div className="search-container">
                    <select defaultValue="" onChange={handleShareholderStatusChange}>
                        <option value="" className="placeholder" /* disabled hidden*/ >Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchEmployeeBenefits;