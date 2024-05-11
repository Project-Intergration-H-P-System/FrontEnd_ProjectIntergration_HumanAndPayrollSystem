// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EmployeeBenefits.css';

// function EmployeeTable() {
//     const [employees, setEmployees] = useState([]);
//     const [filteredEmployees, setFilteredEmployees] = useState([]);
//     const [shareholderStatusFilter, setShareholderStatusFilter] = useState('');

//     useEffect(() => {
//         fetchEmployees();
//     }, []);

//     const fetchEmployees = async () => {
//         try {
//             const response = await axios.get('API_ENDPOINT_URL');
//             setEmployees(response.data);
//             setFilteredEmployees(response.data);
//         } catch (error) {
//             console.error('Error fetching employees:', error);
//         }
//     };

//     // Hàm xử lý khi thay đổi Shareholder Status combobox
//     const handleShareholderStatusChange = (event) => {
//         const status = event.target.value;
//         setShareholderStatusFilter(status);

//         // Lọc nhân viên dựa trên Shareholder Status
//         if (status !== '') {
//             const filtered = employees.filter(employee => employee.shareholderStatus === status);
//             setFilteredEmployees(filtered);
//         } else {
//             setFilteredEmployees(employees);
//         }
//     };

//     // Hàm xử lý khi nhấn nút Search
//     const handleSearch = () => {
//         // Thực hiện tìm kiếm dựa trên các tiêu chí khác nếu cần
//         // Ví dụ:
//         // const filtered = employees.filter(employee => employee.someProperty === someValue);
//         // setFilteredEmployees(filtered);
//     };

//     return (
//         <div >
//             {/* Employee Benefits Table */}
//             <div className="employee-benefits">
//                 <h2 className="table-title">Employee Benefits</h2>
//                 <div className="filter-container">
//                     <label htmlFor="shareholderStatus">Shareholder Status: </label>
//                     <select id="shareholderStatus" value={shareholderStatusFilter} onChange={handleShareholderStatusChange}>
//                         <option value="True">True</option>
//                         <option value="False">False</option>
//                     </select>
//                     <button onClick={handleSearch}>Search</button>
//                 </div>
//                 <table className="employee-table">
//                     <thead>
//                         <tr>
//                             <th className="column-header">Name</th>
//                             <th className="column-header">Shareholder Status</th>
//                             <th className="column-header">Gender</th>
//                             <th className="column-header">Ethnicity</th>
//                             <th className="column-header">Employment Status</th>
//                             <th className="column-header">Department</th>
//                             <th className="column-header">Benefit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredEmployees.map((employee, index) => (
//                             <tr key={index} className="table-row">
//                                 <td className="table-cell">{`${employee.firstName} ${employee.lastName}`}</td>
//                                 <td className="table-cell">{employee.shareholderStatus}</td>
//                                 <td className="table-cell">{employee.gender}</td>
//                                 <td className="table-cell">{employee.ethnicity}</td>
//                                 <td className="table-cell">{employee.employmentStatus}</td>
//                                 <td className="table-cell">{employee.department}</td>
//                                 <td className="table-cell">{`${employee.benefit.deductible} * ${employee.benefit.percentageCoPay}`}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
// export default EmployeeTable;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EmployeeBenefits.css';

// function EmployeeTable() {
//     const [employees, setEmployees] = useState([]);
//     const [filteredEmployees, setFilteredEmployees] = useState([]);
//     const [shareholderStatusFilter, setShareholderStatusFilter] = useState('');
//     const [shareholderStatuses, setShareholderStatuses] = useState([]);

//     useEffect(() => {
//         fetchEmployees();
//         fetchEmployeeStatuses();
//     }, []);

//     const fetchEmployees = async () => {
//         try {
//             const response = await axios.get('API_ENDPOINT_URL');
//             setEmployees(response.data);
//             setFilteredEmployees(response.data);
//         } catch (error) {
//             console.error('Error fetching employees:', error);
//         }
//     };

//     const fetchEmployeeStatuses = async () => {
//         try {
//             const response = await axios.get('API_ENDPOINT_URL_FOR_STATUS');
//             setShareholderStatuses(response.data);
//         } catch (error) {
//             console.error('Error fetching employee statuses:', error);
//         }
//     };

//     const handleShareholderStatusChange = (event) => {
//         const status = event.target.value;
//         setShareholderStatusFilter(status);

//         if (status !== '') {
//             const filtered = employees.filter(employee => employee.shareholderStatus === status);
//             setFilteredEmployees(filtered);
//         } else {
//             setFilteredEmployees(employees);
//         }
//     };

//     const handleSearch = () => {
//         // Thực hiện tìm kiếm dựa trên các tiêu chí khác nếu cần
//         // Ví dụ:
//         // const filtered = employees.filter(employee => employee.someProperty === someValue);
//         // setFilteredEmployees(filtered);
//     };

//     return (
//         <div>
//             {/* Employee Benefits Table */}
//             <div className="employee-benefits">
//                 <h2 className="table-title">Employee Benefits</h2>
//                 <div className="filter-container">
//                     <label htmlFor="shareholderStatus">Shareholder Status: </label>
//                     <select id="shareholderStatus" value={shareholderStatusFilter} onChange={handleShareholderStatusChange}>
//                         <option value="">All</option>
//                         {shareholderStatuses.map((status, index) => (
//                             <option key={index} value={status}>{status}</option>
//                         ))}
//                     </select>
//                     <button onClick={handleSearch}>Search</button>
//                 </div>
//                 <table className="employee-table">
//                     <thead>
//                         <tr>
//                             <th className="column-header">Name</th>
//                             <th className="column-header">Shareholder Status</th>
//                             <th className="column-header">Gender</th>
//                             <th className="column-header">Ethnicity</th>
//                             <th className="column-header">Employment Status</th>
//                             <th className="column-header">Department</th>
//                             <th className="column-header">Benefit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredEmployees.map((employee, index) => (
//                             <tr key={index} className="table-row">
//                                 <td className="table-cell">{`${employee.firstName} ${employee.lastName}`}</td>
//                                 <td className="table-cell">{employee.shareholderStatus}</td>
//                                 <td className="table-cell">{employee.gender}</td>
//                                 <td className="table-cell">{employee.ethnicity}</td>
//                                 <td className="table-cell">{employee.employmentStatus}</td>
//                                 <td className="table-cell">{employee.department}</td>
//                                 <td className="table-cell">{`${employee.benefit.deductible} * ${employee.benefit.percentageCoPay}`}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
// export default EmployeeTable;



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