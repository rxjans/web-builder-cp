import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { TfiInfoAlt } from "react-icons/tfi";
import { FaGreaterThan } from "react-icons/fa";
import Card from '../components/Cards';
import {arr} from '../constant/description.js';
import VertiCards from '../components/VerticalCards.jsx';
import {arr1} from '../constant/vertiDescription.js';
function LandingPage() {
  return (
    <div className='max-w-[1200px] w-full mx-auto min-h-screen px-2'>
       <div>
            <div className='lg:text-[40px] text-[34px] font-semibold'>
                <h1>Best Website Builder in the US</h1>
                <hr></hr>
                <div className='text-[14px] mb-2 mt-2 flex items-center gap-x-2 font-medium text-slate-600 relative'>
                    <span><CiCircleCheck className='text-[18px]'/></span> 
                    <h6>Last Updated - March 6, 2024</h6>
                    <span className='ml-2'><TfiInfoAlt className='text-[16px]'/></span> 
                    <h6>Advertising Disclosure</h6>
                    <div className='absolute right-0'>
                    <select className='block h-[35px] w-full max-h-60 disabled:cursor-not-allowed disabled:opacity-50 border-none bg-gray-50  text-slate-600  focus:ring-purple-500 text-sm pr-10 rounded-lg'>
                        <option value="" disabled selected hidden>Relevant</option>
                        <option value="Entertainment">Most viewed</option>
                        <option value="Gaming">Relevant</option>
                    </select>
                    </div>
                </div>
                <hr></hr>
            </div>  
            <nav className='mt-2 flex lg:gap-x-24 gap-x-8 md:gap-x-24 text-[12px] lg:text-[16px] text-slate-600 justify-center lg:justify-start'>
                <a href='/'>Tools</a>
                <a className='truncate' href='/'>AWS Builder</a>
                <a className='truncate' href='/'>Start Build</a>
                <a className='truncate' href='/'>Build Supplies</a>
                <a href='/'>Tooling</a>
                <a className='truncate' href='/'>Blue Hosting</a>
            </nav>   
            <div className='flex items-center text-slate-600 mt-4 gap-x-2 font-normal text-[14px]'>
                <span>Home</span>
                <FaGreaterThan className='text-[10px]' />
                <span>Hosting for all</span>
                <FaGreaterThan className='text-[10px]' />
                <span>Hosting</span>
                <FaGreaterThan className='text-[10px]' />
                <span>Hosting6</span>
                <FaGreaterThan className='text-[10px]' />
                <span>Hosting5</span>
            </div> 
            <div className='mt-4'>
                {
                    arr.map((currElem, index)=> {
                       return <Card id={currElem.id} name={currElem.name} value={currElem.value} subname={currElem.subname} title={currElem.title} subtitle={currElem.subtitle} rating={currElem.ratings} remarks={currElem.remarks} stars={currElem.stars} />
                    })
                }
            </div>
            <div className='lg:text-[34px] text-[34px] font-normal px-4 mb-24'>
                <h1 className='mb-6'>Related deals you might like</h1>
                <div className='flex flex-row overflow-x-auto gap-x-12 no-scrollbar'>
                    {
                        arr1.map((prop, idx)=> {
                            return <VertiCards discount={prop.discount} time={prop.time} builder={prop.builder} title={prop.title} price={prop.price} originalPrice={prop.originalPrice} />
                        })
                    }
                </div>
            </div>
            <div className='text-[28px] text-wrap flex lg:flex-row flex-col items-center mb-16 justify-around'>
                <h1 className='w-[360px] text-slate-700 font-semibold mb-8 lg:mb-0'>Sign Up and get exclusive special deals</h1>
                <form>
                    <div className='border rounded-full w-[400px] px-2 overflow-hidden flex flex-row relative'>
                        <input type='text' className='border-none focus:ring-0' placeholder='Your Email...'/>
                        <button className='bg-sky-600 text-[12px]  text-gray-200 w-[100px] absolute right-0 top-0 h-full hover:bg-sky-700'>Sign Up</button>
                    </div>
                </form>
            </div>
       </div>
    </div>
  )
}

export default LandingPage
