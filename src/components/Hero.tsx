"use client"
import React, {useState, useEffect} from 'react'
import TaxiButton from './TaxiButton'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    
}

const Hero = (props: Props) => {
 
    const [jump, setJump] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      setJump(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


    const handleScroll=()=>{

    }
    return (
        <div className='hero'>
            <div className="hero__subDiv">
<h1 className="hero__title !text-[#444]">Explore the Power Of Your model, Search & Explore with Ease</h1>
<p className="hero__subtitle">Unleash the potential of your models by finding and exploring with confidence.</p>

<Link href="/sign-in">
<TaxiButton title="SignIn" containerStyles="btn_taxi btn__arrange !px-[20px]" handleClick={handleScroll}/>
</Link>
            </div>

            {/* OUR CAR IMAGE */}
            <div className="hero__image-container">
                <div className="hero__image min-h-screen">
                    <Image src="/heroImage.png " alt='hero' fill className={`image-contain ${jump && "animate-bounce" } `} />
                  
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    )
}

export default Hero
