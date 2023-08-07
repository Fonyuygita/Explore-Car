"use client"
import { updateSearchParams } from '@/utils';
import React from 'react'
import {useRouter} from "next/navigation"
import TaxiButton from './TaxiButton';

interface ShowMoreProps {
   pageNumber:number;
   isNext:boolean; 
}

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router=useRouter();
    const handleNavigationLimit=()=>{
        const newLimit=(pageNumber + 1)*10;
        const newPathname=updateSearchParams("limit", `${newLimit}`);
        router.push(newPathname);

    }
    return (
       <>
       {!isNext && (
         <TaxiButton 
         title='Show More'
         btnType='button'
         containerStyles="bg-primary-blue rounded-full text-white"
         handleClick={handleNavigationLimit}
  
         />

       )}
      
       </>
    )
}

export default ShowMore
