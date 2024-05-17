import React, { useState } from "react";
import "./SlideBar.css";
import Logo from "../../assets/image/logo.png";
import { SlideBarData } from "./data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import EmployeeBenefits from "../EmployeeBenefits/EmployeeBenefits";
import MainPage from "../../page/MainPage/MainPage";
import EmployeeList from "../EmployeeList/EmployeeList";
import QuanityOfLeaveDays from "../QuantityOfLeaveDays/QuanityOfLeaveDays";
import TotalIncome from "../TotalIncome/TotalIncome";
import DashBoard from "../DashBoard/DashBoard";



const SlideBar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const [totalEmployees, setTotalEmployees] = useState(0);
    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    };

    const handleMenuClick = (index) => {
        setSelected(index);
    };

    return (
        <>
            <div>
                <div>
                    <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
                        <UilBars />
                    </div>
                    <motion.div className='sidebar'
                        variants={sidebarVariants}
                        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
                    >
                        {/* logo */}
                        <div>
                            <img src={Logo} alt="logo" width="250" height="200" style={{ marginTop: "-100px", marginBottom: "-100px" }} />
                        </div>

                        <div className="menu">
                            {SlideBarData.map((item, index) => {
                                return (
                                    <div
                                        className={selected === index ? "menuItem active" : "menuItem"}
                                        key={index}
                                        onClick={() => handleMenuClick(index)}
                                    >
                                        <item.icon />
                                        <span>{item.heading}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <div>
                    {selected === 0 && <DashBoard setSelected={setSelected} totalEmployees={totalEmployees} />}
                    {selected === 1 && <EmployeeList setSelected={setSelected} />}
                    {selected === 2 && <TotalIncome />}
                    {selected === 3 && <QuanityOfLeaveDays />}
                    {selected === 4 && <EmployeeBenefits />}
                </div>
            </div>
        </>
    );
};

export default SlideBar;
