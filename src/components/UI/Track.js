import React from 'react'
import { CiClock2 } from 'react-icons/ci'

const Track = (props) => {
    return (
        <>
            <div className='flex items-center justify-between mx-6 mr-20 hover:bg-gray-800 p-2 rounded-md ease-in-out duration-200 cursor-pointer'>
                <div className='max-w-[500px] flex-grow flex items-center'>
                    <p className={props.sno ? 'mr-2' : 'text-gray-400 text-sm'}>{props.sno ? `${props.sno}` : '#'}</p>
                    {props.image && <img
                        className='h-[40px] w-[40px]'
                        src={props.image}
                        alt='img'
                    />}
                    <div className='ml-2'>
                        <p className={props.name ? 'text-base' : 'text-gray-400 text-sm'}>{props.name ? `${props.name}` : 'Title'}</p>
                        <p className='text-gray-400 text-sm text-left'>{props.artist}</p>
                    </div>
                </div>
                <div className='max-w-[200px] text-center text-sm text-gray-400'>{props.album ? `${props.album}` : 'Album'}</div>
                <div className='flex'>
                    {/* conditional div */}
                    {props.date && <div className='text-gray-400 mr-[100px] text-sm'>{props.date}</div>}
                    {props.heading && <div className='text-gray-400 text-sm mr-[140px]'>Date added</div>}
                    {/* like icon */}
                    <p className='text-sm text-gray-400'>{props.time ? `${props.time}`: <CiClock2 />}</p>
                </div>
            </div>
            {props.heading && <div className=' border-b-[1px] border-gray-400 mx-8 mr-20'></div>}
        </>
    )
}

export default Track

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaHco5meT_jpREmB40Yg2QmuHovQe9BZpEsmY4pM9ZA&usqp=CAU&ec=48665698