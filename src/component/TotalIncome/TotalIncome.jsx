import React, { useState } from 'react';
// import axios from 'axios';
import SearchTotalIncome from './SearchToltalIncome';
import ShowTotalIncome from './ShowToltalIncome';


const TotalIncome = () =>{
    const TempData = [
        {Name: 'Steven Job', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$1200' },
        {Name: 'Bill Gate', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$3200' },
        {Name: 'Dew Nguyen', Sex: 'Male', Working:'Fulltime', Department: 'QA', TotalIncome:'$7200' },
        {Name: 'Jeff Bezos', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$5200' },
        {Name: 'Mark Zuckerberg', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$4200' },
        {Name: 'Elon Musk', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$6200' },
        {Name: 'Warren Buffett', Sex: 'Male', Working:'Partime', Department: 'QA', TotalIncome:'$6200' },

    ];
    const [searchResult, setSearchResult] = useState(TempData);
    const handleSearch = (searchData) => {
        const filteredData = TempData.filter(item => {
            return (
                (searchData.shareholderStatus === '' || item.SharehoderStatus === searchData.shareholderStatus)
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
export default TotalIncome ;
