import React from 'react'
import {H1,  P} from './global.styles'
import { NasaContentContainer, NasaContentText, NasaContentImage} from './NasaContent.styles'
import image from '../assets/saturn.svg'


/**
 * 
 * @returns {JSX.Element} NasaContent component with information about the NASA 
 */
function NasaContent() {
  return (<>
    <NasaContentContainer>
        <NasaContentImage>
            <img 
            src={image} alt='saturn_image'  
            />
        </NasaContentImage>
        <NasaContentText>
            <H1>
                About NASA
            </H1>
            <P>
                The <span>National Aeronautics and Space Administration</span> established in 1958 for the research and development of vehicles and activities for the exploration of space within and outside Eart’s atmosphere.
            </P>
            <P>
            <span> NASA </span> helps teachers prepare students who will be the engineers, scientists, astronauts and other <span> NASA </span> workers of the future.
            </P>
        </NasaContentText>
    </NasaContentContainer>
  </>
  )
}

export default NasaContent