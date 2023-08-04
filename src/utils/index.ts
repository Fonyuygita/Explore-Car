// const axios = require('axios');

// const options = {
//   method: 'GET',
// //   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': 'a3ac747326msh1e6e85911e276fap1c4375jsne5cfab23fa8f',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// create our endpoint here and make our request

export async function fetchCars(){
    const headers= {
        'X-RapidAPI-Key': 'a3ac747326msh1e6e85911e276fap1c4375jsne5cfab23fa8f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

    //   make our request here
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {headers:headers});
    const data=await response.json();
    console.log(data)
    return data;

    }

    // CALCULATE CRITERIA FOR OUR CAR RENT HERE

    export const calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      
        return rentalRatePerDay.toFixed(0);
      };
      