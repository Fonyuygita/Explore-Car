import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default async function Home() {
const allCars=await fetchCars()

// check if data is empty
const isItEmpty=!Array.isArray(allCars) || allCars.length>1 || !allCars;

  return (
    <main className='overflow__h'>
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
            <CustomFilter title="name" />
            <CustomFilter title="car_type" />
          </div>
        </div>
<SignIn/>

        {isItEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car)=>(
              <CarCard car={car}/>
            ))}
          </div>
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
