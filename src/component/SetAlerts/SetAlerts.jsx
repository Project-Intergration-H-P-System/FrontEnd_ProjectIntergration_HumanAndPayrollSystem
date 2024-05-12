import React from "react";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import "./SetAlerts.css";
import ToggleButton from "./ToggleButton/ToggleButton";


const SetAlerts = () => {
    return (
        <div className="SetAlert-component">
            <div className='loca-heading'>
                <div className='heading'>
                    Set Alerts
                </div>
                <div className='note-heading'>
                    Reminding user of events
                </div>
            </div>
            <div className="SetAlert-Module">
                <div className="padding-SetAlert">
                    <div className="head-SetAlert">Employee</div>
                    <HorizontalBar width="90%" height="3px" />
                    <div className="alert-row">
                        <div className="test-SetAlert">Calculate days since employee hiring anniversary</div>
                        <ToggleButton />
                    </div>
                    <div className="alert-row">
                        <div className="test-SetAlert">All employees with birthdays in the current month</div>
                        <ToggleButton />
                    </div>
                    <div className="head-SetAlert">Quantity of leave days</div>
                    <HorizontalBar width="90%" height="2px" />
                    <div className="alert-row">
                        <div className="test-SetAlert">Accumulated Exceedance of vacation days by employee</div>
                        <ToggleButton />
                    </div>
                    <div className="head-SetAlert">Employee benefits</div>
                    <HorizontalBar width="90%" height="2px" />
                    <div className="alert-row">
                        <div className="test-SetAlert">Employee benefits plan change impacting their salary</div>
                        <ToggleButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetAlerts;