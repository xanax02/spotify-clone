import { RouterProvider, createBrowserRouter, useNavigate} from 'react-router-dom';
import { Children, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { reqToken } from './utils/spotify';
import { userSliceActions } from './store/user-slice';
import { tokenSliceActions } from './store/token-slice';
import trackSlice, { trackSliceActions } from './store/track-slice';
import Profile from './pages/Profile';
import Root from './pages/Root';
import PlaylistTracks from './pages/PlaylistTracks';
import { getCurrentlyPlayingSong } from './utils/userDataFetch';


function App() {

  const [ _token, setToken ] = useState();

  const tokenState = useSelector(state => state.token.token);

  const dispatch = useDispatch();

  async function getUserData(token) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token[0][1]}`
      }
    })
    const data = await response.json();
    // console.log(data);
    dispatch(userSliceActions.setUser(data));
  }

  useEffect(() => {
//  /////token request//////////
    const token = reqToken();
    setToken(token);

//  ///// this is where token context is set  
    if(token != null){
      dispatch(tokenSliceActions.setToken(token));
      getUserData(token);
      window.location.hash = ''
    }

    
  },[])

  const router = createBrowserRouter([
    {
      path: '/',
      element: tokenState ? <Root /> : <Login />,
      children: [
        {path: '/', element: <Home />},
        {path: '/profile', element: <Profile />},
        {path: '/:id', element: <PlaylistTracks />}
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App;

