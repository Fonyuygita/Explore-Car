import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
<div className='overflow__h'>
  <Hero/>

  {/* CAR CHOICE */}
  <div className="home__car-choice" id='discover'>
{/* container for car choice */}
    <div className=".home__car-text-container">
      <h1 className='home__text'>Find Your Driver</h1>
      <p>Find Your favourite driver</p>
    </div>
{/* filtering off your best driver */}
<div className="home__filters">
  <SearchBar/>
<div className="home__filter-container">
  <CustomFilter title="name"/>
  <CustomFilter title="car_type"/>
</div>
</div>

  </div>
</div>   
   )
}
