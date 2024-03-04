import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
function Tab(props) {
    let tabRef = useRef(props.tabRef);
    const [activeTab, setActiveTab] = useState(props.activeTab);

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     console.log(tabName)
//   };


  return (
    // <li className={"bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px "+props.className}>
    //     <Link id={props.id} to={props.to} ref={tabRef}>{props.title}</Link>
    // </li>
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