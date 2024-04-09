import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

function PageHeader(props) {
  return (
    <div className='flex justify-between px-4'>
        <div className='relative w-4/5'>
            <input 
                className='bg-gray-50 text-md px-2 py-1 border-[1px] border-gray-200 text-gray-800 rounded-lg text-sm focus:outline-0 w-2/5' 
                type='search' 
                placeholder={props.searchPlaceholder}
                value={props.value}
                onChange={props.onSearch}
            />
        </div>
        <div className={`flex items-center space-x-1 ${props.disableButton ?"hidden":""}`}>
            <button 
                className='p-2 shadow-sm rounded-md bg-blue-600 text-white text-sm flex items-center justify-center space-x-2'
                onClick={props.buttonOnClick}>
                <PlusIcon class="h-4 w-4 text-white" />
                {props.buttonText}
            </button>
        </div>
    </div>
  )
}

export default PageHeader