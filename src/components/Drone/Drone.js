import React from 'react';
import './Drone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Drone = ({ handleAddBtn, drone }) => {
    // const { handleAddBtn, drone } = props;
    const { prices, picture, name } = drone;

    return (
        <div className='drone'>
            <div className='drone-img'><img src={picture} alt="drone-img" border="0" /></div>
            <div className='details'>
                <h2>{name}</h2>
                <h3>{prices}</h3>
            </div>
            <button onClick={() => handleAddBtn(drone)} className='btn-cart'>
                <div className='cart-btn'>
                    <h4>Add To Cart</h4>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    );
};

export default Drone;