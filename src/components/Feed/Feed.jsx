import { useEffect, useState } from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

import {YT_API_KEY,value_conv} from '../../data'

import './feed.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Feed = ({category}) => {

    const [data,setData] = useState([]);
    
    const fetchData = async ()=>{
        
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${YT_API_KEY}`
        await fetch(url)
            .then(response => response.json())
            .then(data => setData(data.items)) 
    
    }
        
        
    useEffect(()=>{
        fetchData();
    },[category])

  
    
    
        return (
            <div className="feed">
              {data.map((item, idx) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}/`} className='card' key={idx}>
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                  <h2>{item.snippet.title}</h2>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p>{value_conv(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
              ))}
            </div>
          )
}

        
        

export default Feed