import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getUserPlaylist } from '../../utils/userDataFetch';
import PlaylistCard from '../UI/PlaylistCard';

const HomeHero = () => {

    const user = useSelector(state => state.user?.user);
    const token = useSelector(state => state.token.token);
    const userId = user?.id;
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        if (userId) {
            getUserPlaylist(userId, token).then(
                playlists => setPlaylists(playlists)
            )
        }
    }, [user, token])

    // console.log(playlists);


    const time = new Date().toLocaleTimeString('hi', { hour12: false });
    const hours = parseInt(time.slice(0, 2));

    let greetings;

    if (hours >= 0 && hours < 12)
        greetings = "Good morning";
    else if (hours >= 12 && hours < 16)
        greetings = "Good afternoon";
    else
        greetings = "Good evening";



    return (
        <div className='m-4 p-2'>
            {/* Greetings */}
            <div className='mb-4'>
                <h2 className='text-4xl font-semibold'>{greetings}</h2>
            </div>
            {/* Playlists */}
            <div className='grid grid-rows-2 grid-flow-col gap-4 my-8'>
                {playlists?.slice(1, 7).map((playlist, index) => {
                    return (
                        <Link key={index} to={`/${playlist.id}`}>
                            <PlaylistCard
                                
                                image={playlist.images[0]?.url}
                                name={playlist.name.slice(0, 31)}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeHero