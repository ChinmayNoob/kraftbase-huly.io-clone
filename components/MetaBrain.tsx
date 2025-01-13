import React from 'react'
import { BackgroundGradient } from './ui/BackgorundGradients'
import Image from 'next/image'

const MetaBrain = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-white text-black'>
            <div className='flex flex-col justify-center max-w-6xl mx-auto'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-7xl tracking-tight p-2 lg:ml-8'>
                    Huly Metabrain
                </h1>
                <div className='flex flex-col text-black mb-14 p-2 lg:ml-8 text-xl'>
                    <p>Connect every element of your workflow to build a dynamic knowledge base. </p>
                    <p>Soon, Huly AI will turn it into a powerful asset — a second brain for your team.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 w-full'>
                    {/* Top row */}
                    <div className='col-span-1 lg:col-span-1 bg-white rounded-3xl p-4'>
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Time-Blocking. </span>Transform tasks into structured blocks.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Time-Blocking. </span>Transform tasks into structured blocks.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black p-6 rounded-full flex flex-col items-center justify-center w-[200px] h-[200px] mx-auto mt-14'>
                        <p className='text-white text-4xl font-bold'>08</p>
                        <p className='text-gray-400 text-sm'>March</p>
                    </div>
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Time-Blocking. </span>Transform tasks into structured blocks.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                    {/* Bottom row */}
                    <div className='col-span-1 lg:col-span-1 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Time-Blocking. </span>Transform tasks into structured blocks.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>

                    <div className='col-span-1 lg:col-span-2 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Notifications. </span>Keep up to date with any changes by receiving instant notifications.</p>
                        <Image
                            src="/images/metabrain/recorder.webp"
                            alt='Hero illustration'
                            width={1440}
                            height={810}
                            priority
                            className='w-full h-auto object-contain rounded-lg shadow-lg'
                        />                    </div>

                    <div className='col-span-1 lg:col-span-2 bg-black rounded-3xl p-4'>
                        <p className='text-gray-400'><span className='font-bold text-white'>Quick Access. </span>Instantly access your important tools.</p>
                        <video className='w-full h-[200px] object-cover rounded-2xl' src='/images/bento/waves.mp4' autoPlay loop muted />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MetaBrain