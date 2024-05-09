import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './EmployeeList.css';

function SearchEmployeeList({ handleChange }) {
    const [name, setName] = useState('');

    const handleChangeName = (value) => {
        setName(value);
        handleChange(value);
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
                    onChange={(e) => handleChangeName(e.target.value)}

                />
            </div>
        </div>

    );
}

export default SearchEmployeeList;
