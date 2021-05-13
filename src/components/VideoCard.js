import React, { useEffect, useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

export default function VideoCard({
  id,
  channel,
  avatarSrc,
  url,
  song,
  likeCount,
  shareCount,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  //onscroll pause n play handle
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };
    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };
    let observer = new IntersectionObserver(handlePlay, options);
    observer.observe(videoRef.current);
  });

  const onVideoPress = () => {
    if (isPlaying) {
      //videoRef.current.pause();
      videoRef.current.volume = 0.0;
      setIsPlaying(false);
    } else {
      // videoRef.current.play();
      videoRef.current.volume = 1.0;
      setIsPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        key={id}
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
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
  );
}
