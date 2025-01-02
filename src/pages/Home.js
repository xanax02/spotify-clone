import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Aside from '../components/Aside/Aside'
// import Footer from './Footer'
import AsideBottom from '../components/Aside/AsideBottom'
import Body from '../components/Main/Body'
import Root from './Root'

const Home = () => {

    const token = useSelector(state => state.token?.token);

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/', {replace: true})
    }, [])

    if(!token) {
        redirect("/login")
    }

    return (
        <>
            <Body />
        </>
    )
}

export default Home
