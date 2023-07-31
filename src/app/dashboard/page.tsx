import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center text-dark gap-4 mx-auto ">
        <h1 className="text-5xl font-bold mb-3">TakeGoo.com</h1>
        <p className="text-center w-[60%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, odit velit. Itaque rerum minus dolore, eveniet voluptate necessitatibus? Reiciendis quos illo debitis quidem?</p>
        <Image src="https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" width={800} height={600} className="rounded-md" />
    </div>
    )
}

export default page
