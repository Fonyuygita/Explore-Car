"use client"
import { TaxiButtonProps } from '@/types'
import React from 'react'



const TaxiButton = ({title, containerStyles, handleClick, btnType}:TaxiButtonProps) => {
    return (
        <button
        disabled={false}
        type={btnType || "buton"}
        className={`custom-btn ${containerStyles}`}
        onClick={()=>{handleClick}}
        >
<span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default TaxiButton
