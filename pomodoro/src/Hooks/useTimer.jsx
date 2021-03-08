import React, {useState} from "react"

export const useTimer = ( initialState) => {

    const [seconds, setSeconds] = useState(Number(initialState) * 60 ) // converted mins to secs
    const [running, setRunning] = useState(false)

    const timerId = React.useRef()

    function decrementTimer(){
        setSeconds( (prev) => {
            if( prev == 0){
                stopTimer()
                return prev
            }

            else{
                prev -= 1
                return prev
            }
        })
    }

    function startTimer ()  {

       timerId.current =  setInterval( decrementTimer, 1000)
        setRunning(true)
    }

    function stopTimer(){
        clearInterval(timerId.current)
        setRunning(false)
    }

    function resetTimer(){
        setSeconds(initialState*60)
        clearInterval(timerId.current)
            setRunning(false)
    }
   
    const minutes = Math.floor( (seconds%3600) /60)
    const sec  = Math.floor( seconds%60 )


    const displayMinutes = minutes < 10 ? `0${minutes}`:minutes
    const displaySeconds = sec < 10 ? `0${sec}`:sec
    
    const displayTimeFormat = <p> {displayMinutes} : {displaySeconds} </p>



    return {running, startTimer ,displayTimeFormat,stopTimer,resetTimer} 

}