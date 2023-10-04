"use client"
import React, { useState } from 'react'
import SearchDriver from './SearchDriver'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



// CREATE OUR SEARCH BUTTON COMPONENT_____________________________________________________________________________
const SearchButton = ({ otherStyles }: { otherStyles: string }) => {
    return (
        <button type='submit' className={`-ml-3 z-10 bg-black ${otherStyles}`}>
            <Image src="/magnifying-glass.svg" alt="search" width={40} height={40} className="object-contain " />
        </button>
    )
}
// _______________________________________________________________________________________________________



const SearchBar = () => {
    // states to use in our components
    const router=useRouter()
    const [driver, setDriver] = useState("")
    const [model, setModel] = useState("")
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        // logic goees here
        // prevent default reloading of the page
        e.preventDefault()
        if (driver === "" && model === "") {
            return alert("Please fill in the search input")
        }

        // when ever we submit our search, we awant tggo obtain ouor oarams as shown 
        updateSearchParams(driver.toLowerCase(), model.toLowerCase());


    }

    // Function to update our params in the url's__________________________________________________

    const updateSearchParams = (driver: string, model: string) => {

        const searchParams = new URLSearchParams(window.location.search);
        //  update search paams
        if (model) {
            searchParams.set('model', model)
        }
        else {
            searchParams.delete('model')
        }

        // same for the driver
        if (driver) {
            searchParams.set('driver', driver)
        }

        else {
            searchParams.delete('driver')
        }

        // get the actual url with the desired search params
        const newPathName=`${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName);
    }
    // ______________________________________________________________________________________________________________________


    // OUR JSX HERE_____________________________________________________________________________________________
    return (
        <form className='searchbar' onSubmit={handleSearch}>

            {/* using combobox in thhis component, see component */}
            <div className="searchbar__item">

                <SearchDriver driver={driver} setDriver={setDriver} />
                <SearchButton otherStyles="sm:hidden" />
            </div>
            {/* search button component here */}
            <div className="searchbar__item">
                <Image src="/model-icon.png" width={25} height={25} className='absolute  w-[20px] h-[20px] ml-4' alt='car_model' />
                <input type='text' name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='volgswagen...' className='searchbar__input' />
                <SearchButton otherStyles='sm:hidden ' />
            </div>
            <SearchButton otherStyles='max-sm:hidden' />

        </form>
    )
}

export default SearchBar
