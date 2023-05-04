// pages
import "./App.css";
import Activity from "./components/Activity";
import Hero from "./components/Hero";
import List from "./components/List";
import Navbar from "./components/Navbar";
// import Bottom from "./components/Bottom";
import Slider from "./components/Slider";
import Slidersong from "./components/SliderSong";

// Icons
import { FaSlackHash } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

// Images
import Heaven from "./components/heaven.jpg";
import capital from "./components/letters.webp";
import Meant from "./components/Meant.jpg";
import until from "./components/until.webp";

// songs
import found from "./components/audio/Found.mp3";
import heaven from "./components/audio/heaven.mp3";
import capitaLetter from "./components/audio/capital.mp3";
import meant from "./components/audio/meanToBe.mp3";
import { useState } from "react";

function App() {
  const dataList = [
    {
      id: 0,
      sound: found,
      songImg: until,
      singerName: "Stephen Sanchez",
      SongName: "Until I Found",
      companyName: "Dan Music",
      viewers: "5.7Cr",
      timing: "02.56",
    },
    {
      id: 1,
      sound: heaven,
      songImg: Heaven,
      singerName: "Julia Michaels",
      SongName: "Heaven",
      companyName: "FiftyShades",
      viewers: "9.9Cr",
      timing: "03.44",
    },
    {
      id: 2,
      sound: capitaLetter,
      songImg: capital,
      singerName: "Hailee",
      SongName: "Capital Letters",
      companyName: "BloodPop",
      viewers: "8.5Cr",
      timing: "03.40",
    },
    {
      id: 3,
      sound: meant,
      songImg: Meant,
      singerName: "Bebe Rexha",
      SongName: "Mean To Be",
      companyName: "Georgia",
      viewers: "1.1Cr",
      timing: "02.58",
    },
  ];

  // const [song, setSong] = useState(null);
  const [selectSong, setSelectSong] = useState([ {
    id: 0,
    sound: found,
    songImg: until,
    singerName: "Stephen Sanchez",
    SongName: "Until I Found",
    companyName: "Dan Music",
    viewers: "5.7Cr",
    timing: "02.56",
  }]);


  const clickHandle = (id) => {
    const anisha = dataList.filter((element) => element.id === id);
    setSelectSong(anisha);
  }

  console.log(selectSong)


  return (
    <div className='App'>
      <Navbar />
      <div>
        <Activity />
        <Hero />

        <div className='title'>
          <FaSlackHash className='hashtag' />
          <h6 className='titleName'>TITLE</h6>
          <BsMusicNoteBeamed className='music' />
          <FaRegEye className='eye' />
          <FiClock className='clock' />
        </div>

        {dataList.map((items) => {
          {
            /* return <List dataList={items} onPlay={obj=>{
setSong(obj)
          }} />; */
          }
          return <List dataList={items} clickHandle={clickHandle}/>;
        })}
      </div>

      {/* <audio autoPlay src={song?.sound} /> */}

      <Slider className='w-[140%]' selectSong={selectSong}/>
    </div>
  );
}

export default App;
