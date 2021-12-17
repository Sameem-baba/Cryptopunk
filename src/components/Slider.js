import React from 'react';
import './Slider.css';
import weth from '../assets/weth.png';
import Card from './Card';

const Slider = ({ punkListData, setSelectedPunkData }) => {

    return (
        <div className='slider'>
            {punkListData?.map((punk) => (
                <div onClick={() => setSelectedPunkData(punk.token_id)}>
                    <Card
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default Slider
