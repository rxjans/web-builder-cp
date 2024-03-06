import React from 'react';
import builder from '../assets/builder.png';
function VerticalCards(props) {
  return (
    <div className='min-w-[340px] min-h-[340px] rounded-2xl relative mb-2 md:mb-2 border'>
        <div>
            <div className='flex justify-center items-center mt-4 mb-8'>
                <img className='w-48' src={builder} />
            </div>
            <div className='flex pl-10 gap-x-2'>
                <button className='bg-gray-200 w-16 text-[11px] text-sky-600 font-semibold rounded-md ' disabled={true} >{props.discount || 20}% off</button>
                <button className='bg-gray-200 w-20 text-[11px] text-sky-600 font-semibold rounded-md' disabled={true} >{props.time || "Limited time"}</button>
            </div>
            <div className='text-center mt-2'>
                <h1 className='text-[14px] text-slate-700 font-semibold'>{props.builder || "Webbuilder 1"}</h1>
            </div>
            <div className='text-center text-slate-500'>
                <p className='text-[16px] px-2'>{props.title || "Computer  Modern clasic with wix support"}</p>
            </div>
            <div className='text-[20px] px-6 text-slate-700 font-semibold flex flex-row items-end gap-x-2'>
                <h1>{props.price || "39.96"}</h1>
                <p className='text-[12px] text-slate-500'>{props.originalPrice || "49.96"}</p>
                <p className='text-[12px] text-red-500'>({props.discount || "20"}% off)</p>
            </div>
            <div className='flex mt-10 justify-center px-2 pb-4'>
                <button className='w-full text-[20px] bg-sky-600 py-1 text-gray-200 font-semibold rounded-2xl'>View</button>
            </div>
        </div>
    </div>
  )
}

export default VerticalCards;
