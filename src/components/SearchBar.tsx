"use client"
import React, { useState } from 'react'
import SearchDriver from './SearchDriver'



const SearchBar = () => {
    // states to use in our components
    const [driver, setDriver]=useState("")
    const handleSearch=()=>{
        // logic goees here
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            
            {/* using combobox in thhis component, see component */}
            <SearchDriver driver={driver} setDriver={setDriver}/>
            
        </form>
    )
}

export default SearchBar
