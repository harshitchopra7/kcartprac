import React from 'react';
import './MobilesComponents.css';

function MobilesComponent ({ id, image, name, ram, storage, price, simtype, displaysize, operatingsystem, proccessortype, frontcamera, primarycamera, connectivity, color }) {
    return (
        <div className="a-row center">
            <div className="aligning">
                <div className="description tc">
                    <h1>{name}</h1>
                    <div className="f4">
                        <p>Ram {ram}</p>
                        <p>Storage {storage}</p> 
                    </div>     
                </div>
                <div className="more-description center tc mt4">
                    <p>Sim Type: {simtype}</p>
                    <p>Display Size: {displaysize}</p>
                    <p>Operating System: {operatingsystem}</p>
                    <p>Proccessor Type: {proccessortype}</p>
                </div>
                <div className="center">
                    <img src={image} alt="" />
                </div>
                <div className="more-description center tc mt4">
                    <p>Front Camera: {frontcamera}</p>
                    <p>Primary Camera: {primarycamera}</p>
                    <p>Connectivity: {connectivity}</p>
                    <p>Color: {color}</p>
                </div>
                <div className="price center tc b ml4 mt5">
                    <p className="f3">₹{price}</p>
                    <button className="grow">Add to cart</button>
                </div>
            </div>    
        </div>
    );
}
export default MobilesComponent;