import React, { useState } from 'react';
import "./EmployeeBenefits.css";
import SearchEmployeeBenefits from './SearchEmployeeBenefits';
import ShowEmployeeBenefits from './ShowEmployeeBenefits';

const EmployeeBenefits = () => {
    const sampleData = [
        { Name: 'Gao Do', SharehoderStatus: 'Yes', Gender: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'QA', Benefit: 10 },
        { Name: 'Gao Trang', SharehoderStatus: 'No', Gender: 'Nu', ethnic: 'Tay', EmploymentStatus: 'Parttime', department: 'QA', Benefit: 20 },
        { Name: 'Kamenrider Decade', SharehoderStatus: 'Yes', Gender: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'HR', Benefit: 50 },
        { Name: 'Kamenrider W', SharehoderStatus: 'Yes', Gender: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Parttime', department: 'PR', Benefit: 30 },
        { Name: 'Sieu Nhan Hai Tac Vang', SharehoderStatus: 'No', Gender: 'Nu', ethnic: 'Tay', EmploymentStatus: 'Parttime', department: 'QA', Benefit: 40 },
        { Name: 'Goku', SharehoderStatus: 'Yes', Gender: 'Nam', ethnic: 'Kinh', EmploymentStatus: 'Fulltime', department: 'KD', Benefit: 20 },
    ];
    const [searchResult, setSearchResult] = useState(sampleData);

    const handleSearch = (searchData) => {
        const filteredData = sampleData.filter(item => {
            return (
                (searchData.shareholderStatus === '' || item.SharehoderStatus === searchData.shareholderStatus)
            );
        });

        setSearchResult(filteredData);
    };

    return (
        <div className="container_page">
            <div>
                <SearchEmployeeBenefits onSearch={handleSearch} />
            </div>
            <ShowEmployeeBenefits data={searchResult} />
        </div>
    );
};

export default EmployeeBenefits;