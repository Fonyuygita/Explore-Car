import React from "react"
import { ClerkProvider } from '@clerk/nextjs'

const Provider=({children}:{children:React.ReactNode})=>{
    return(
        <ClerkProvider>{children}</ClerkProvider>
    )
}

export default Provider