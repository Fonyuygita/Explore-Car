import { MouseEventHandler } from "react";

export interface TaxiButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?:string;
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