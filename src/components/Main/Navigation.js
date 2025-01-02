import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => {

  const user = useSelector(state => state.user.user);
  // console.log("user", user)
  const navigate = useNavigate();
  const params = useParams();

  const userAvatar = user?.images[0]?.url;
  const userName = user?.display_name;
  // console.log(userAvatar);
  // console.log(params)

  const goToPrevPage = () => {
    if(Object.keys(params).length === 0) return;
    navigate(-1)
  }
  const goToNextPage = () => {
    navigate(1)
  }

  return (
    <div className='flex justify-between p-4'>
      <div>
        <ArrowBackIosIcon className='mx-4' onClick={goToPrevPage} />
        <ArrowForwardIosIcon onClick={goToNextPage} />
      </div>
      <Link to={'/profile'}>
        <div className='flex mr-4 cursor-pointer'>
          <p className='border bg-white text-black font-medium rounded-2xl px-2 py-[1px] mr-4'>Explore Premium</p>
          <div className='flex'>
            {userAvatar && <img className='rounded-full h-[30px] w-[30px]' src={userAvatar} />}
            {!userAvatar && <PersonIcon className='w-[50px] h-[20px]' />}
            <p className='mt-1 ml-2'>{userName}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navigation
