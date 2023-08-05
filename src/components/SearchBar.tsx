"use client"
import React, { useState } from 'react'
import SearchDriver from './SearchDriver'
import Image from 'next/image'



// CREATE OUR SEARCH BUTTON COMPONENT
const SearchButton=({otherStyles}:{otherStyles:string})=>{
    return(
        <button type='submit' className={`-ml-3 z-10 ${otherStyles}`}>
            <Image src="/magnifying-glass.svg" alt="search" width={40} height={40} className="object-contain"/>
        </button>
    )
}


const SearchBar = () => {
    // states to use in our components
    const [driver, setDriver]=useState("")
    const [model, setModel]=useState("")
    const handleSearch=()=>{
        // logic goees here
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            
            {/* using combobox in thhis component, see component */}
            <div className="searchbar__item">

            <SearchDriver driver={driver} setDriver={setDriver}/>
            <SearchButton otherStyles="sm:hidden"/>
            </div>
            {/* search button component here */}
            <div className="searchbar__item">
                <Image src="/model-icon.png" width={25} height={25} className='absolute  w-[20px] h-[20px] ml-4' alt='car_model'/>
            <input type='text' name='model' value={model} onChange={(e)=>setModel(e.target.value)} placeholder='volgswagen...' className='searchbar__input'/>
            <SearchButton otherStyles='sm:hidden'/>
            </div>
            <SearchButton otherStyles='max-sm:hidden'/>
            
        </form>
    )
}

export default SearchBar
