const CLIENT_ID = '88bd9043147741eabe7cc5e5802e67fb';
const redirect_uri = 'http://localhost:3000/'
const entryPoint = 'https://accounts.spotify.com/authorize'

const scopes = [
    'user-library-read',
    'user-library-modify',
    'user-read-email',
    'user-read-private',
    'app-remote-control',
    'user-read-currently-playing', 
    'playlist-read-private',
    'user-follow-read',
    'user-library-read',
    'user-top-read',
    'playlist-read-collaborative' ,
    'user-read-recently-played',
    'user-modify-playback-state'
]


export const authRedirectLink = `${entryPoint}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token`

export const reqToken = () => {
    const hash =  window.location.hash;
    const accessTokenArray = hash.slice(1).split('&');
    let tokenObject = [];
    accessTokenArray.map((element) => {
        const array = element.split('=');
        tokenObject.push(array);
    })
    if(tokenObject.length<=1) return null;
    return tokenObject;
}