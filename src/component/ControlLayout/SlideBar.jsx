import React, { useState, useEffect } from "react";
import "./SlideBar.css";
import Logo from "../../assets/image/logo.png";
import { SlideBarData } from "./data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import TotalIncome from "../TotalIncome/TotalIncome";
import EmployeeBenefits from "../EmployeeBenefits/EmployeeBenefits";
const SlideBar = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)
    return (
        <>
            <div>
                <div >
                    <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                        <UilBars />
                    </div>
                    <motion.div className='sidebar'
                        variants={sidebarVariants}
                        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
                    >
                        {/* logo */}
                        <div >
                            <img src={Logo} alt="logo" width="250" height="200" style={{ marginTop: "-100px", marginBottom: "-100px" }} />
                        </div>

                        <div className="menu">
                            {SlideBarData.map((item, index) => {
                                return (
                                    <div
                                        className={selected === index ? "menuItem active" : "menuItem"}
                                        key={index}
                                        onClick={() => setSelected(index)}
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
                    {selected === 2 && <TotalIncome />}''
                    {selected === 4 && <EmployeeBenefits />}
                    
                </div>
            </div>
        </>
        
    );
};

export default SlideBar;
