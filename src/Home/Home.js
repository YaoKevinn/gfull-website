import React from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid'
import contentImg from "../images/contentBox.png"
import freeShippingImg from "../images/freeShip.png"

function Home() {
    return (
        <div className="home">
            <div className="home__headContainer">
                <Grid container justify="center">
                    <Grid item sm={12} md={8}>
                        <div className="home__contentBox">
                            <div className="home__contentBoxText">
                                <img className="home__freeShippongImg" src={freeShippingImg} alt="freeShipping" draggable="false"/>
                                <div className="home__contentBoxP">
                                    <p># 首都市中心包括Once滿$3000免運</p>
                                    <p># 首都Belgrano區滿$4000免運</p>
                                    <p># 首都城邊滿$5000免運</p>
                                    <p># <strong>城外</strong>運費另計</p>
                                </div>
                            </div>
                            <p className="home__contextBoxText2">** 週二、週五集中送貨 **</p>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={4} className="home__imgSection">
                        <img src={contentImg} alt="contentBox_Img" className="home__contentBoxImage" draggable="false" />
                    </Grid>
                </Grid>
                </div>
            </div>
    )
}

export default Home
