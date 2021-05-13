import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase/firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // App component will run once when it loads
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
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
