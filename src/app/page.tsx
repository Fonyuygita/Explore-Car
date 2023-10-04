
import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import  { useContext } from "react";
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { CarProps } from '@/types'
import { fetchCars } from '@/utils'

import Image from 'next/image'

export default async function Home({searchParams}:any) {



const allCars=await fetchCars({
  driver:searchParams.driver || "",
  year:searchParams.year||2022,
  fuel:searchParams.fuel || "",
  limit:searchParams.limit || 10,
  model:  searchParams.model || ""
})

// check if data is empty
const isItEmpty=!Array.isArray(allCars) || allCars.length>1 || !allCars;


  return (
    <main className={`overflow-hidden}`}>
      <Hero />

      {/* CAR CHOICE */}
      <div className="home__car-choice" id='discover'>
        {/* container for car choice */}
        <div className=".home__car-text-container">
          <h1 className='home__text'>Find Your Driver</h1>
          <p>Find Your favourite driver</p>
        </div>
        {/* filtering off your best driver */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>


        {isItEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car:CarProps)=>(
              // eslint-disable-next-line react/jsx-key
              <CarCard car={car}/>
            ))}
          </div>
          <ShowMore pageNumber={(searchParams.limit || 10)/10} isNext={(searchParams.limit || 10) > allCars.length}/>
        </section>

      ): (
        <div className="card__p">
          <p>There was an error fetching the data, please try again</p>
        </div>
      )}

      </div>

      {/* if there is data we want to map through it */}
   
    </main>
  )
} 
