import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().toLocaleTimeString())
        },1000)
    },[])

  return (
    <div>
        <h1>{timer}</h1>
    </div>
  )
}

export default Timer