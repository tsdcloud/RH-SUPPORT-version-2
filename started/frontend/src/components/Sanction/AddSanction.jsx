import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React, {useState, useEffect} from 'react'
import { useFetch } from '../../hooks/useFetch';
import {usePost} from '../../hooks/usePost.js';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function AddSanction(props) {

  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);
  const [nom, setNom] = useState('');
  const [motifs, setMotifs] = useState([]);
  const [selectedMotifs, setSelectedMotifs] = useState([]);
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [puissance, setPuissance] = useState(0);
  const [description, setDescription] = useState('');
  const userEntity = JSON.parse(localStorage.getItem('user'))?.entity[0].id;

  const { isLoading, error, fetchData } = useFetch();
  const { responseData, postData } = usePost();

  const handleClose=()=>{}

  useEffect(()=>{
    if(nom.length > 0){
      setSubmitIsDisabled(false);
    }else{
      setSubmitIsDisabled(true);
    }
  },[nom]);

  useEffect(()=>{
    if(nom && motifs){
      setSubmitIsDisabled(false);
    }else{
      setSubmitIsDisabled(true);
    }
  }, [motifs, nom])

  useEffect(()=>{
    fetchData("/api?end=motifs&termination=motifs&detail=0")
    .then(
      data =>setMotifs(data)
    )
  }, [])

  const handleAddSanction=async(evt) => {
    evt.preventDefault();
    const data = {
      libelle_sanction: nom,
      description,
      motifs: selectedMotifs,
      id_entity:userEntity,
      power:puissance
    }

    
    const callback = props.onSubmit;
    const sanction = await postData(
        data, "demandes", "sanction", 0, callback
      );
  };


  return (
    <form className='flex flex-col space-y-3' onSubmit={props.onSubmit}>
        <div className='flex flex-col'>
            <label htmlFor="" className=''>Nom :</label>
            <input 
              type="text" 
              value={nom}
              className='p-2 rounded-lg bg-gray-50 text-md outline-0 border-[1px] border-gray-200' placeholder='Nom de la sanction'
              onChange={e=>setNom(e.target.value)}
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className=''>Puissance :</label>
            <input 
              type="number" 
              value={puissance}
              className='p-2 rounded-lg bg-gray-50 text-md outline-0 border-[1px] border-gray-200' placeholder='Puissance de la sanction'
              onChange={e=>setPuissance(e.target.value)}
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='flex items-center'>
              {
              isLoading && 
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 15,
                      }}
                      spin
                    />
                  }
                />
              }
              Motifs :
            </label>
            <select 
              type="number"
              className='p-2 rounded-lg bg-gray-50 text-md outline-0 border-[1px] border-gray-200' 
              multiple
              onChange={(e)=>{
                const options = [...e.target.selectedOptions];
                const values = options.map(option => option.value);
                setSelectedMotifs(values);
                // setSelectedMotifs([...e.target.options].filter(o => o.selected).map(o => o.value))
              }}
            >
              {
                motifs.map((motif)=><option value={motif?.uuid} key={motif?.uuid}>{motif?.nom}</option>)
              }
              
            </select>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className=''>Description :</label>
            <textarea 
              type="text" 
              value={description}
              className='p-2 rounded-lg bg-gray-50 text-md outline-0 border-[1px] border-gray-200' placeholder='Description de la sanction'
              onChange={e=>setDescription(e.target.value)}
            >
            </textarea>
        </div>
        <button 
          type='submit' 
          disabled={submitIsDisabled}
          onClick={handleAddSanction}
          className={`p-2 text-white ${submitIsDisabled ?'bg-blue-200 cursor-not-allowed':'bg-blue-500 active:shadow-sm'}  flex space-x-2 items-center shadow-lg rounded-lg`}>
          <PlusCircleIcon className='h-6 w-6 text-white'/>
          <span>Ajouter la sanction</span>
        </button>
    </form>
  )
}

export default AddSanction