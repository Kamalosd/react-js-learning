import React, { useEffect, useRef, useState } from 'react'

const StopWatch= () => {
const[isRunning,setIsRunning]=useState(false)
const[elapstedTime,SetElapledTime]=useState(0)
const starTimeRef=useRef(0)
const intervalIdRef=useRef(null)
  const handleStart=()=>{
  setIsRunning(true)
  starTimeRef.current=Date.now()-elapstedTime
  }

  const handleEnd=()=>{
    setIsRunning(false)
  }

  const handleReset=()=>{
  setIsRunning(false)
  SetElapledTime(0)
  }
 

const formatTime=()=>{
  let hours=Math.floor(elapstedTime/(1000*60*60))
    let minutes=Math.floor((elapstedTime/(1000*60))%60)
      let seconds=Math.floor((elapstedTime/(1000))%60)
         let miliseconds=Math.floor((elapstedTime%(1000))/10)

         hours=String(hours).padStart(2,"0")
         
        minutes=String(minutes).padStart(2,"0")
         
         seconds=String(seconds).padStart(2,"0")
         
       miliseconds=String(miliseconds).padStart(2,"0")

           return`${minutes}:${seconds}: ${miliseconds}`
}




useEffect(()=>{
  if(isRunning){
     intervalIdRef.current=setInterval(()=>{
      SetElapledTime(Date.now()-starTimeRef.current)
    },10)
  }

  return()=>{
   clearInterval(intervalIdRef.current)
  }
},[isRunning])
  return (
    <div className='flex flex-col  justify-center items-center h-screen'>
      <div className='text-[50px] font-bold'>{formatTime()}</div>
      <div className='controls flex items-center gap-[15px]'>
        <button onClick={handleStart} className=' cursor-pointer px-4 py-2 bg-green-400 rounded-2xl hover:bg-green-800 transition-colors duration-500'>start</button>

        <button onClick={handleEnd} className=' cursor-pointer px-4 py-2 bg-red-400  rounded-2xl hover:bg-red-700 transition-colors duration-500'>Stop</button>

        <button onClick={handleReset} className=' cursor-pointer px-4 py-2 bg-blue-500 rounded-2xl hover:bg-blue-800 transition-colors duration-500'>Reset</button>

      </div>
      
    </div>
  )
}

export default StopWatch
