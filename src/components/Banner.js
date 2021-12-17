import React, { useEffect, useState } from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Banner.css'


const Banner = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    console.log(activePunk);

    return (
        <div className="banner">
            <div className="banner__content">
                <div className="banner__highlight">
                    <div className="banner__container">
                        <img
                            className='banner__image'
                            src={activePunk.image_original_url}
                            alt=""
                        />
                    </div>
                </div>
                <div className="banner__details" style={{ color: '#fff'}}>
                    <div className="banner__title">
                        {activePunk.name}
                        <span className='banner__id'>.#{activePunk.token_id}</span>
                    </div>
                
                <div className="banner__ownerDetails">
                    <div className='banner__ownerImage'>
                        <img src={activePunk.owner.profile_img_url} alt="" />

                    </div>

                    <div className="banner__social">
                        <div className="banner__socialImage">
                            <div className="banner__ownerAdress">
                                {activePunk.owner.address}
                            </div>
                            <div className="banner__ownerName">@{activePunk.owner.user.username}</div>
                        </div>
                        <div className='banner__ownerLink'>
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className='banner__ownerLink'>
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className='banner__ownerLink'>
                            <img src={moreIcon} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
