import React, {useCallback, useState} from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
    const [value, setValue] = useState("")
    const navigator = useNavigate()

    const handleJoin = useCallback(() => {
        navigator(`/room/${value}`)
    }, [navigator,value])

  return (
    <>
        <input type="text" placeholder = "Enter the room name" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleJoin}>Join</button>
    </>
  )
}

export default HomePage