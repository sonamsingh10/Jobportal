import React from 'react'
import { Badge } from './ui/badge'

export default function LatestJobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer'>
       <div>
        <h1 className='font-medium text-lg'>Comapny Name</h1>
        <p className='text-sm text-gray-500'>India</p>
       </div>
       <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptas!</p>
       </div>
       <div className='flex items-center mt-4 gap-2'>
        <Badge className={'font-bold'} >12 Position</Badge>
        <Badge className={' font-bold'}>Part Time</Badge>
        <Badge className={'font-bold'}>24LPA</Badge>
       </div>
    </div>
  )
}
