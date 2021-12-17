import React from 'react';
import weth from '../assets/weth.png';
import './Card.css'
const Card = ({id, name, traits, image}) => {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <div className="details">
                <div className="card__name">
                    {name} <div className="id"> .#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src={weth} className="wethimage" alt="" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
