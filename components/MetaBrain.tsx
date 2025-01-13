import React from 'react'
import { BackgroundGradient } from './ui/BackgorundGradients'
import Image from 'next/image'

const MetaBrain = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-white text-black mt-14 lg:mt-32'>
            <div className='flex flex-col justify-center max-w-6xl mx-auto'>
                <h1 className='font-bold text-3xl md:text-3xl lg:text-7xl tracking-tight p-2 lg:ml-8 font-marten'>
                    Huly Metabrain
                </h1>
                <div className='flex flex-col text-black mb-14 p-2 lg:ml-8 text-xl'>
                    <p>Connect every element of your workflow to build a dynamic knowledge base. </p>
                    <p>Soon, Huly AI will turn it into a powerful asset — a second brain for your team.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full'>
                    {/* Top row */}
                    <div className='col-span-1 lg:col-span-1 bg-white rounded-3xl p-4'>
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Create tasks. </span>Schedule your personal events and todos.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Plan your work. </span>Visualize your workday in your planner.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black p-6 rounded-full flex flex-col items-center justify-center w-[200px] h-[200px] mx-auto mt-14'>
                        <p className='text-white text-4xl font-bold'>08</p>
                        <p className='text-gray-400 text-sm'>March</p>
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Chat with team. </span>Send DM and create group chats.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    {/* Bottom row */}
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Take notes. </span>Create documents to keep track of team resources</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>

                    <div className='col-span-1 lg:col-span-2 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Sync in real time. </span>Connect with your team instantly to monitor progress and track updates.</p>
                        <Image
                            src="/images/metabrain/recorder.webp"
                            alt='Hero illustration'
                            width={1440}
                            height={810}
                            priority
                            className='w-full h-[200px] object-fill rounded-lg shadow-lg'
                        />
                        dev</div>

                    <div className='col-span-1 lg:col-span-2 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Manage projects. </span>Customize your workspace to fit the needs of your teams.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MetaBrain