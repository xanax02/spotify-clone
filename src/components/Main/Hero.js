import React from 'react'

const Hero = (props) => {
  return (
    <div className={`m-4 p-4 flex ${props.data.isProfile ? 'items-center': 'items-end'} pb-10 border-b-2 border-gray-600`}>
      <div className='mr-4'>
        <img
            className={`h-[250px] w-[250px] ${props.data.isProfile ? 'rounded-full': ''}`}
            src={props.data.image}
            alt='image'
        />
      </div>
      <div>
        <p className='text-xs mb-2'>{props.data.title}</p>
        <h2 className={`${props.data.isProfile ? 'text-6xl tracking-widest font-extrabold mb-2': 'text-4xl mb-4'}`}>{props.data.user}</h2>
        {/* Playlist, userfollowers, details */}
        <div className='flex'>
            <p className='mr-4 text-sm'>{props.data.playlists ? `${props.data.playlists} playlists` : `${props.data.owner}`}</p>
            <p className='mr-4 text-sm'><span className='mr-1'>{props.data.followers}</span>followers</p>
            <p className='mr-4 text-sm'>{props.data.following ? `${props.data.following} following`: `${props.data.total} songs`}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero


//{props.data.playlists} playlists
//{props.data.following} following