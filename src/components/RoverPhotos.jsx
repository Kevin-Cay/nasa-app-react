import React, {useState, useEffect} from 'react';
import {H1, H3, P, SubTitle} from './global.styles'
import { ContinerRover, GalerySection, RoverDescription } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';
import '../index.css'


const defaultDataRover ={
  latest_photos: [
  {
  id: 944945,
  sol: 371,
  camera: {
  id: 38,
  name: "error",
  rover_id: 8,
  full_name: "Error"
  },
  img_src: "/error-api.png",
  earth_date: "2022-03-06",
  rover: {
  id: 8,
  name: "Perseverance",
  landing_date: "2021-02-18",
  launch_date: "2020-07-30",
  status: "fail"
  }
  }]
  
  }

export async function getData(){
  try{
    const apiKey = process.env.REACT_APP_NASA_APIKEY    
    const resCuriosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&page=1&api_key=${apiKey}`)
    const dataCuriosity = await resCuriosity.json() 
    const resPerseverance = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?&page=1&api_key=${apiKey}`)
    const dataPerseverance = await resPerseverance.json()
    return{
      props: {
        dataCuriosity : dataCuriosity,
        dataPerseverance: dataPerseverance,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error)
  }
}

function RoverPhotos() {
  const [dataCuriosity, setdataCuriosity] = useState(defaultDataRover);
  const [dataPerseverance, setdataPerseverance] = useState(defaultDataRover);
  const [rover, setRover] = useState("curiosity");
  const [roverInfo, setRoverInfo] = useState(curiosityRover[0]);
  const [roverGalery, setRoverGalery] = useState(dataCuriosity.latest_photos);

  // const fetchRoversInfo = async () =>{
  //   const response = await fetch(`/api/${rover}`)
  //   const data = await response.json()
  //   setRoverInfo(data[0])
  // }


  let description = roverInfo.description;
  let descriptionArr = [];
  for (const key in description) {
    if (Object.hasOwnProperty.call(description, key)) {
      descriptionArr.push(description[key])
    }
  }

  const handleChange = (roverName ) =>{
    setRover(roverName)  
    if(roverName === "curiosity"){
      setRoverGalery(dataCuriosity.latest_photos)
      setRoverInfo(curiosityRover[0])
    }else{
      setRoverGalery(dataPerseverance.latest_photos)
      setRoverInfo(perseveranceRover[0])
    }

  }
  
  useEffect(()=>{
    getData().then(data => {
      setdataCuriosity(data.props.dataCuriosity)
      setdataPerseverance(data.props.dataPerseverance)
      setRoverGalery(data.props.dataCuriosity.latest_photos)
    })  
  }, [])
  return (
    <ContinerRover id="RoverPhotos">
      <RoverDescription>
        <SubTitle>Rover Photo Gallery</SubTitle>
        <H1>
        {roverInfo.title}
        </H1>
        {     descriptionArr.map((x, i) => <P key={i}>{x}</P> )
        }
        <H3>
        {roverInfo.footer}
        </H3>
      </RoverDescription>
      <GalerySection>
        <div className="multi-button">
            <button onClick={() =>(handleChange('curiosity'))} value="curiosity">Curiosity</button>
            <button onClick={() =>(handleChange('perseverance'))} value="perseverance">Perseverance</button>
        </div>
        <ResponsiveCarousel rover={rover} roverGalery={roverGalery} />
      </GalerySection>
      </ContinerRover>
  );
}

export default RoverPhotos;
export const curiosityRover = [{
  id: 1,
  name: "curiosity",
  title: "Curiosity Rover",
  description: {
      0: "Also called Mars Science Laboratory(MSL), U.S. robotic vehicle, designed to explore the surface of Mars, which determined that Mars was once capable of dupporting life.",
      1: "The rover was launched by an Atlas V rocket from Cape Canaveral, Florida, on November 26, 2011, and landed in Gale crater on Mars on August 6, 2012.",
      2: "This is a gallery of the latest images of Mars taken on Curiosity's"
  },
  footer: "Curiosity is about 3 metres long and weighs about 900 kg. ",
}]
export const perseveranceRover = [{
  id: 2,
  name: "perseverance",
  title: "Perseverance Rover",
  description: {
      0: "Nicknamed Percy, is a car-sized Mars rover designed to explore the crater Jezero on Mars as part of NASA’s Mars 2020 mission. The rover was launched on 30 July 2020, and landed on 18 February 2021.",
      1: " Percy is looking for signs of microscopic life using PIXL, a camera mounted to its robotic arm that can see features as small as a grain of salt. ",
      2: "This is a gallery of the latest images of Mars taken on Perseverance's"
  },
  footer: "Perseverance is about 2,7 metres long and weighs about 1,025 kg. "
}]
