"use client"
import { TaxiButtonProps } from '@/types'
import React from 'react'



const TaxiButton = ({title, containerStyles, handleClick}:TaxiButtonProps) => {
    return (
        <button
        disabled={false}
        type={"buton"}
        className={`custom-btn ${containerStyles}`}
        onClick={()=>{handleClick}}
        >
<span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default TaxiButton
