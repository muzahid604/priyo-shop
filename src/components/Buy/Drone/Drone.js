import React from 'react';

const Drone = (props) => {
    const { prices } = props.drone
    return (
        <div>
            <img src="https://unsplash.com/photos/XYrjl3j7smo" alt="" />
            <h2>Name:{prices}</h2>
        </div>
    );
};

export default Drone;