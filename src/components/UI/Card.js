import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
    <div className='bg-[#1d1d1d] rounded-md m-3 hover:bg-[#252525] ease-in-out duration-150'>
        {/* artist image */}
        <div className='p-2'>
            <img 
                className={`${props.isProfile ? 'rounded-full drop-shadow-2xl': ''}`}
                src={props.image} 
            />
        </div>
        {/* artist details */}
        <div className='p-2 pb-4'>
            <p>{props.name}</p>
            <p className='text-sm text-gray-400'>{props.desc}</p>
        </div>

    </div>
  )
}

export default Card
