import React from 'react'
import { TypewriterEffect } from './ui/type-writer'
import { TextEffect } from './ui/TextEffect';
import Image from 'next/image';
const words = [
    {
        text: "Knowledge",
    },
    {
        text: "at",
    },
    {
        text: "Your",
    },
    {
        text: "fingertips",
    },
];

const Knowledge = () => {
    return (
        <section className='mx-auto max-w-full px-6 lg:px-20 3xl:px-0 relative py-5 w-full bg-white text-black my-16'>
            <div className='flex flex-col items-center justify-start'>
                <h1 className='w-full max-w-[750px] px-4'>
                    <TypewriterEffect words={words} className='text-2xl md:text-3xl lg:text-7xl font-bold text-left p-4 font-marten' />
                </h1>
                <p className='w-full lg:w-[700px] px-2  text-sm lg:text-2xl mt-4 font-normal'>
                    Huly offers a wide range of features to create and manage your project documentation. Huly&apos;s suite of collaborative editing tools boosts team efficiency.
                </p>
                <TextEffect per='char' preset='fade' className='w-full lg:w-[700px] px-2 text-sm lg:text-2xl mt-8 font-medium bg-yellow-200'>
                    Documents in Huly can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing meeting notes and assigning action items
                </TextEffect>
                <div className='w-full max-w-[700px] mt-8'>
                    <Image
                        src="/images/anything.png"
                        alt='Hero illustration'
                        width={1440}
                        height={810}
                        priority
                        className='w-full h-auto object-contain rounded-lg shadow-lg'
                    />
                </div>
                <p className='w-full lg:w-[700px] px-2  text-sm lg:text-2xl mt-8 font-normal'>
                    With <span className='line-through text-gray-400'>live</span> real-time collaboration, remote teams are able to work together to bring a unified vision to life on the page. Tagging users, linking to issues, and assigning action items are just a few of the advanced <span className='line-through text-gray-400'>solutions</span> powerful features
                    available within the Huly document editor.
                </p>
                <div className='w-full max-w-[700px] mt-8'>
                    <Image
                        src="/images/code.png"
                        alt='Hero illustration'
                        width={1440}
                        height={810}
                        priority
                        className='w-full h-auto object-contain rounded-lg shadow-lg'
                    />
                </div>
                <p className='w-full lg:w-[700px] px-2  text-sm lg:text-2xl mt-8 font-normal'>
                    Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to organize team plans, create technical documentation and support your team&apos;s progress towards shared goals.
                </p>
            </div>
        </section>
    )
}

export default Knowledge