import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, redirect } from 'react-router-dom';

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';
import { tokenSliceActions } from '../store/token-slice';

import { getTopArtist, getTopTracks, getUserPlaylist, getArtistsName, getFollowings } from '../utils/userDataFetch';
import Card from '../components/UI/Card';
import CardWrapper from '../components/UI/CardWrapper';
import Track from '../components/UI/Track';

const Profile = () => {

  const userData = useSelector(state => state.user.user);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [topArtist, setTopArtist] = useState();
  const [playlists, setPlaylists] = useState();
  const [topTracks, setTopTracks] = useState();
  const [followings, setFollowings] = useState();

  useEffect(() => {
    getTopArtist(token).then(items => {
      setTopArtist(items)
    })
    getUserPlaylist(userData.id, token).then(items => {
      setPlaylists(items);
    })
    getTopTracks(token).then(items => {
      setTopTracks(items);
    }) 
    getFollowings(token).then(item => setFollowings(item.artists));
  }, [userData, token])

  //DEBUGGER
  // console.log('from comp', followings);

  const profileData = {
    title: 'Profile',
    user: userData?.display_name,
    image: userData?.images[0].url,
    followers: userData?.followers.total,
    following: followings?.total,
    playlists: playlists?.length,
    isProfile: true
  }


  const LogoutHandler = () => {
    navigate('/login', {replace: true})
    dispatch(tokenSliceActions.setToken(null));
  }


  return (
    <div className='relative'>
      <Navigation />
      <Hero data={{ ...profileData }} />
      <button className='bg-[#1ED760] absolute right-16 top-[300px] px-2 py-1 font-bold rounded-lg text-lg' onClick={LogoutHandler}>Logout</button>
      <CardWrapper title={'Top Artists this month'} titleDesc={'only visible to you'} >
        {topArtist?.slice(0, 6).map(artist => {
          return (
            <Card 
              image={artist.images[0].url} 
              name={artist.name}
              isProfile={true} 
              desc={"Artist"} 
            />
          )
        })}
      </CardWrapper>
      <CardWrapper notFlex={true} title={'Top Tracks this month'} titleDesc={'only visible to you'} >
        {topTracks?.slice(0,4).map((track, index) => {
          return (
            <Track 
              key={track.id}
              sno={index+1}
              name={track.name.slice(0,35)}
              image={track.album.images[0]?.url}
              album={track.album.name}
              time={new Date(track.duration_ms).toISOString().slice(15,19)}
              artist={getArtistsName(track)}
            />
          )
        })}
      </CardWrapper>
      <CardWrapper title={'Your Playlists'} >
        {playlists?.slice(0,6).map(playlist => {
          return (
            <Card 
              image={playlist.images[0].url}
              name={playlist.name.slice(0,16)}
              isProfile={false} 
              desc={`by ${userData.display_name}`} 
            />
          )
        })}
      </CardWrapper>
      <CardWrapper title='Followings' >
        {followings?.items?.slice(0,6).map(follow => {
          return (
            <Card 
              isProfile={true}
              image={follow.images[0]?.url}
              name={follow.name}
              desc={follow.type}
            />
          )
        })}
      </CardWrapper>
    </div>
  )
}

export default Profile
