import Link from 'next/link'
import React from 'react'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import TaxiButton from './TaxiButton'


const Navbar = () => {
    
 
    return (
       <header className="navbar__header">
        <nav className='navbar__nav'>
            <Link href="/" className='navbar__link'>
                <Image src="/logo.svg" alt='car logo' width={118} height={18} className='navbar__img'/>
            </Link>
            <div className="navbar__flex">
                <Link href="sign-in">
                <TaxiButton title="Sign-In"btnType="button" containerStyles='navbar__btn2'/>
                </Link>
                <Link href="sign-up">
            <TaxiButton title="Sign-Up"btnType="button" containerStyles='navbar__btn'/>
                </Link>
                <UserButton/>
            </div>
        </nav>
       </header>
    )
}

export default Navbar
