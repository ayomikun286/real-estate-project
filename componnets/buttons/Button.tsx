import Link from 'next/link'
import React from 'react'

const Button = ({ title }: { title: string }) => {
    return (
        <div className=''>
            <Link href="/" className='bg-[#4F3623] text-white px-7 py-3 ml-[5px] rounded-md text-[15px] tracking-[0px]' >{title}</Link>
        </div>
    )
}

export default Button