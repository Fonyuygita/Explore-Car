import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


interface Props {

}

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="footer__links-container">
                {/* logo */}
                <div className="footer__rights ">
                <Link href="/" className='navbar__link flex flex-center justify-between  text-lg'>
                <h2 className='font-bold text-blue-900'>E<span className=' text-[25px]'>X</span>PLORE</h2>
                <Image src="/hero.png" alt='car logo' width={50} height={7} className='navbar__img'/>
            </Link>
                    <p className='footer__p'>
                        TaxiHome 2023 <br /> All right Reserved &copy
                    </p>
                </div>

                <div className="footer__links">
                    {/* first map through the footer headers */}
                    {footerLinks.map(link => (
                        <div className="footer__link" key={link.title}>
                            <h3 className='footer__h'>{link.title}</h3>

                            {/* MAP through the individual lonks, to getd the link items */}
                            {link.links.map((item) => (
                                <Link href={item.url} key={item.title} className='text-gray-500'>{item.title}</Link>
                            ))}.
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center fle-wrap mt-10 border-t border-gray-100 sm:px-6 px-6 py-10">
                    <div className="footer__copyrights-links">
                        <Link href="/" className='text-gray-500'>
                            Privacy Policy
                        </Link>

                        <Link href="/" className='text-gray-500'>
                            Terms of use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
