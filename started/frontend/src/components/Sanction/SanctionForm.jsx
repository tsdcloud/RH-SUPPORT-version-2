import { BookmarkIcon } from '@heroicons/react/24/solid'
import React, {useState, useEffect} from 'react'
import  {useFetch} from '../../hooks/useFetch'
import { usePost } from '../../hooks/usePost'
function Sanction(props) {
    const [sanction, setSanction] = useState("")
    const [sanctions,setSanctions] = useState([]);
    const {fetchData} = useFetch();
    const { postData } = usePost();

    useEffect(()=>{
        const data = fetchData("/api?end=demandes&termination=sanction&detail=0")
        .then(response => setSanctions(response));
    }, []);


    const handlePostSanction=async(e)=>{
        e.preventDefault();
        const data ={
            "id_employe": props.employee,
            "id_de": props.explanation,
            "sanction": sanction
        }

        const end = "demandes";
        const termination = "proposition";
        const detail = "0";
        const response = await postData(
            data, end, termination, detail
        );

        props.onSubmit();
    };
    
  return (
    <div className='w-full'>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="" className='text-sm font-bold'>Choisir une sanction :</label>
            <select 
                className={props.sanction?.length < 1?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                // disabled={receiverLoading}
                value={sanction}
                disabled={props.sanctions?.length <1}
                onChange={(e)=>setSanction(e.target.value)}
            >
                <option value="">Sanctions</option>
                {
                    props.sanctions?.map((sanction)=>(
                        <option value={sanction?.libelle_sanction} key={sanction?.uuid}>{sanction?.libelle_sanction}</option>
                    ))
                }
            </select>
            <div className='flex justify-end items-center mt-2'>
                <button 
                    className='p-2 bg-blue-500 rounded-md text-white flex items-center text-sm'
                    onClick={handlePostSanction}
                >
                    <BookmarkIcon className='h-5 w-5 text-white mx-2'/>{" "}
                    Proposer une sanction
                </button>
            </div>
        </form>
    </div>
  )
}

export default Sanction