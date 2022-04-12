import styled from "styled-components";
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import BabyPanda from '../../font/BabyPanda.ttf'
import bg from '../../image/pandatreeroadmap.PNG'

export const RoadmapContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;
    overflow-x: scroll;
    padding: 5vh 0vh;
    overflow-y: hidden;

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }

    @font-face {
        font-family: orbitron;
        src: url(${BabyPanda});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const RoadmapBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;

   
`

export const RoadmapContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgBg = styled.div`
 
    position: absolute;

    right: 0;
    bottom: 0;
    left: 0;
    width: 150vh;
    height: 100vh;
    overflow: hidden;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 0% 100%;
    
    @media screen and (max-width:1024px){
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: 0% 100%;
    }

`

export const RoadmapRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RoadmapColumn = styled.div`
    padding: 0vh;
`

export const FlexboxRoadmapContainer = styled.div`
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    padding: 0vh;
    left: 0vh;

`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    
`

export const ColumnContent2 = styled.div`
    display: flex;
    align-items: center;
    padding: 0vh;
    width: 70vw;


    @media screen and (max-width:468px){
        width: 30vw;
    }
`

export const RoadmapH1 = styled.h1`
    font-size: 4vw;
    color: #fff;
    font-family: panda;
    letter-spacing: 0.3vh;
    text-shadow: 2px 2px #000;

    @media screen and (max-width:1024px){
        font-size: 6vh;
    }
  
`


export const Img = styled.img`
    position: relative;
    height: 60vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-self: center;
`