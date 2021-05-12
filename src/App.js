import './App.css';
import VideoCard from './components/VideoCard';

function App() {
  return (

    //BEM naming convention
    <div className="app">
      <div className="app__top">

        <img 
        className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        alt="ig reels"
        />

        <h1>  Reels</h1>

      </div>

      <div className="app__videos">

        <VideoCard 
          channel='sreerajmelath'
          avatarSrc='https://avatars.githubusercontent.com/u/6124324?s=48&v=4'
          song='original_music_uploaded by user'
          url='https://www.sreerajmelath.com/bb/v1.mp4'
          likeCount='950'
          shareCount='230'
        />
        <VideoCard 
          channel='sreerajmelath'
          avatarSrc='https://avatars.githubusercontent.com/u/6124324?s=48&v=4'
          song='original_music_uploaded by user'
          url='https://www.sreerajmelath.com/bb/v2.mp4'
          like='950'
          shares='230'
        />

      </div>
    </div>
  );
}

export default App;
