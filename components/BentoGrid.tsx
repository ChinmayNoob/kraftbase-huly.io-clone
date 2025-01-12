import React from 'react'

const BentoGrid = () => {
    return (
        <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full'>
            <div className='flex flex-col justify-center lg:mx-28'>
                <div className='flex text-4xl lg:text-6xl text-black mt-12 font-bold'>
                    Unmatched Productivity
                </div>
                <div className='flex lg:max-w-[650px] mt-2 text-black mb-8'>
                    Huly is a process, project, time, and knowledge management platform that provides amazing collaboration opportunities for developers and product teams alike.
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col lg:col-span-1 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <h3 className='text-white text-2xl font-bold'>Keyboard shortcuts</h3>
                        <p className='text-gray-400 mt-2'>Work efficiently with instant access to common actions.</p>
                    </div>

                    <div className='flex flex-col lg:col-span-2 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <h3 className='text-white text-2xl font-bold'>Team Planner</h3>
                        <p className='text-gray-400 mt-2'>Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</p>
                    </div>

                    <div className='flex flex-col lg:col-span-2 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <h3 className='text-white text-2xl font-bold'>Time-blocking</h3>
                        <p className='text-gray-400 mt-2'>Transform daily tasks into structured time blocks for focused productivity.</p>
                    </div>

                    <div className='flex flex-col lg:col-span-1 bg-black rounded-3xl p-6'>
                        <video className='w-full h-[200px] object-cover' src='/images/bento/waves.mp4' autoPlay loop muted />
                        <h3 className='text-white text-2xl font-bold'>Notifications</h3>
                        <p className='text-gray-400 mt-2'>Keep up to date with any changes by receiving instant notifications.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BentoGrid