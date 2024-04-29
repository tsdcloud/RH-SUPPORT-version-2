import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

function Entity() {
    const navigate = useNavigate();
    const { fetchData, postData } = useFetch("");
    const [datSource, setDataSource] = useState([]);
    useEffect(()=>{
        const handleFetchData = async()=>{
            let data = await fetchData("/entities");
            if(data.length > 0){
                navigate("/dashboard")
            }

            console.log(data);
            setDataSource(data);
        }

        handleFetchData();

    }, []);
  return (
    <div className='h-screen w-full overflow-hidden'>
        <div className='h-full w-full pt-7 overflow-y-auto'>
            <p className='text-center text-2xl text-gray-600'>Choisir une entitée</p>
            <div className='flex flex-wrap justify-between items-center p-8'>
                {
                    datSource.map(entity=>(
                        <div className='w-[300px] h-[300px] bg-white border-lg shadow-md p-2' key={entity.id} >
                            <div 
                                className='w-full h-1/2'
                                style={{
                                    background: `url(data:image/png;base64,${entity.logo})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat : "no-repeat",
                                    backgroundPosition: "center center"
                                }}
                            >
                                {/* <img src={} alt="" className='w-full h-full object-fit'/> */}
                            </div>
                            <div className='w-1/2'>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Entity