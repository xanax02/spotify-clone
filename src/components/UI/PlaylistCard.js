import React from 'react'

const PlaylistCard = (props) => {
  return (
    <div className='bg-gray-100 bg-opacity-10 hover:bg-opacity-20  duration-200 rounded-lg flex items-center h-[80px] w-[25vw]'>
      <div className='h-full w-[20%]'>
        <img className='h-full w-full rounded-l-lg' src={props.image} />
      </div>
      <div className='w-[80%] text-center'>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
