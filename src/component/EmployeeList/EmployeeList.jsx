import React, { useState } from 'react';
import "./EmployeeList.css";
import SearchEmployeeList from './SearchEmployeeList';
import ShowEmployeeList from './ShowEmployeeList';

const EmployeeList = () => {
    const sampleData = [
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
        { Name: 'Gao Do', id: '001', Gender: 'Nam', ethnic: 'Kinh', department: 'QA', VacationDay: '10', Benefit: 10 },
    ];
    const [searchResult, setSearchResult] = useState(sampleData);

    const handleSearch = (searchData) => {
        const filteredData = sampleData.filter(item => {
            return (
                (searchData.name === '' || item.Name === searchData.name)
            );
        });
        setSearchResult(filteredData);
    };

    return (
        <div className="container_page">
            <div>
                <SearchEmployeeList onSearch={handleSearch} />
            </div>
            <ShowEmployeeList data={searchResult} />
        </div>
    );
};

export default EmployeeList;