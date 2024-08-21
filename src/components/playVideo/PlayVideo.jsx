
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'



import './playVideo.css'
import { useEffect, useState } from 'react'
import { value_conv, YT_API_KEY } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const PlayVideo = ({videoId}) => {

    // const {videoId} = useParams();

    const [apiData,setApiData] = useState(null);
    
    const [commentData ,setCommentData] = useState([]);
    
    const fetchVideoData = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YT_API_KEY}`
        await fetch(url).then(resp=>resp.json()).then(data=>setApiData(data.items[0]));
    }
    const [channelData ,setChannelData] = useState(null);
    useEffect(()=>{
        fetchVideoData();
    },[])

    const fetchChannelData = async()=>{
        // console.log(apiData.snippet.channelId)
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${YT_API_KEY}`
        await fetch(url).then(resp=>resp.json()).then(data=>setChannelData(data.items[0]))
    }

    useEffect(()=>{
        fetchChannelData();
    },[apiData])
    
    const fetchCommentData = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${YT_API_KEY}`
        await fetch(url).then(resp=>resp.json()).then(data=>setCommentData(data.items))
    }
    
    useEffect(()=>{
        fetchCommentData();
    },[apiData])
    
    return (
    <div className='play-video'>

        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{value_conv(apiData?apiData.statistics.viewCount:120)} &bull; {moment(apiData?apiData.snippet.publishedAt:"Today").fromNow()}</p>
            <div>
                <span><img src={like} alt="" />{value_conv(apiData?apiData.statistics.likeCount:111)}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{value_conv(channelData?channelData.statistics.subscriberCount:"1B")}</span>
            </div>
            <button className='btn'>Subscribe</button>
        </div>
        <div className="vid-desc">
            <p>{apiData?apiData.snippet.description.slice(0,250):"hey"}</p>
            <hr />
            <h4>{value_conv(apiData?apiData.statistics.commentCount:"120")}</h4>

            {commentData.map((item,idx)=>{
                return(
                    <div key={idx} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_conv(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default PlayVideo