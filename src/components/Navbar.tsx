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
            <TaxiButton title="Sign-In"btnType="button" containerStyles='navbar__btn2'/>
            <TaxiButton title="Sign-Up"btnType="button" containerStyles='navbar__btn'/>
            </div>
        </nav>
       </header>
    )
}

export default Navbar
