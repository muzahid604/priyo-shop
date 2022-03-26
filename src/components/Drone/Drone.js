import React from 'react';
import './Drone.css';
const Drone = ({ handleAddBtn, drone }) => {
    // const { handleAddBtn, drone } = props;
    const { prices, picture, name } = drone;

    return (
        <div className='drone'>
            <div className='drone-img'><img src={picture} alt="d-7" border="0" /></div>
            <div className='details'>
                <h2>{name}</h2>
                <h3>{prices}</h3>
            </div>
            <button onClick={() => handleAddBtn(drone)} className='btn-cart'>
                <h4>Add To Cart</h4>
            </button>
        </div>
    );
};

export default Drone;