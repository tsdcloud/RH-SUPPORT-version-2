import React, {useEffect, useState} from 'react'
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function FileComponent(props) {

  return (
    <span className={`${props.className} bg-blue-500 p-1 flex items-center cursor-pointer space-x-2`}>
        <span className='text-white text-xs'>
            {props.fileName}
        </span>
        <span className='border-l-[1px] border-white'>
          <ArrowDownTrayIcon class="h-3 w-3 text-white" />
        </span>
    </span>
  )
}

export default FileComponent