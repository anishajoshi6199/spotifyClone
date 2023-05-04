import "./List.css";
import { RiPlayMiniFill } from "react-icons/ri";
import { RiDownload2Line } from "react-icons/ri";
import { RxDotsVertical } from "react-icons/rx";
// import { MdPause } from 'react-icons/md';
import { MdShare } from "react-icons/md";
import { useEffect, useState } from "react";
// import found from './audio/Found.mp3'

const List = ({ dataList,clickHandle }) => {
//     const [currSong, setCurrSong] = useState();
//     const [prevSong, setPrevSong] = useState();

//   function play(song) {
//     new Audio(song).pause();
//     setCurrSong(song);
//   }
//   useEffect(()=> {
//     new Audio(currSong).play();
//       setPrevSong(currSong); 
//   }) 


  // let song = dataList.sound;




  return (
    <section>
      <div className='Icon'>
        <div className='btn' onClick={() => clickHandle(dataList.id)}>
          {" "}
          <RiPlayMiniFill className='PlayBtn' />
        </div>
      </div>
      <div className='box'>
        <div className='ListBox'>
          <div className='musicImg'>
            <img className='musicImg' src={dataList.songImg} alt='' />
          </div>
          <h3 className='musicName'>{dataList.SongName}</h3>
          <h6 className='singer'>{dataList.singerName}</h6>
          <p className='views'>{dataList.viewers}</p>
          <p className='timer'>{dataList.timing}</p>

          <div className='BTN'>
            <MdShare className='playBTN' />
          </div>
          <div className='BTN1'>
            <RiDownload2Line className='playBTN1' />
          </div>
          <div className='BTN2'>
            <RxDotsVertical className='playBTN2' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
