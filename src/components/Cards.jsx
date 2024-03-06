import React from 'react';
import builder from '../assets/builder.png';
import {Ratings} from './Rating';

function Cards(props) {
  return (
    <div className='w-full min-h-[220px] rounded-2xl relative mb-12 md:mb-20 border-b py-4'>
        <div className='flex flex-col md:flex-row h-full px-4'>
            <div className='absolute top-4 left-[-10] mr-[-50] border w-10 h-10 rounded-full flex justify-center items-center'>
                <h1>{props.id}</h1>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center text-center'>
                <img className='w-48' src={builder} />
                <h1 className='text-[12px]'>Builder</h1>
            </div>
            <div className='flex-[2]'>
            <p className='mb-2 mt-2 text-gray-700'><b>{props.name}</b>
                {props.subname}</p>
                <b>{props.title}</b>
                <p className='px-2 py-2 mb-2'>{props.subtitle}</p>
                <a className='text-sky-600' href='/'><h1>Show more</h1></a>
            </div>
            <div className='flex-1 flex justify-center mt-2 items-center'>
                <Ratings rating={props.rating} remarks={props.remarks} stars={props.stars} />
            </div>
        </div>
    </div>
  )
}

export default Cards
