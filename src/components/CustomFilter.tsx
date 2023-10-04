"use client"
import { customFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { space } from 'postcss/lib/list'
import React, { useState, Fragment } from 'react'


// ____________________________________STATES AND FUNCTIONS HERE______________________________________________________________________________________


const CustomFilter = ({title, options}:customFilterProps) => {
    const router=useRouter()
    const [selected, setSelected]=useState(options[0])
    const [fuel, setFuel]=useState(options[0]);

    // update params function
    const handleUpdateParams=(e:{title:string, value:string})=>{

        // receive our function froom the utils folder(index.ts)
        const newPathName=updateSearchParams(title, e.value.toLowerCase());
        router.push(newPathName);
    }


    // _____________________________________________JSX CODE HERE_______________________________________________________
    return (
        <div className='w-fit'>

            {/* _________________________________LIST BOX____________________________________________________ */}
            <Listbox
            value={selected}
            onChange={(e)=>{
                setSelected(e)
                handleUpdateParams(e)               
            }}
            >
          <div className="relative w-fit z-10">
            <Listbox.Button className="custom-filter__btn ">
                {/* show what is selected */}
           <span className='block truncate'>{selected.title}</span>
           <Image
           src="/chevron-up-down.svg"
           width={20}
           height={20}
           alt='chevron'
           className='ml-4 object-contain ]'
           />
            </Listbox.Button>

            {/* create our transition here */}

          <Transition as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
{/* our actual list here */}
<Listbox.Options className="custom-filter__options">
    {options.map((option)=>(
<Listbox.Option
key={option.title}
value={option}
className={({active})=> `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-100'}`}
>

    {({selected})=>(
        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.title}</span>
    )}
</Listbox.Option>

    ))}
</Listbox.Options>
          </Transition>
            </div>       

            </Listbox>
            {/* _______________________________________________________________________________________________ */}
        </div>
    )
}

export default CustomFilter
