import React from 'react';
import Rating from '@mui/material/Rating';

export function Ratings(props) {
  return (
    <div className='w-full flex flex-col items-center justify-center h-full'>
        <div className='md:w-[100px] px-8 w-full justify-between bg-blue-100/60 bg rounded-b-2xl h-[100px] flex md:flex-col md:justify-center items-center'>
            <h1 className='text-blue-500 font-normal text-[32px]'>{props.rating}</h1>
            <h1 className='text-[18px] text-blue-600 md:text-[12px] text-nowrap '>{props.remarks}</h1>
            <span><Rating size='small' name="half-rating" defaultValue={2.5} value={props.stars} precision={0.5} /></span>
        </div>
        <div className='flex h-full items-end md:mt-0 mt-8'>
            <button className='w-[200px] bg-sky-600 text-gray-200 font-semibold px-2 py-2 rounded-2xl'>View</button>
        </div>
    </div>
  )
}


