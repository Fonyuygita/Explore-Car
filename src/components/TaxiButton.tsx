"use client"
import { TaxiButtonProps } from '@/types'
import React from 'react'
import { Image } from 'next/dist/client/image-component'



const TaxiButton = ({title, containerStyles, handleClick, btnType, textStyle, rightIcon}:TaxiButtonProps) => {
    return (
        <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
<span className={`flex-1 ${textStyle}`}>{title}</span>
{rightIcon && (
    <div className="relative w-6 h-5">
        <Image src={rightIcon} alt="" fill/>
    </div>
)}
        </button>
    )
}

export default TaxiButton
