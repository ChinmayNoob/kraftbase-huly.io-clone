import React from 'react';
import { FaGithub, FaLinkedin, FaSlack, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <p className='text-sm'>Copyright © 2025 Huly Labs. All rights reserved.</p>
                <div className='flex space-x-4'>
                    <a href='/terms' className='text-sm hover:text-white font-bold'>Terms of Service</a>
                    <a href='/privacy' className='text-sm hover:text-white font-bold'>Privacy Policy</a>
                </div>
                <div className='flex space-x-4'>
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FaXTwitter /></a>
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    <a href='https://github.com' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                    <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
                    <a href='https://slack.com' target='_blank' rel='noopener noreferrer'><FaSlack /></a>
                </div>
                <p className='text-sm'>Made with passion and Huly</p>
            </div>
        </footer>
    );
}

export default Footer;