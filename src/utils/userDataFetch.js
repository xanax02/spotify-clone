const meUrl = "https://api.spotify.com/v1/me/"
const getTopUrl = `${meUrl}top/artists`

//this function is repeated can be optimised in one function.
export const getTopArtist = async(token) => {

    const response = await fetch(getTopUrl, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    // console.log(responseData.items);

    if(responseData.items)
        return responseData.items;

}

export const getUserPlaylist = async(user_id,token) => {
    const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    return responseData.items;
}

export const getTopTracks = async(token) => {
    const response = await fetch(`${meUrl}top/tracks`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    // console.log(responseData.items);

    if(responseData.items)
        return responseData.items;
}

export const getArtistsName = (track) => {
    let artistArray = [];

    track.artists.map(items => {
        artistArray.push(items.name)
    })

    return artistArray.join(',');
}

export const getFollowings = async(token) => {

    const response = await fetch(`${meUrl}following?type=artist`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    
    // console.log('from fetch', responseData);
    return responseData;
    // if(responseData.items)
    //     return responseData.items;

}

export const getPlayListDetails = async(playlist_id, token) => {

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token[0][1]}`
        }
    })

    const responseData = response.json();
    // console.log('from fetch' ,responseData);
    return responseData;

}

// Recently played
export const getRecentlyPlayed = async(token) => {

    const response = await fetch(`${meUrl}player/recently-played`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token[0][1]}`
        }
    })

    const responseData = await response.json();
    // console.log('from-fetch', responseData)
    return responseData;
}

//currently playing songs
export const getCurrentlyPlayingSong = async(token) => {

    const response = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token[0][1]}`,
        }
    })

    
    //     throw new Error(error);
    const responseData =  response.body.getReader();
    // console.log('reader', data.read())
    responseData.read().then(value => {
        // if(value.done) 
        //     return null;
        // else {
        //     console.log(JSON.parse(new TextDecoder().decode(value.value)))
        //     return JSON.parse(new TextDecoder().decode(value.value))
        // }
        if(value.done) {
            // console.log(value)
            // console.log("no Data")
            return null;
        }
        else{
            // console.log(value);   
            // console.log("data");
            // const data = JSON.parse(new TextDecoder().decode(value.value))
            // // console.log(data);
            // return data;
            console.log('from fn', JSON.parse(new TextDecoder().decode(value.value)));
            return JSON.parse(new TextDecoder().decode(value.value))
        }
    })
    // console.log(response.headers.get('content-length'))
    // const responesData = await     // console.log(responesData)


}
