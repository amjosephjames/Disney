import React from 'react'
import Slider from '../Slide/Slider'
import styled from 'styled-components'
import Viewers from '../overView/Viewers'
import Recomend from '../recomened/Recomend'
import Header from '../Header/Header'

const Home = ()=>{
    return(
        <Container>
            <Header />
            <Slider />
            <Viewers />
            <Recomend />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100%;
min-height: 100vh;
width: 100%;
position: relative;
/* z-index: 1; */

/* overflow: hidden; */
:before{
    content:"";
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/Assets/images/home-background.png');
    background-repeat: no-repeat;
}
`