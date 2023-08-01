"use client"
import React from 'react'
import TaxiButton from './TaxiButton'
import Image from 'next/image'

interface Props {
    
}

const Hero = (props: Props) => {
    const handleScroll=()=>{

    }
    return (
        <div className='hero'>
            <div className="flex-1  padding-x text-red">
<h1 className="hero__title">Book A car & Get A Ride Without Stressing</h1>
<p className="hero__subtitle">You can now book your ride from any where in Cameroon without stressing.</p>
<TaxiButton title="Explore Taxi" containerStyles="btn_taxi" handleClick={handleScroll}/>
            </div>

            {/* OUR CAR IMAGE */}
            <div className="hero__image-containe">
                <div className="hero__image ">
                    <Image src="/taxi.png" alt='hero' fill className='image-contain' />
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
