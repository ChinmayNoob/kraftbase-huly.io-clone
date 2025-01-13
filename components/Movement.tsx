import React from 'react'
import { FaSlack } from 'react-icons/fa6'
import Footer from './Footer'

const Movement = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-black text-white'>
            <div className='flex flex-col'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
                    <div className='w-full lg:w-1/2'>
                        <video className='w-full h-auto object-cover' src='/videos/clock.mp4' autoPlay loop muted />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col justify-start gap-0.5'>
                            <h1 className='flex flex-col text-3xl lg:text-7xl font-bold mb-4 text-center lg:text-start'>
                                <span>Join the </span>
                                <span>Movement</span>
                            </h1>
                            <p className='text-sm lg:text-lg'>
                                Unlock the future of productivity with Huly.
                            </p>
                            <p className='text-sm lg:text-lg'>
                                Remember, this journey is just getting started.
                            </p>
                            <div className='flex flex-col lg:flex-row gap-4 mt-4 items-center justify-center lg:justify-start lg:items-start'>
                                <button className='bg-[#FFFFF6] px-3 py-2 text-black rounded-3xl w-[150px]'> START NOW</button>
                                <button className='flex items-center justify-center bg-gradient-to-r from-[#9F3D33] to-black px-3 py-2 text-white rounded-3xl w-[150px]'><FaSlack/> Join Our Slack</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </section>
    )
}

export default Movement