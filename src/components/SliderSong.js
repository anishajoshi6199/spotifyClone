import React, { useState, useEffect, useRef } from 'react'
import { BiShuffle } from 'react-icons/bi';
import { AiFillStepBackward } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiFillStepForward } from 'react-icons/ai';
import { MdOutlineReplay } from 'react-icons/md';
import { FiPauseCircle } from 'react-icons/fi';
import './Slidersong.css'
import './thumb.css'

const Slidersong = ({onChange, percentage, play, isPlaying, duration, currentTime, clickNext, clickPre}) => {
  const [position, setPosition] =useState(0);
  const [marginLeft, setMarginLeft] =useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const rangeRef = useRef()


  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = 20;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar = thumbWidth + rangeWidth/100 * percentage -(thumbWidth/100 * percentage)
    setMarginLeft(centerThumb)
    setPosition(percentage)
    setProgressBarWidth(centerProgressBar)
  }, [percentage]);

  function secondsToHms(seconds){
    if(!seconds) return '00m 00s' 

    let duration = seconds
    let hours = duration /3000
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if(sec < 10){
      sec = `0${sec}`
    }

    if(min < 10){
      min = `0${min}`
    }

    if (parseInt(hours, 10 > 0)) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    }else if(min ===0){
      return `00 ${sec}s`
    } else {
      return `${min}:${sec}s`
    }
  }

  return (
    <div className='flex items-center space-x-4 '>
      <div className='flex ml-12 pl-9 space-x-6'>
      <div className='text-2xl'><BiShuffle /></div>
      <div className='text-2xl'><button onClick={clickPre}><AiFillStepBackward /></button></div>
      <div className='text-4xl -m-1' onClick={play} >{isPlaying ? <FiPauseCircle /> : <AiOutlinePlayCircle /> }</div>
      <div className='text-2xl'><button onClick={clickNext}><AiFillStepForward /></button></div>
      <div className='text-2xl'><MdOutlineReplay /></div>
      </div>
      <div className='text-[13px] '>{secondsToHms(currentTime)}</div>
      <div className='slider-container '>
        <div className='progress-bar-cover' style={{
          width: `${progressBarWidth}px`
        }}></div>
        <div className='thumb' style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`
        }}></div>
        <input type='range' value={position} ref={rangeRef} step='0.01' className='range' onChange={onChange}/>
      </div>
      <div className='text-[13px]'>{secondsToHms(duration)}</div>
    </div>
  )
}

export default Slidersong;