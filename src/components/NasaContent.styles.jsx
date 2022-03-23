import styled from 'styled-components'
import wavePOTD from '../assets/waveP.svg'


export const NasaContentContainer = styled.section`
    width: 100%;
    height: 650px;
    padding: 5em 5em 2em 5em ;
    background-image: url(${wavePOTD}) ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:#f4fab4;
    display: flex;
    align-items:center;
    justify-content:space-between;
    @media screen and (max-width:600px){
        height:675px;
        padding: 2.5em 2em 2em 2em ;
        flex-direction:column;
        justify-content:space-evenly;
    }
`
export const NasaContentText = styled.div`
    width:55%;
    height:55%;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    @media screen and (max-width:600px){
        width:100%;
        height:50%;
    }

`
export const NasaContentImage = styled.div`
    position:relative;
    width: 40%;
    height: 75%;
    border-radius: 5px;
    img{
        max-width: 100%;
        object-fit:cover;
        /* height:80%; */
        align-self:center;
    }
    @media screen and (max-width:600px){
        width:90%;
        height: 35%;
        img{
            width:100%;
        }
    }
`