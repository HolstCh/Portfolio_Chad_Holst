import React from 'react'

export default function Skill({icon, label}) {
    return (
        <li className='flex flex-col items-center hover:scale-105 text-black'>
            {icon}
            <div className='py-2'>{label}</div>
        </li>
    )
}