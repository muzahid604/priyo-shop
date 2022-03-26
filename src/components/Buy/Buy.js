import React, { useEffect, useState } from 'react';
import './Buy.css'
import Drone from '../Drone/Drone';
const Buy = () => {
    const [drones, setDrone] = useState([]);
    useEffect(() => {
        fetch('dronedata.json')
            .then(res => res.json())
            .then(data => setDrone(data))
    }, [])
    return (
        <div className='production' >
            <div className="drone-container">
                {
                    drones.map(drone =>
                        <Drone
                            key={drone.id}
                            drone={drone}
                        ></Drone>)
                }
            </div>
            <div className="cart-container">
                <h2>asdlk</h2>
            </div>
        </div>
    );
};

export default Buy;