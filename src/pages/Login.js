import React from 'react'

import { authRedirectLink } from '../utils/spotify'

const Login = () => {
    return (
        <div className='w-full h-[100vh] text-center'>
            <div className='h-full flex flex-col justify-center'>
                <img
                    className='mx-auto m-7 mt-[-90px]'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJVoRn0_KCWmqE_T_Pr-oqRomIpULwunJXq4tdmo7bQ&usqp=CAU&ec=48665698' alt='spotify'
                />
                <a
                    className='mx-auto max-w-[400px] px-6 py-2 font-bold border border-[#1DB954] bg-[#1DB954] rounded-3xl'
                    href={authRedirectLink}
                >SIGN IN WITH SPOTIFY</a>
            </div>
        </div>
    )
}

export default Login
