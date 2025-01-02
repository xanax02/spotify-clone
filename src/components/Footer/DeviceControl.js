import React from 'react'
import { BsVolumeUpFill } from 'react-icons/bs'

const DeviceControl = () => {
  return (
    <div className='flex items-center mr4'>
      <BsVolumeUpFill />
      <div className='h-[1px] w-[100px] border-b-2 mx-4'></div>
    </div>
  )
}

export default DeviceControl
