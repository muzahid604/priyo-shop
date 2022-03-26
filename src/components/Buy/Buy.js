import React, { useEffect, useState } from 'react';
import './Buy.css'
import Drone from '../Drone/Drone';
import Cart from '../Cart/Cart';
import Random from '../Random/Random';
const Buy = () => {

    const [drones, setDrone] = useState([]);
    const [carts, setCarts] = useState([]);
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch('dronedata.json')
            .then(res => res.json())
            .then(data => setDrone(data))
    }, [])
    const removeCart = () => {
        setCarts([])
    }
    const randomItem = (product) => {
        const randomCart = [...random, product];
        setRandom(randomCart[Math.floor(Math.random() * randomCart.length)])
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
                    onClick={randomItem}
                >Select Random Drone<Random random={random}></Random></button>
                <button className='btn-cart-select'
                    onClick={removeCart}
                >Choose Again</button>
            </div>
        </div >
    );
};

export default Buy;