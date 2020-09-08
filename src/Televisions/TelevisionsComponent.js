import React from 'react';
import './TelevisionsComponent.css';

function TelevisionsComponent ({ id, image, name, displaysize, resolution, sound, price, hdmiports, usbports, color }) {
    return (
        <div className="a-row center">
            <div className="aligning">
                <div className="description tc">
                    <h1>{name}</h1>
                    <div className="f4">
                        <p>Display Size: {displaysize}</p>
                    </div>     
                </div>
                <div className="more-description tc center mt4">
                    <p>Display Size: {displaysize}</p>
                    <p>Resolution: {resolution}</p>
                    <p>Sound: {sound}</p>
                </div>
                <div className="center mt3">
                    <img src={image} alt="" width="200px"/>
                </div>
                <div className="more-description center tc mt4">
                    <p>HDMI Ports: {hdmiports}</p>
                    <p>USB Ports: {usbports}</p>
                    <p>Color: {color}</p>
                </div>
                <div className="price center tc b ml4 mt4">
                    <p className="f3">₹{price}</p>
                    <button className="grow">Add to cart</button>
                </div>
            </div>    
        </div>
    );
}
export default TelevisionsComponent;