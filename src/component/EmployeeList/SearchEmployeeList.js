import React, { useState } from 'react';
import './EmployeeList.css';
import { FaSearch } from "react-icons/fa";

const SearchEmployeeBenefits = ({ onSearch }) => {

    const [name, setName] = useState('');

    const handleSearch = () => {
        const searchData = {
            name,
        };
        onSearch(searchData);
    };
    
    const handleChange = (value) => {
        setName(value);
        handleSearch(value)
      };

    return (
        <div className='heading-page'>
             <div className='loca-heading'>
                <div className='heading'>
                    Employee List
                </div>
            </div>
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input
                    placeholder="Type to search name..."
                    value={name}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchEmployeeBenefits;