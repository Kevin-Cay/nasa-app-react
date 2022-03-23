import { useState, useEffect } from 'react';
import { H1,  H3, P, SubTitle } from './global.styles';
import {ContainerPic, ImageDescription, ImageOTD} from './PicOTD.styles'


const defaultData ={
  title:"error",
  date: '01-01-1991' ,
  url: '/sky.jpg' ,
  explanation:'error'
}

function PicOTD() {
  const [data, setData] = useState(defaultData);
  async function getData() {
    try{
      const apiKey = process.env.REACT_APP_NASA_APIKEY
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      const data = await res.json()
      return{
        data
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData().then(({data}) => {
      setData(data)
  })}, [])

      let dataContent = 'error' 
      let content = data.explanation
      let newContent = content.split(".")
      if(newContent.length >=4){
        dataContent = newContent.slice(0, 4).join(".").concat("...")
      }else{
        dataContent = newContent.join('.')
      }


  return (
  <ContainerPic id="POTD" >
      <ImageDescription>  
        <SubTitle>Pic Of The Day</SubTitle>
        <H1>{data.title}</H1>
        <P>{dataContent}
        </P>
          <H3>
          - {data.date} - {data.copyright}
          </H3>
      </ImageDescription>
          <ImageOTD>
            <img src={data.url} alt='Pic Of The Day' />
          </ImageOTD>
        </ContainerPic>
   )
}

export default PicOTD;




