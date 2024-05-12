import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

function ToggleButton() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {/* Sử dụng icon cho trạng thái bật/tắt và chỉnh màu sắc */}
            <FontAwesomeIcon icon={isToggled ? faToggleOn : faToggleOff} style={{ color: isToggled ? 'green' : 'black', width: "100px", height: "30px", marginTop: "25px" }} />
        </div>
    );
}

export default ToggleButton;
