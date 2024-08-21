import React from 'react'
import './video.css'
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recommend from '../../components/Recommend/Recommend'
import { useParams } from 'react-router-dom'


const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      
      <PlayVideo videoId={videoId} />
      <Recommend categoryId={categoryId}/>
      
    </div>
  )
}

export default Video