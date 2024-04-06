import React, { useState } from 'react';
import "../../component/QuantityOfLeaveDays/QuanityOfLeaveDays.css";
import SearchQuanityOfLeaveDays from './SearchQuanityOfLeaveDays';
import ShowQuanityOfLeaveDays from './ShowQuanityOfLeaveDays';
const QuanityOfLeaveDays = () => {
    const sampleData = [
        { Name: 'Gao Do', SharehoderStatus: 'Yes', sex: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'QA', qold: 10 },
        { Name: 'Gao Trang', SharehoderStatus: 'No', sex: 'Nu', ethnic: 'Tay', EmploymentStatus: 'Parttime', department: 'QA', qold: 20 },
        { Name: 'Kamenrider Decade', SharehoderStatus: 'Yes', sex: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'HR', qold: 50 },
        { Name: 'Kamenrider W', SharehoderStatus: 'Yes', sex: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Parttime', department: 'PR', qold: 30 },
        { Name: 'Sieu Nhan Hai Tac Vang', SharehoderStatus: 'No', sex: 'Nu', ethnic: 'Tay', EmploymentStatus: 'Parttime', department: 'QA', qold: 40 },
        { Name: 'Goku', SharehoderStatus: 'Yes', sex: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'KD', qold: 20 },
    ];
    const [searchResult, setSearchResult] = useState(sampleData);

    const handleSearch = (searchData) => {
        const filteredData = sampleData.filter(item => {
            return (
                item.Name.toLowerCase().includes(searchData.searchTerm.toLowerCase()) &&
                (searchData.shareholderStatus === '' || item.SharehoderStatus === searchData.shareholderStatus) &&
                (searchData.gender === '' || item.sex === searchData.gender) &&
                (searchData.ethnicity === '' || item.ethnic === searchData.ethnicity) &&
                (searchData.eSmploymenttatus === '' || item.EmploymentStatus === searchData.employmentStatus)
            );
        });

        setSearchResult(filteredData);
    };

    return (
        <div className="container_page">
            <div>
                <SearchQuanityOfLeaveDays onSearch={handleSearch} />
            </div>
            <ShowQuanityOfLeaveDays data={searchResult} />
        </div>
    );
};

export default QuanityOfLeaveDays;