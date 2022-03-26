import React, { useEffect, useState } from 'react';
import './Buy.css'
import Drone from '../Drone/Drone';
import Cart from '../Cart/Cart';

const Buy = () => {

    const [drones, setDrone] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('dronedata.json')
            .then(res => res.json())
            .then(data => setDrone(data))
    }, [])
    const removeCart = () => {
        setCarts([])
    }

    const handleAddBtn = (drone) => {
        const addToSummary = [...carts, drone];
        setCarts(addToSummary)
    }

    return (
        <div className='production' >
            <div className="drone-container">
                {
                    drones.map(drone =>
                        <Drone
                            key={drone.id}
                            handleAddBtn={handleAddBtn}
                            drone={drone}
                        ></Drone>)
                }
            </div>
            <div className="cart-container">
                <h1>Selected for Buy</h1>
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                <button className='btn-cart-select'
                >Select Random Drone</button>
                <button className='btn-cart-select'
                    onClick={removeCart}
                >Choose Again</button>
            </div>
        </div >
    );
};

export default Buy;