import React from 'react'
import { SignUp } from '@clerk/nextjs'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div>
            <h1 className='text-dark font-bold text-3xl'>SIGN UP</h1>
            <SignUp/>
        </div>
    )
}

export default page
