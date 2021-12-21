import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
//import db from "./firebase/firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {


    // // App component will run once when it loads
    // db.collection("reels").onSnapshot((snapshot) =>
    //   setReels(snapshot.docs.map((doc) => doc.data()))
    // );

    setReels([
      {
        "id": 1,
        "channel": "bollywood_mix",
        "avatarSrc": "https://avatars.githubusercontent.com/u/18018422?s=40&v=4",
        "song": "bollywood_mix",
        "url": "https://www.sreerajmelath.com/bb/vv2.mp4",
        "likeCount": "66",
        "shareCount": "23",
      },
      {
        "id": 2,
        "channel": "athiti_insta",
        "avatarSrc": "https://avatars.githubusercontent.com/u/12987318?s=40&v=4",
        "song": "malayalam_song_original_uploaded",
        "url": "https://www.sreerajmelath.com/bb/vv4.mp4",
        "likeCount": "76",
        "shareCount": "33",
      }, 
      {
        "id": 2,
        "channel": "dhvani-insta",
        "avatarSrc": "https://avatars.githubusercontent.com/u/12987318?s=40&v=4",
        "song": "latest bollywood song by dhavani",
        "url": "https://www.sreerajmelath.com/bb/vv6.mp4",
        "likeCount": "76",
        "shareCount": "33",
      },        {
        "id": 3,
        "channel": "lionelsa",
        "avatarSrc": "https://avatars.githubusercontent.com/u/50248246?s=64&v=4",
        "song": "bollywood_mix",
        "url": "https://www.sreerajmelath.com/bb/vv1.mp4",
        "likeCount": "66",
        "shareCount": "23",
      },      {
        "id": 4,
        "channel": "riders-club",
        "avatarSrc": "https://avatars.githubusercontent.com/u/18018422?s=40&v=4",
        "song": "rider_mix_song_far_away",
        "url": "https://www.sreerajmelath.com/bb/vv3.mp4",
        "likeCount": "66",
        "shareCount": "23",
      },
      
    ])


  }, []);



  return (
    //BEM naming convention
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="ig reels"
        />

        <h1> Insta_Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(
          ({ channel, avatarSrc, url, song, likeCount, shareCount, id }) => (
            <VideoCard
              id={id}
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likeCount={likeCount}
              shareCount={shareCount}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
