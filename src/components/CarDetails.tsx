"use client"

import { CarProps } from '@/types';
import { getCarImages } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { relative } from 'path';
import React, { Fragment } from 'react'


interface CarDetailsProps {
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
    
}

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
    console.log(isOpen)
    return (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            {/* we have our dialoque here */}

            <Dialog as="div" className="relative z-10" onClose={closeModal}> 
            <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave="ease-in duration-200"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            >
                <div className="fixed inset-0  bg-opacity-25"/>
            </Transition.Child>
            {/* creating a real dialog model */}
            <div className="fixed inset-0 overflow-y-auto ">
                {/* wrapper */}
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    {/* our transition */}

                    <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave="ease-in duration-200"
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            >
{/* actual dialog panel */}
<Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl p-6 text-left bg-white transition-all flex flex-col gap-5">
{/* first we want to have button to open and close */}
<button type='button' onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
    <Image src="/close.svg" alt='close' width={20} height={20} className='object-contain' />
</button>

{/* actual content of our card */}

<div className="flex-1 flex flex-col gap-3 ">
    {/* wrapper for our image */}
    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
        <Image src={getCarImages(car)}  alt='car' fill priority className='object-contain'/>
    </div>

    {/* where our three smaller images will be contain */}
<div className="flex gap-3">
    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
    <Image src={getCarImages(car, '13')} alt='car' fill priority className='object-contain'/>
    </div>

    <div className="flex-1 relative w-full h-24  rounded-lg ">
    <Image src={getCarImages(car, '33')} alt='car' fill priority className='object-contain'/>
    </div>

    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
    <Image src={getCarImages(car, '13')} alt='car' fill priority className='object-contain'/>
    </div>
</div>
    {/* end of our three smaller images */}
    {/* end of wrapper for our image */}
</div>
{/* end of the actual content */}

{/* content */}

<div className="flex-1 flex flex-col gap-2">
    <h2 className='font-semibold text-xl capitalize'>{`${car.make}__${car.model}`}</h2>
</div>
<div className="mt-3 flex flex-wrap gap-4">
    {Object.entries(car).map(([key, value])=>(
        <div className="flex justify-between gap-5 w-full text-grey" key={key}>
<h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
<p className='text-black-100 font-semibold'>{value}</p>
        </div>
    ))}
</div>

</Dialog.Panel>

{/* end of dialog panel */}

            </Transition.Child>

                    {/* end of transition */}
                </div>
                {/* end of wrapper */}
            </div>

            {/* end o dialo  g model */}
                 
            </Dialog>            
            </Transition>  
        </>
    )
}

export default CarDetails
