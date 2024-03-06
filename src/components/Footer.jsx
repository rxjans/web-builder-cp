import React from 'react'
import logo1 from '../assets/logo1.png';
function Footer() {
  return (
        
        <footer className="bg-[#212731] dark:bg-gray-900 bottom-0 left-0 w-full border-t-2">
            <div className="mx-auto w-full p-4 py-6 lg:pt-8">
                <div className="md:flex md:justify-around">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo1} className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200 dark:text-white">Web Builder</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Categories</h2>
                        <ul className="text-gray-400 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Web Builder</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Hosting</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Data Center</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Automation</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Contact</h2>
                        <ul className="text-gray-400 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Contact</a>
                            </li>
                            <li className='mb-4'>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Terms of Service</a>
                            </li>
                            <li className='mb-4'>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Categories</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">About</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <select className='block h-[35px] w-full max-h-60 mt-2 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900  focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500 text-sm pr-10 rounded-lg'>
                                        <option value="" disabled selected hidden>India</option>
                                        <option value="Entertainment">United States</option>
                                        <option value="Gaming">India</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">rxjans™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="www.github.com/rxjans" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
            </div>
        </footer>
  

  )
}

export default Footer
