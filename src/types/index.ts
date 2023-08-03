import { MouseEventHandler } from "react";

export interface TaxiButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}

export interface DriversProps{
    driver:string;
    setDriver:(driver:string)=>void
}