
import './recommend.css'
import { useState,useEffect } from 'react'
import { value_conv, YT_API_KEY } from '../../data'
import { Link, useParams } from 'react-router-dom'


const Recommend = ({categoryId}) => {

    // const {categoryId} = useParams();
    
    const [apiData,setApiData] = useState([]);

    
    const fetchData = async()=>{

        // const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${YT_API_KEY}`;
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCnCJDSf8Mw_F1HSwQ7DjC9yEr72eA2qSU`
        await fetch(url).then(resp=>resp.json()).then(data=>setApiData(data.items));
    }
    
    useEffect(() => {
        fetchData();
    },[])
    
    
    return (
        
        <div className='recommended'>
            {apiData && apiData.length > 0 ?(apiData.map((item,idx)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={idx} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_conv(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                )
            })):<p>Loading...</p>}
        </div>
    )
}
export default Recommend
            
            
