import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaSlack, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 py-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <p className='text-sm text-center md:text-left'>Copyright © 2025 Huly Labs. All rights reserved.</p>
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center items-center'>
                    <Link href='/terms' className='text-sm hover:text-white font-bold'>Terms of Service</Link>
                    <Link href='/privacy' className='text-sm hover:text-white font-bold'>Privacy Policy</Link >
                </div>
                <div className='flex justify-center items-center gap-2 md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                    <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center'><FaXTwitter /></Link>
                    <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center'><FaLinkedin /></Link>
                    <Link href='https://github.com' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center'><FaGithub /></Link>
                    <Link href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center'><FaYoutube /></Link>
                    <Link href='https://slack.com' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center'><FaSlack /></Link>
                </div>
                <p className='text-sm text-center md:text-left'>Made with passion and Huly</p>
            </div>
        </footer>
    );
}

export default Footer;