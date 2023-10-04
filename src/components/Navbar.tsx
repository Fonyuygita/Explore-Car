"use client"

import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from 'next/image'
import TaxiButton from './TaxiButton'
// import DarkModeToggle from './darkModeToggle/Toggle'

const Navbar = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded || !isSignedIn) {
        return null;
      }
          
      
    return (
       <header className="navbar__header">
        <nav className='fixed top-0 z-50 !w-full border-b-2 !bg-primary-blue border-black-200 py-7 text-white flex justify-between px-6'>
            <Link href="/" className='navbar__link flex flex-center justify-between  text-lg'>
                <h2 className='font-bold text-white'>E<span className=' text-[25px]'>X</span>PLORE</h2>
                <Image src="/hero.png" alt='car logo' width={50} height={7} className='navbar__img'/>
            </Link>
            <div className="navbar__flex">
                 {isSignedIn ? (
                    <div className="flex items-center gap-3 justify-between">
            <UserButton afterSignOutUrl="/"/>
            <Link href="#" className='text-white font-bold text-lg '>{user.username}</Link>
            </div>

                ) : (<Link href="#">Not Login...</Link>)} 
               
                {/* <Link href="sign-in">
                <TaxiButton title="Sign-In"btnType="button" containerStyles='navbar__btn2'/>
                </Link>
                <Link href="sign-up">
            <TaxiButton title="Sign-Up"btnType="button" containerStyles='navbar__btn'/>
                </Link> */}
             
            </div>
        </nav>
       </header>
    )
}

export default Navbar
