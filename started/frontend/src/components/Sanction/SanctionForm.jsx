import { BookmarkIcon } from '@heroicons/react/24/solid'
import React, {useState} from 'react'

function Sanction() {
    const [sanction, setSanction] = useState("")
  return (
    <div className='w-full'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="" className='text-sm font-bold'>Choisir une sanction :</label>
            <select 
                className={props.temoins.length < 1?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                // disabled={receiverLoading}
                value={sanction}
                disabled={props.temoins.length <1}
                onChange={(e)=>setSanction(e.target.value)}
                multiple
            >
                <option value="">Sanctions</option>
                {
                    props.sanctions?.map((sanction)=>(
                        <option value={sanction?.user.id} key={sanction?.user.id}>{sanction?.user.member.first_name}</option>
                    ))
                }
            </select>
            <div className='flex justify-end items-center mt-2'>
                <button className='p-2 bg-blue-500 rounded-md text-white flex items-center text-sm'>
                    <BookmarkIcon className='h-5 w-5 text-white mx-2'/>{" "}
                    Proposer une sanction
                </button>
            </div>
        </form>
    </div>
  )
}

export default Sanction