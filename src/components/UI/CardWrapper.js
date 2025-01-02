import React from 'react'

const CardWrapper = (props) => {
  return (
    <div className='mx-4 my-8'>
      <div className='ml-4'>
        <h3 className='text-xl font-bold tracking-wide'>{props.title}</h3>
        <p className='text-sm text-gray-400 mb-1'>{props.titleDesc}</p>
      </div>
      <div className={`${props.notFlex ? '' : 'flex'}`}>
        {props.children}
      </div>
    </div>
  )
}

export default CardWrapper
