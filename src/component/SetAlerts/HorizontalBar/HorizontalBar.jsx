import React from 'react';
import './HorizontalBar.css'; // Import CSS file for styling

const HorizontalBar = ({ width, height }) => {
    const barStyle = {
        width: width,
        height: height
    };

    return (
        <div className="horizontal-bar" style={barStyle}></div>
    );
}

export default HorizontalBar;
