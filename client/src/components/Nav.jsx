// import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return <div className="text-white  py-1 sm:py-5 " >
        <div className="container flex  max-w-3xl h-20 mx-auto px-4">
            <div className="flex w-full justify-between  items-center">
                <Link to='/' className='flex items-center' >
                    <img src={'/logo.svg'} alt='logo' className='h-8' />
                </Link>
                <div className='flex text-md gap-5 sm:text-lg' >
                    <Link to='/' className='hover:text-white text-neutral-400' >Home</Link>
                    <Link to='/explore' className='hover:text-white text-neutral-400' >Explore</Link>
                    <Link to='/new' className='hover:text-white text-neutral-400' >New</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Nav