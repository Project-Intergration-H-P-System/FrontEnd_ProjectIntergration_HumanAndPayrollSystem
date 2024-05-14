import React from 'react'

const Triangle = ({ size, location, color }) => {

    const triangleCss = {
        position: 'absolute',
        width: 0,
        height: 0,
        left: location,
        transform: 'translateX(-50%)',
        borderLeft: `${size} solid transparent`,
        borderRight: `${size} solid transparent`,
        borderBottom: `${size} solid ${color}`,
        zIndex: '1',
    }
    return (
        <div className=' relative w-full' style={{ height: size }}>
            <div style={triangleCss} ></div>
        </div>
    )
}

export default Triangle