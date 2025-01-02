import React from 'react'
import { ImNext2, ImPrevious2 } from 'react-icons/im'
import { BsFillPauseCircleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const TrackControls = () => {

    const token = useSelector(state => state.token.token);

    const nextHandler = async() => {
        const response = await fetch('https://api.spotify.com/v1/me/player/next',{
            method: "POST",
            headers: {
                Authorization: `Bearer ${token[0][1]}`
            }
        })

        console.log(response);
        const responseData = response.json();
        console.log(responseData);
    }

  return (

    // these features will not work as I am not having premium but it you have it will work
    <div className='flex items-center'>
      <ImPrevious2 className='text-3xl' />
      <BsFillPauseCircleFill className='text-3xl' />
      <ImNext2 className='text-3xl' onClick={nextHandler} />
    </div>
  )
}

export default TrackControls
