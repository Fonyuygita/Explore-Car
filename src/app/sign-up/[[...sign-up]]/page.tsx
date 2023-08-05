import React from 'react'
import { SignUp } from '@clerk/nextjs'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='flex items-center justify-center flex-col mt-5 mx-auto h-[100vh] '>
            <h1 className='text-dark font-bold text-3xl'>SIGN UP</h1>
            <SignUp/>
        </div>
    )
}

export default page
