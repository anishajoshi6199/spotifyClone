import React, { useState, useRef, useEffect } from 'react'
import Slidersong from './SliderSong';
// import MusicContent from './MusicContent';

import './Slider.css'

const Slider = ({selectSong}) => {
  console.log(selectSong)
  const [percentage, setPercentage] =useState(0);
  const [isPlaying, setIsPlaying] =useState(false)
  const [duration, setDuration] =useState(0)
  const [currentTime, setCurrentTime] =useState(0);
//   const [firstData, setFirstData] = useState(slectedSong[0])
//   const [singelNext, setSingelNext] = useState(slectedSong[0].id)
  const audioRef = useRef();
  

//   useEffect(() => {
//     setSingelNext(singelNext)
//   console.log(singelNext)
//   }, [singelNext])

  const onChange =(event) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * event.target.value
    setPercentage(event.target.value)
  }
  

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.5;

    if(!isPlaying){
      setIsPlaying(true)
      audio.play()
    }

    if(isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) =>{
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2))
    
  }
const nextSong = () => {
//   setSingelNext(singelNext + 1)
//   if( singelNext >= songdata.length -1){
//     setSingelNext(0);
//   }
//   for(var i=0; i<songdata.length; i++){
//       if(i === singelNext){
//         setFirstData(songdata[i])
//       }
//     } 
//     setIsPlaying(false)
    console.log("next")
}

  const prevSong = () => {
    // setSingelNext(singelNext - 1)
    // if(singelNext === 0){
    //   setSingelNext(songdata.length -1)
    // }
    // for(var i=0; i<songdata.length; i++){
    //   if(i === singelNext){
    //     setFirstData(songdata[i])
    //   }
    // } 
    // setIsPlaying(false)
    console.log("previces")
  }

  return (
    <div className='Slider '>
      <div className=''><img className='SliderImg' src={selectSong[0].songImg} alt="" /></div>
      <div><h1 className=''>{selectSong[0].SongName}</h1><span className=''>{selectSong[0].singerName}</span></div>
      <div className='w-[75%]'>
        <Slidersong onChange={onChange} percentage={percentage} play={play} isPlaying={isPlaying} duration={duration} currentTime={currentTime}
        clickNext={nextSong} clickPre={prevSong}/>
        <audio className='' ref={audioRef} src={selectSong[0].sound}
         onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
         }}
         onTimeUpdate={getCurrDuration}
         />
      </div>
      
    </div>
  )
}

export default Slider;