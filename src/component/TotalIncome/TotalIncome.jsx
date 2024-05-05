import React, { useState } from 'react';
// import axios from 'axios';
import './TotalIncome.css';
import SearchTotalIncome from './SearchToltalIncome';
import ShowTotalIncome from './ShowToltalIncome';


const TotalIncome = () => {
    const tempData = [
        { name: 'Steven Job', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'QA', totalIncome: '$1200' },
        { name: 'Alice Smith', shareholderStatus: 'Yes', gender: 'Female', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Marketing', totalIncome: '$2500' },
        { name: 'John Doe', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Fulltime', department: 'Sales', totalIncome: '$1800' },
        { name: 'Emily Johnson', shareholderStatus: 'Yes', gender: 'Female', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'HR', totalIncome: '$1400' },
        { name: 'David Lee', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Finance', totalIncome: '$3000' },
        { name: 'Sophia Nguyen', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Kinh', employmentStatus: 'Fulltime', department: 'IT', totalIncome: '$2200' },
        { name: 'Michael Tran', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'Support', totalIncome: '$1500' },
        { name: 'Linda Pham', shareholderStatus: 'Yes', gender: 'Female', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Engineering', totalIncome: '$2800' },
        { name: 'James Nguyen', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Fulltime', department: 'Operations', totalIncome: '$2000' },
        { name: 'Sarah Tran', shareholderStatus: 'Yes', gender: 'Female', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'Finance', totalIncome: '$1600' },
        { name: 'Daniel Ho', shareholderStatus: 'No', gender: 'Male', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Marketing', totalIncome: '$2600' },
        { name: 'Michelle Wong', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Han', employmentStatus: 'Partime', department: 'QA', totalIncome: '$1300' },
        { name: 'Chris Johnson', shareholderStatus: 'Yes', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Fulltime', department: 'Sales', totalIncome: '$2100' },
        { name: 'Jessica Lee', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Marketing', totalIncome: '$2900' },
        { name: 'Tom Nguyen', shareholderStatus: 'Yes', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'IT', totalIncome: '$1700' },
        { name: 'Jennifer Tran', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Kinh', employmentStatus: 'Fulltime', department: 'Finance', totalIncome: '$3200' },
        { name: 'Kevin Pham', shareholderStatus: 'Yes', gender: 'Male', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Engineering', totalIncome: '$2400' },
        { name: 'Amy Nguyen', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'Support', totalIncome: '$1800' },
        { name: 'Mark Smith', shareholderStatus: 'Yes', gender: 'Male', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'Operations', totalIncome: '$2700' },
        { name: 'Grace Kim', shareholderStatus: 'No', gender: 'Female', ethnicity: 'Han', employmentStatus: 'Fulltime', department: 'IT', totalIncome: '$1900' },
        { name: 'Patrick Wang', shareholderStatus: 'Yes', gender: 'Male', ethnicity: 'Kinh', employmentStatus: 'Partime', department: 'Marketing', totalIncome: '$1500' }
    ];

    const [searchResult, setSearchResult] = useState(tempData);

    const handleSearch = (searchData) => {
        const filteredData = tempData.filter(item => {
            return (
                (searchData.shareholderStatus === '' || item.shareholderStatus === searchData.shareholderStatus)
            );
        });

        setSearchResult(filteredData);
    };


    return (
        <div className="container_page">
            <div>
                <SearchTotalIncome onSearch={handleSearch} />
            </div>
            <ShowTotalIncome data={searchResult} />
        </div>
    );


};
export default TotalIncome;
