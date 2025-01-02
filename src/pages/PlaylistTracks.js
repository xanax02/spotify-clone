import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArtistsName, getPlayListDetails } from '../utils/userDataFetch';

import Navigation from '../components/Main/Navigation';
import Hero from '../components/Main/Hero';
import Track from '../components/UI/Track';

const PlaylistTracks = () => {

    const params = useParams();
    const playlistId = params.id;
    const token = useSelector(state => state.token.token);

    const [playlistDetails, setPlaylistDetails] = useState();

    useEffect(() => {
        getPlayListDetails(playlistId, token).then(item => setPlaylistDetails(item));
    },[params.id])

    // DEBUGGER
    // console.log(playlistDetails); 

    const data = {
        image: playlistDetails?.images[0]?.url,
        user: playlistDetails?.name,
        isProfile: false,
        owner: playlistDetails?.owner.display_name,
        followers: playlistDetails?.followers.total,
        total: playlistDetails?.tracks.total
    }

    // debugger
    // console.log(playlistDetails?.tracks.items);
    // console.log("data");
    // console.log(playlistDetails?.tracks.items[1].track.album.images[0].url);

  return (      
    <div>
      <Navigation />
      <Hero data={data} />
      <Track heading={true} />
      {playlistDetails?.tracks?.items?.map((track, index) => {
        return (
            <Track
                key={index}
                sno={index+1}
                image={track.track?.album?.images[0]?.url}
                name={track.track?.name}
                artist={getArtistsName(track.track)}
                album={track.track?.album?.name}
                date={track.added_at.slice(0,10)}
                time={new Date(track.track?.duration_ms).toISOString().slice(15,19)}
            />
        )
      })}
    </div>
  )
}

export default PlaylistTracks;
