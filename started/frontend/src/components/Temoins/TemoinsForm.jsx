import { UserPlusIcon } from '@heroicons/react/24/solid'
import React, {useState} from 'react'

function Temoins(props) {

    const [temoins, setTemoins] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(temoins)
    }

    const handleChange = (event) => {
        setSelectedOptions(event.target.selectedOptions.map((option) => option.value));
    };
  return (
    <div className='w-full'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Choisir témoin(s)</label>
            <select 
                className={props.temoins.length < 1?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                disabled={props.temoins.length <1}
                onChange={handleChange}
                multiple
            >
                <option value="">Temoins</option>
                {
                    props.temoins?.map((temoin)=>(
                        <option value={temoin.user.id} key={temoin.user.id}>{temoin.user.member.first_name}</option>
                    ))
                }
            </select>
            <div className='flex justify-end items-center mt-2'>
                <button className='p-2 bg-blue-500 rounded-md text-white flex items-center text-sm'>
                    <UserPlusIcon className='h-5 w-5 text-white mx-2'/>{" "}
                    Interpeler le témoins
                </button>
            </div>
        </form>
    </div>
  )
}

export default Temoins