import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
function Tab(props) {
    let tabRef = useRef(props.tabRef);
    const [activeTab, setActiveTab] = useState(props.activeTab);
  return (
        <li
          className={`${props.className} relative`}
        >
          <Link to={props.to} onClick={props.onClick} className='flex items-center space-x-2'>
            <div className='text-xs'>
            {props.icon}
            </div>
            <p className='font-semibold text-xs'>
            {props.title}
            </p>
          </Link>
          {
            props.number !== undefined &&
            <span className='bg-red-500 absolute -top-2 -left-2 text-white p-1 text-xs rounded-full'>{props.number>100? "99+" :props.number}</span>
          }
        </li>
  )
}

export default Tab