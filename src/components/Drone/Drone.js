import React from 'react';
import './Drone.css';
const Drone = (props) => {
    const { prices, picture, name } = props.drone
    console.log(picture)
    return (
        <div className='drone'>
            <div className='drone-img'><img src={picture} alt="d-7" border="0" /></div>
            <div className='details'>
                <h2>{name}</h2>
                <h3>{prices}</h3>
            </div>
        </div>
    );
};

export default Drone;