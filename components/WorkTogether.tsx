import Image from 'next/image'
import React from 'react'

const WorkTogether = () => {
    return (
        <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full z-50 mt-12'>
            <div className='flex flex-col justify-center items-start max-w-3xl mx-auto'>
                <h1 className='font-bold text-black text-3xl lg:text-7xl tracking-tight font-marten'>
                    Work Together
                </h1>
                <h1 className='font-bold text-black text-3xl lg:text-7xl tracking-tight font-marten'>
                    Like in the Office
                </h1>
                <p className='text-gray-600 mt-6 text-[10px] lg:text-xl'>
                    Create customized virtual office spaces for any department or event with high quality audio and video conferencing.
                </p>
                <div className='mt-4 w-full border-2 border-gray-300 rounded-md'>
                    <video
                        className='w-full h-auto object-cover p-2' src='/images/bento/waves.mp4' autoPlay loop muted
                    />
                </div>
                <p className='text-black mt-6 text-[10px] lg:text-xl lg:max-w-[650px] p-2 font-semibold'>
                    Collaborating with remote teams is easy in your virtual office environment. Enjoy real-time communication within your workspace without additional software hassle.
                </p>
                <div className='flex flex-col lg:flex-row mt-8 w-full gap-6'>
                    {/* Customize workspace */}
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Customize workspace icon'
                            width={48}
                            height={48}
                            className="text-blue-500"
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Customize workspace</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Create your own offices and meeting rooms to suit your teams needs.
                            </p>
                        </div>
                    </div>

                    {/* Audio and video calls */}
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Video call icon'
                            width={48}
                            height={48}
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Audio and video calls</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Collaborate efficiently and seamlessly with high quality virtual conferencing.
                            </p>
                        </div>
                    </div>

                    {/* Invite guests */}
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm flex-1'>
                        <Image
                            src="/images/profile.webp"
                            alt='Invite guests icon'
                            width={48}
                            height={48}
                        />
                        <div className="space-y-2">
                            <p className="font-semibold text-xl text-gray-900">Invite guests</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Meet with guests without ever needing to leave your workspace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkTogether