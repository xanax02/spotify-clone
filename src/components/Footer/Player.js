import React from 'react'
import CurrentSong from './CurrentSong'
import TrackControls from './TrackControls'
import DeviceControl from './DeviceControl'

const Player = () => {
  return (
    <div className='flex items-center justify-between px-4 bg-black w-[100vw] h-[90px] mt-[-8px]'>
      <CurrentSong />
      <TrackControls />
      <DeviceControl />
    </div>
  )
}

export default Player
