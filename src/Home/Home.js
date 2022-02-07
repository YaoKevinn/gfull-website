import React from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid'
import contentImg from "../images/hero.png"
// import freeShippingImg from "../images/freeShip.png"
import bgImg from '../images/bg2.png'

function Home() {
    return (
        <div className="home">
            <div className="home__headContainer">
                <div className="hero-row">
                    <div className="left">
                        <h1 className="hero-title"><b>禾富食品批发公司</b></h1>
                        <div className="hero-description-section">
                            <p># 首都内满$9000免运</p>
                            <p># 首都城边满$12000免运</p>
                            <p># <strong>城外</strong>运费另计</p>
                        </div>
                    </div>
                    <div className="home__imgSection">
                        <img src={contentImg} alt="contentBox_Img" className="home__contentBoxImage" draggable="false" />
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Home
