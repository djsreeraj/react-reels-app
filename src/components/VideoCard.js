import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

export default function VideoCard({
    channel, avatarSrc, url, song, likeCount, shareCount
}) {

    const [isPlaying,setIsPlaying] = useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isPlaying){
            videoRef.current.pause();
            setIsPlaying(false);
        }else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />

            
            
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                src={url}
                alt="IG reels video"
                loop
            /> 
            <VideoFooter 
                channel={channel}
                avatarSrc={avatarSrc}
                url={url}
                song={song}
                likeCount={likeCount}
                shareCount={shareCount}
                />  

                    
            
        </div>
    )
}
