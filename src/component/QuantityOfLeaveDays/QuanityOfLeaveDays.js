import React, { useState } from 'react';
import './QuanityOfLeaveDays.css';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [shareholderStatus, setShareholderStatus] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');

    const handleSearch = () => {
        const filteredData = sampleData.filter(item => {
            return (
                item.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (shareholderStatus === '' || item.SharehoderStatus === shareholderStatus) &&
                (gender === '' || item.sex === gender) &&
                (ethnicity === '' || item.ethnic === ethnicity) &&
                (employmentStatus === '' || item.EmploymentStatus === employmentStatus)
            );
        });

        setSearchResult(filteredData);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
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
        <div className="container_page">
            <div className='Quantity'>
                <div className='loca-heading'>
                    <div className='heading'>
                        Quantity Of Leave Days
                    </div>
                    <div className='note-heading'>
                        *To calculate total income, please select the boxes below
                    </div>
                </div>
                <div className="search-container">
                    <input 
                        type="text"
                        placeholder="Name"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <select defaultValue="" onChange={handleShareholderStatusChange}>
                        <option value="">Shareholder Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="">Gender</option>
                        <option value="Nam">Nam</option>
                        <option value="Nu">Nu</option>
                    </select>
                    <select value={ethnicity} onChange={handleEthnicityChange}>
                        <option value="">Ethnicity</option>
                        <option value="Kinh">Kinh</option>
                        <option value="Tay">Tay</option>
                    </select>
                    <select defaultValue="" onChange={handleEmploymentStatusChange}>
                        <option value="">Employment Status</option>
                        <option value="Parttime">Parttime</option>
                        <option value="Fulltime">Fulltime</option>
                    </select>
                    <div className="search-button-container">
                        <button className='btn-search' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SharehoderStatus</th>
                            <th>Sex</th>
                            <th>Ethnic</th>
                            <th>Employment Status</th>
                            <th>Department</th>
                            <th>QOLD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.SharehoderStatus}</td>
                                <td>{item.sex}</td>
                                <td>{item.ethnic}</td>
                                <td>{item.EmploymentStatus}</td>
                                <td>{item.department}</td>
                                <td>{item.qold}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuanityOfLeaveDays;