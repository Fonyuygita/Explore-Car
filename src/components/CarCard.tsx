"use client"
import { CarProps } from '@/types'
import { calculateCarRent, getCarImages } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import TaxiButton from './TaxiButton';
import CarDetails from './CarDetails';


interface CarCardProps {
    car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    // OUR STATES HERE
    const[isOpen, setIsOPen]=useState(false)
    // destructure our data for use now
    const  {city_mpg, year, make, model, transmission, drive}=car
    // get our calculated car rent
    const carRent=calculateCarRent(city_mpg, year)
    return (
        <>
            <div className="car-card group">
                <div className='car-card__content'>
                    <h2 className='car-card__content-title'>{make}</h2>
                </div>
                <p className='card__para'>
                    {/* Render our car rent here, we are going to calculate it, base on the year or the miledge */}
                    <span className='card__span1'>FCFA</span>
                    {carRent}
                    <span className='card__span2'>/day</span>

                </p>

                {/* fetching image from another source */}
                <div className="card__img">
                    <Image src={getCarImages(car)} alt='' fill priority className='object-contain'/>
                </div>

                {/* our icons and disappering btn ehrn hovered */}
                <div className="relative flex w-full mt-2">


                    <div className="flex group-hover:invisible w-full justify-between text-gray">
                        <div className="flex flex-col justify-center items-center gap-2">
                      {/* image here */}
                      <Image src="/stearing-wheel.svg" alt='icon' width={20} height={20}/>
                      <p className='text-[14px]'>
                        {transmission==='a' ? 'Automatic' : 'Manual'}
                      </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-2">
                      {/* image here */}
                      <Image src="/tire.svg" alt='icon' width={20} height={20}/>
                      <p className='text-[14px]'>
                        {drive.toUpperCase()}
                      </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-2">
                      {/* image here */}
                      <Image src="/gas.svg" alt='icon' width={20} height={20}/>
                      <p className='text-[14px]'>
                       {city_mpg} MPG
                      </p>
                        </div>
                    </div>

                    <div className='car-card__btn-container'>
<TaxiButton title='View More' containerStyles='w-full rounded-full py-[12px] bg-primary-blue px-6' textStyle="text-white text-[14px] leading-17px font-bold" rightIcon="/right-arrow.svg" handleClick={()=>setIsOPen(true)}/>
                </div>

                </div>

                {/* car details component to show our pop ups dialogue */}
                <CarDetails isOpen={isOpen} closeModal={()=>setIsOPen(false)} car={car} />
        
            </div>
        </>
    )
}

export default CarCard
