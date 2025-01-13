import React from 'react'
import { BackgroundGradient } from './ui/BackgorundGradients'
import Image from 'next/image'

const SyncWithGithub = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-black text-white flex flex-col items-center'>
            <div className='flex flex-col justify-center items-start max-w-3xl mx-4 md:mx-8 lg:mx-36 lg:mt-12'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-7xl tracking-tight'>
                    Sync with Github
                </h1>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-7xl tracking-tight'>
                    Both Ways
                </h1>
                <div className='flex flex-col text-gray-400 mt-4'>
                    <p>Manage your tasks efficiently with Huly&apos;s bidirectional GitHub synchronization.</p>
                    <p>Use Huly as an advanced front-end for GitHub Issues and GitHub Projects.</p>
                </div>
                <div className=' mt-16 lg:mt-24 flex items-center justify-center w-full'>
                    <BackgroundGradient className='w-full max-w-4xl flex justify-center'>
                        <Image
                            src="/images/hero.webp"
                            alt='sync'
                            width={800}
                            height={800}
                            className='object-contain rounded-3xl'
                        />
                    </BackgroundGradient>
                </div>
                <div className='flex flex-col items-center justify-center mb-10 mt-8'>
                    <div className='flex flex-col lg:flex-row mt-8 w-full gap-6'>
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-full'>
                            <Image
                                src="/images/profile.webp"
                                alt='Customize workspace icon'
                                width={48}
                                height={48}
                                className="text-blue-500"
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Two way synchronization</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Create your own offices and meeting rooms to suit your teams needs.
                                </p>
                            </div>
                        </div>

                        {/* Audio and video calls */}
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-full'>
                            <Image
                                src="/images/profile.webp"
                                alt='Video call icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Private Tasks</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Collaborate efficiently and seamlessly with high quality virtual conferencing.
                                </p>
                            </div>
                        </div>

                        {/* Invite guests */}
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-full'>
                            <Image
                                src="/images/profile.webp"
                                alt='Invite guests icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Multiple Repositories</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Meet with guests without ever needing to leave your workspace.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row mt-8 w-full gap-6'>
                        {/* Customize workspace */}
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Customize workspace icon'
                                width={48}
                                height={48}
                                className="text-blue-500"
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Milestone migration</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Create your own offices and meeting rooms to suit your teams needs.
                                </p>
                            </div>
                        </div>

                        {/* Audio and video calls */}
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Video call icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Track Progress</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Collaborate efficiently and seamlessly with high quality virtual conferencing.
                                </p>
                            </div>
                        </div>

                        {/* Invite guests */}
                        <div className='flex flex-col gap-4 p-6 bg-black rounded-xl shadow-sm w-full lg:w-1/3'>
                            <Image
                                src="/images/profile.webp"
                                alt='Invite guests icon'
                                width={48}
                                height={48}
                            />
                            <div className="space-y-2">
                                <h3 className="font-semibold text-3xl text-white">Advanced Filterings</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Meet with guests without ever needing to leave your workspace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SyncWithGithub