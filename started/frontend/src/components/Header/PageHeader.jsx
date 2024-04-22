import React from 'react'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
function PageHeader(props) {
  return (
    <div className='p-3 border-2 border-grey-200 rounded-md flex justify-between items-center'>
        <div className='flex relative'>
          <MagnifyingGlassIcon className='text-blue-500 p-2 absolute h-3 w-3 r-0 t-0 focus:outlined-0'/>
          <input 
          type="search" 
          placeholder={props.inputPlaceholder} 
          className='text-sm bg-gray-100 text-gray-500 border-[1px] border-gray-200 rounded-lg p-2'
          onChange={props.onSearch}
          />
        </div>
        <button className='bg-blue-500 text-white text-sm p-2 rounded-md shadow-sm flex items-center' onClick={props.onButtonClick}>
          <PlusIcon className='h-3 w-3 weight-6'/>
          <span>{props.buttonText}</span>
        </button>
    </div>
  )
}

export default PageHeader