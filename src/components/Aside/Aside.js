import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const Aside = () => {
  return (
    <div className='bg-[#121212] p-4 m-2 rounded-md text-lg'>
      <Link to='/'>
        <div className='mx-4 flex text-gray-400 hover:text-white ease-in-out duration-200 cursor-pointer'>
          <HomeIcon className='mr-2 mt-[2px]' />
          <p>Home</p>
        </div>
      </Link>
      <div className= 'mx-4 mt-4 flex text-gray-400 hover:text-white ease-in-out duration-200 cursor-pointer'>
        <SearchIcon className='mr-2 mt-[2px]' />
        <p>Search</p>
      </div>
    </div>
  )
}

export default Aside
