import styled from "styled-components";
import wave from "../assets/waveNav.svg";

export const ContainerHeader = styled.section`
    margin-top:-1;
    width: 100%;
    height: 500px;
    padding: 0 5rem;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    justify-content:space-between;
    align-items:center;
    img{
        height: 100%;
    }

    @media screen and (max-width:600px){
    padding: 0 2rem;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    }
`
export const HeaderImage = styled.div`
    position:relative;
    width: 35%;
    height: 75%;
    margin-right:5em;
    @media screen and (max-width:600px){
        height: 35%;
        margin-right:0;
    }
`
