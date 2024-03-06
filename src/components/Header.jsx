import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import {Button} from 'flowbite-react';

function Header() {
  return (
    <nav className='top-0 z-50 w-full px-2 py-2.5 bg-[#212731] sm:px-4 border-b-2'>
      <div className='mx-auto flex flex-wrap items-center justify-between container'>
        <a href to='/'>
          <img src={logo1} className='w-[50px] h-[40px] '/>
        </a>
        <form>
          <div className="hidden lg:inline">
            <div className="relative w-full">
              <div data-testid="right-icon" className="pointer-events-none absolute  inset-y-0 right-0 flex items-center pr-3 h-5 w-5 text-gray-500 dark:text-gray-400" height="1em" width="1em" ></div>
                <input className=" inputheader block w-full border caret-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900  focus:ring-purple-500 dark:border-gray-600 dark:bg-[rgb(44,47,51)] dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:caret-gray-200 dark:focus:ring-gray-500 p-2.5 text-sm pr-10 rounded-lg" type="text" placeholder="Search..." />
                <AiOutlineSearch className='absolute top-3 right-3 dark:text-gray-300' />
            </div>
          </div>
        </form>
        <Button className='w-12 h-10 lg:hidden rounded-full dark:border-4 dark:bg-zinc-600 dark:border-zinc-700' color='gray'>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-4 md:order-2'>
           
            <div className='bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full'>  
                <a href='/'>
                    <button type="button" className="group rounded-full flex m-0.5 text-black items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none hover:text-white bg-gradient-to-br from-white to-white hover:from-purple-600 hover:to-cyan-500  dark:focus:ring-cyan-800 focus:ring-2"><span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">Sign In</span></button>
                </a>
            </div>
              

          
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        </div>
        
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#212731] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#212731] md:dark:bg-transparent dark:border-gray-700 dark:bg-[rgb(44,47,51)]">
              <li>
                <a href="/" className="block py-2 px-3 rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3  rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Website Builders</a>
              </li>
              <li>
                <a href="/projects" className="block py-2 px-3  rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Today's deals</a>
              </li>
            </ul>
        </div>
      </div>
     </nav>
  )
}

export default Header
