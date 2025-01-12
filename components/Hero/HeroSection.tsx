import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { motion } from "motion/react"
import Image from 'next/image'
import { InfiniteSlider } from '../ui/InfiniteScrollBar'
import { VscCircleFilled } from "react-icons/vsc";


const HeroSection = () => {
    return (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full flex flex-col">
            <div className='flex flex-col sm:text-2xl lg:text-6xl font-bold py-2 md:py-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-400 relative z-20'>
                <div>
                    Everything App
                </div>
                <div>
                    for your teams
                </div>
            </div>
            <div className='max-w-[248px] lg:max-w-[740px] flex flex-col'>
                <div className='text-gray-300 text-sm sm:text-base md:text-lg flex flex-col lg:flex-row md:flex-row'>
                    Huly, an open-source platform,
                    <div className='text-gray-300 text-sm sm:text-base md:text-lg'>
                        serves as an all in one replacement
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row md:flex-row'>
                    <div className='text-gray-300 text-sm sm:text-base md:text-lg'>
                        of Linear,Jira,Slack and Notion
                    </div>
                </div>
            </div>
            <div className='mt-2 lg:mt-10 max-w-28 lg:max-w-[248px] relative'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className='bg-gradient-to-r from-white to-gray-200 text-black px-3 lg:px-6 py-2.5 rounded-full font-semibold text-sm w-full flex gap-2 justify-center items-center shadow-lg transition-all duration-300 hover:shadow-white/25 overflow-hidden relative'
                >
                    <span className="relative z-10">Try it Free</span>
                    <FaArrowRight className="text-xs lg:text-sm relative z-10" />
                    <motion.div
                        initial={{ scale: 0, x: -50 }}
                        whileHover={{ scale: 1.5, x: 100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute w-10 h-10 bg-white rounded-full blur-xl opacity-70"
                    />
                </motion.button>
            </div>
            <div className='lg:mt-44 w-full mt-32'>
                <Image
                    src="/images/hero.webp"
                    alt='hero image'
                    width={400}
                    height={400}
                    className="w-[400px] lg:w-[980px] h-full object-contain rounded-sm lg:mt-16 lg:ml-6"
                />
            </div>
            <div className='text-gray-400 text-[10px] mt-2 lg:text-lg'>
                Everything that you need for productive team work
            </div>
            <div className='hidden lg:flex gap-2 text-white'>
                <p className='flex justify-center items-center gap-2'>Team Planner<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Project Management<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Virtual Office<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Chat<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Document<VscCircleFilled className='text-sm text-gray-400' /></p>
                <p className='flex justify-center items-center gap-2'>Inbox</p>
            </div>
            <div className='lg:hidden mt-2 w-full max-w-[650px] text-[10px] p-1 text-gray-400 sm:text-base'>
                <InfiniteSlider durationOnHover={75} gap={12}>
                    <p>Team Planner</p>
                    <p>Project Management</p>
                    <p>Virtual Office</p>
                    <p>Chat</p>
                    <p>Document</p>
                    <p>Inbox</p>
                </InfiniteSlider>
            </div>
        </section>
    )
}

export default HeroSection