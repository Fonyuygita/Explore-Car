import { MouseEventHandler } from "react";

export interface TaxiButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}