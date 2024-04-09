import React, {useContext, useEffect, useState} from 'react'
import { AUTHCONTEXT } from '../../context/AuthContext'
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';

function TopBar() {
  
  // const {user} = useContext(AUTHCONTEXT);
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [profile, setProfile] = useState({})

  useEffect(()=>{
    let json = JSON.parse(user)
    setProfile(json);
  },[]);

  return (
    <div className='relative w-full px-4 bg-blue-500 py-2 shadow-md flex justify-between items-center'>
        <h3 className='text-white font-semibold'>RH Support</h3>
        <div className='flex items-center space-x-1'>
          <div className='borber-l-[1px] borber-r-[1px] border-white px-2 relative'>
            <BellIcon className="h-5 w-5 text-white rotate-1" />
            <div className='p-1 bg-red-500 rounded-full absolute right-2 top-0'></div>
          </div>
          <div className='flex items-center space-x-2 border-l-[1px] border-white'>
            {/* <div className='p-3 rounded-full bg-gray-500'></div> */}
            <h5 className='text-white font-semibold text-sm px-2 cursor-pointer'>{`Hi, ${profile?.member?.last_name}`}</h5>
          </div>
        </div>
        <div className='absolute hidden px-2 py-3 bg-white shadow-md rounded-md w-[200px] max-w-[200px]  flex-col space-y-3 top-10 right-[10px]'>
          <Link to={'#'} className='flex items-center space-x-2'>
            <UserIcon className='w-6 h-6 text-gray-400' />
            {`${profile?.member?.first_name} ${profile?.member?.last_name}`}
          </Link>
          <Link to={'#'} className='flex items-center space-x-2'>
            <CogIcon className='w-6 h-6 text-gray-400' />
            Parametres
          </Link>
        </div>
    </div>
  )
}

export default TopBar