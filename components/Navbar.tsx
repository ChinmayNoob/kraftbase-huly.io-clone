import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaSlack, FaXTwitter, FaYoutube } from 'react-icons/fa6';






const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative py-5 w-full">
            <div className='flex items-center gap-12'>
                <Link href="/">
                    <Image
                        src="/images/icons/huly-icon.svg"
                        alt="icon"
                        width={74}
                        height={29}
                    />
                </Link>
                <div className='hidden h-full gap-12 lg:flex text-sm'>
                    <Link href="/pricing" className="text-white hover:opacity-80 flex items-center">
                        Pricing
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList className='gap-6'>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-white hover:opacity-80 hover:bg-black hover:text-white">
                                    Resources
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-black/95 backdrop-blur-md border-gray-600 rounded-lg min-w-[200px]">
                                    <div className="p-2">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='text-md flex flex-col'>
                                                    Blog
                                                    <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='text-md flex flex-col'>
                                                    Blog
                                                    <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='text-md flex flex-col'>
                                                    Blog
                                                    <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-white hover:opacity-80 hover:bg-black hover:text-white">
                                    Community
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-black/95 backdrop-blur-md border-gray-600 rounded-lg min-w-[300px]">
                                    <div className="p-2">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='w-8 h-8 border border-gray-500/50 rounded-md flex items-center justify-center'>
                                                        <FaXTwitter size={16} className='text-gray-400' />
                                                    </div>
                                                    <div className='text-md flex flex-col'>
                                                        Twitter
                                                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                    </div>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='w-8 h-8 border border-gray-500/50 rounded-md flex items-center justify-center'>
                                                        <FaLinkedin size={16} className='text-gray-400' />
                                                    </div>
                                                    <div className='text-md flex flex-col'>
                                                        Linkedin
                                                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                    </div>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='w-8 h-8 border border-gray-500/50 rounded-md flex items-center justify-center'>
                                                        <FaSlack size={16} className='text-gray-400' />
                                                    </div>
                                                    <div className='text-md flex flex-col'>
                                                        Slack
                                                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                    </div>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='w-8 h-8 border border-gray-500/50 rounded-md flex items-center justify-center'>
                                                        <FaYoutube size={16} className='text-gray-400' />
                                                    </div>
                                                    <div className='text-md flex flex-col'>
                                                        Youtube
                                                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                    </div>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className="px-4 py-2 text-white hover:opacity-80 rounded-md flex items-center justify-between gap-2 group"
                                            >
                                                <div className='flex gap-2 justify-center items-center'>
                                                    <div className='w-8 h-8 border border-gray-500/50 rounded-md flex items-center justify-center'>
                                                        <FaGithub size={16} className='text-gray-400' />
                                                    </div>
                                                    <div className='text-md flex flex-col'>
                                                        Github
                                                        <span className='text-gray-400 text-sm'>Lorem ipsum dolor</span>
                                                    </div>
                                                </div>
                                                <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="/download" className="text-white hover:opacity-80 flex items-center">
                        Download
                    </Link>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-6'>
                <Link
                    href="https://github.com/your-repo"
                    className="flex items-center gap-2 text-white hover:opacity-80 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={24} />

                    Star Us
                </Link>
                <Link
                    href="/get-started"
                    className="bg-black text-white border-2 border-gray-500 hover:bg-gray-700 hover:bg-opacity-80 transition-colors duration-300 px-3 py-1 rounded-xl text-sm"
                >
                    Sign In
                </Link>
                <Link
                    href="/get-started"
                    className="bg-black text-white border-2 border-gray-500 hover:bg-gray-700 hover:bg-opacity-80 transition-colors duration-300 px-3 py-1 rounded-xl text-sm"
                >
                    Get Started
                </Link>
            </div>
            <GiHamburgerMenu className='inline-block cursor-pointer lg:hidden ' size={24} />
        </nav>
    );
};

export default Navbar;
