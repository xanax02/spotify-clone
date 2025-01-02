import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { playlistActions } from '../../store/playlist-slice'
import { getUserPlaylist } from '../../utils/userDataFetch'

import { BiLibrary } from 'react-icons/bi'

const AsideBottom = () => {

  const user = useSelector(state => state.user?.user);
  const token = useSelector(state => state.token.token);
  const userId = user?.id;
  // console.log(user)
  const dispatch = useDispatch();

  const [playlists, setPlaylists] = useState();

  // the global state for playlist is set here
  useEffect(() => {
    if (userId) {
      getUserPlaylist(userId, token).then(
        playlists => setPlaylists(playlists)
      )
    }

  }, [user, token])

  // console.log(playlists);

  return (
    <div className='scroll overflow-scroll h-[calc(100vh-212px)] bg-[#121212] p-4 m-2 rounded-md text-lg'>
      {/* library */}
      <div className='group border-b-[1px] border-gray-500 pb-4 mb-4 flex'>
        <BiLibrary className='ml-2 mr-1 mt-1 text-gray-400 group-hover:text-white ease-in-out duration-200' />
        <p className='text-gray-400 group-hover:text-white ease-in-out duration-200'>Your Library</p>
      </div>
      {/* Playlist here */}
      {
        playlists?.map((playlist, index) => {
          return (
            <Link key={index} to={`/${playlist.id}`}>
              <div className='px-2 py-2 rounded-md cursor-pointer flex  hover:bg-gray-800' >
                <div className='mr-4'>
                  <img
                    className='text-xs h-[55px] w-[55px] rounded-lg'
                    src={playlist.images[0]?.url}
                    alt='img'
                  />
                </div>
                <div className='pt-[6px]'>
                  <p className='text-base'>{playlist.name.slice(0, 31)}</p>
                  <div className='flex '>
                    <p className='mr-4 text-gray-400 text-sm'>{playlist.type}</p>
                    <p className='mr-4 text-gray-400 text-sm'>{user.display_name}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default AsideBottom
