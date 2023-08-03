"use client"
import { DriversProps } from '@/types'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'


const SearchDriver = ({ driver, setDriver }: DriversProps) => {
    const [query, setQuery] = useState("")
    // filtering off the right info___________________________

    const filteredManufacturer = query === " " ? manufacturers : manufacturers.filter((items) => (
        items.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))


    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className="combobox__first">
                    {/* image */}
                    <Combobox.Button className="combobox__btn">
                        <Image src="/car-logo.svg" width={30} height={30} alt='driver image' className='combobox__img'/>
                    </Combobox.Button>
                    {/* input */}
                    <Combobox.Input className="search-manufacturer__input" placeholder='Search driver___' displayValue={(driver: string) => { driver }} onChange={(e) => setQuery(e.target.value)} value={driver} />

                    {/*transition  */}
                    <Transition as='Fragment'
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        {/* here we have our options */}
                        {/* map through our filtered information */}
                        {filteredManufacturer.length === 0 && query !== "" ? (
                            <Combobox.Option value={query} className="search-manufacturer__options">
                                Create "{query}"
                            </Combobox.Option>
                        ) :
                            // else part, if the data exist, then we want to map
                            (
                                filteredManufacturer.map((item) => (
                                    <Combobox.Option key={item}
                                    className={({active})=>`position|__relative search-manufacturer_option ${active ? 'active-search__true' : 'active-search__false'}`} value={item}
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))

                            )

                        }
                    </Transition>

                </div>
            </Combobox>
        </div>
    )
}

export default SearchDriver
