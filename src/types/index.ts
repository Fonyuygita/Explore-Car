import { MouseEventHandler } from "react";

export interface TaxiButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyle?:string;
    rightIcon?:string;
    isDissable?:boolean;
}

export interface DriversProps{
    driver:string;
    setDriver:(driver:string)=>void
}

// interface for oujr api data
export interface CarProps{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}



// searchParams props

export interface searchParamsProps{
    driver:string;
    year:number;
    fuel:string;
    limit:number;
    model:string

}

// custom filter and option props interfaces
export interface OptionsProps{
title:string;
value:string;
}

// customfilter props
export interface customFilterProps{
    title:string;
    options:OptionsProps[]
} 