import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trackSliceActions } from '../../store/track-slice';
import { getArtistsName, getCurrentlyPlayingSong } from '../../utils/userDataFetch';

const CurrentSong = () => {

    const token = useSelector(state => state.token.token);
    // const dispatch = useDispatch();
    // const [currentTrack, setCurrentTrack] = useState();

    // useEffect(() => {
    //     getCurrentlyPlayingSong(token).then(items => {
    //         console.log('from currentSong', items);
    //         setCurrentTrack(items);
    //     })
    // },[])

    // if(currentTrack){
    //     dispatch
    // }

    //////////////////////////////////////////////////

    /////////////////////////////////////////////////
    const [currentSong, setCurrentSong] = useState();

    // useEffect(() => {
    //         console.log(getCurrentlyPlayingSong(token))
    // }, [])

    useEffect(() => {

        fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token[0][1]}`,
            }
        }).then(response => {
            const responseData = response.body.getReader();
            return responseData.read();
        }).then(resResult => {
            if(!resResult.done) {
                const data = JSON.parse(new TextDecoder().decode(resResult.value));
                console.log('last try', data);
                setCurrentSong(data)
            }
        })

    }, [])

    // DEBUGGER
    console.log('from current song', currentSong);           

    return (
        <div className='flex items-center'>

            {/* imaage */}
            <div className='h-[55px] w-[55px]'>
                <img
                    className='h-full w-full'
                    src={currentSong?.item?.album?.images[0]?.url}
                />
            </div>

            {/* song details */}
            <div className='mx-2'>

                {/* Song name */}
                <p className='text-sm'>{currentSong?.item?.name}</p>
                {/* artists */}
                {currentSong?.item?.artists && <p className='text-xs text-gray-400'>{getArtistsName(currentSong?.item)}</p>}

            </div>

        </div>
    )
}

export default CurrentSong


