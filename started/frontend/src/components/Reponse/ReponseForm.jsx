import React, {useState, useEffect} from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

function ReponseForm(props) {
    const _USER = localStorage.getItem('user');

    // Response form
    const [justif, setJustif] = useState('')
    const [responseDesc, setResponseDesc] = useState('');
    const [idDe, setIdDe] = useState(props.demande);
    const [disableReponseBtn, setDisableReponseBtn] = useState(true);

    useEffect(()=>{
        if(responseDesc.length < 1){
            setDisableReponseBtn(true);
        }else{
            setDisableReponseBtn(true);
        }
    }, [responseDesc]);

    useEffect(()=>{
        
    }, [])

    /**
     * Handle explanation request response
     */
    const handleSaveResponse = async (e) => {
        e.preventDefault();
        const url = "/api";
        
        const headersList={
            Accept: '*/*',
            Authorization: 'Bearer '+JSON.parse(_USER)?.access
        }

        const formData =JSON.stringify({

            "end":"demandes",
            "termination":"reponse",
            "detail":0,

            "id_employe":JSON.parse(_USER).id,
            "id_de": idDe,
            "commentaire_reponse":responseDesc,
        });

        console.log(formData);

        const RequestInfo={
            headers: headersList,
            method: 'POST',
            body:formData 
        }

        const response = await fetch(url, RequestInfo);
        let res = response.json();
        console.log(res);
        await props.onSave(1);
        if(res.status === 201){
            // handleFetchAllDE();
            // setIsOpenned(false);
            // Notification()
        }
        
    }
  return (
    <div 
        className="w-1/2 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 p-2 ">          
        <div className='w-full'>
            <div className='w-full'>
                <form className='flex flex-col space-y-3' onSubmit={handleSaveResponse}>
                    <label htmlFor="response_file">Justif. :</label>
                    <input type="file" id='response_file' className='p-2 border-[1px] border-gray-400 rounded-lg'/>

                    {/* Description */}
                    <label htmlFor="response_description">Description. :</label>
                    <textarea 
                        value={responseDesc} 
                        name="" 
                        id="response_description" 
                        cols="30" 
                        rows="5" 
                        className='p-2 border-[1px] border-gray-400 rounded-lg focus:outline-0'
                        onChange={(e)=>setResponseDesc(e.target.value)}
                        placeholder="Votre reponse a votre demande d'explication..."
                    >
                    </textarea>
                    <button type='submit' className='flex items-center px-2 py-1 shadow-sm bg-blue-500 rounded-lg text-white'
                    disable={disableReponseBtn}
                    >
                        <PaperAirplaneIcon class="h-6 w-6 text-white" />&nbsp;&nbsp;&nbsp;&nbsp;
                        Envoyer la reponse
                    </button>
                </form>
            </div>
        </div>
        {/* <div className="flex p-2 h-full w-full overflow-y-scroll">
        <div class="flex-none  w-[250px] h-14">
            
        </div>
        <div className="grow h-14 space-y-3">
            <ExplicationDetails
                code={actualRequest.code_de}
                dateInit={actualRequest.date_init}
                initiateur={actualRequest.employer_initiateur}
                motif={motifs.find(motif => motif.uuid === actualRequest.motif)?.nom}
                description={actualRequest.description}
            />
            <CollapsibleComponent title={`Toutes les réponses (${data.filter(item => item.reponse.length > 0).length})`} className="m-y-2">
            <div className="p-2 space-y-2">
                <div className="border-l-[3px] border-blue-200 p-2">
                    <div>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <p>
                            This is the reponse to the request for explanation
                        </p>
                    </div>
                    <div className="flex items-center my-2 flex-wrap">
                        <FileComponent fileName="Permission d'absence"/>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-xs">
                            2024-03-10
                        </p>
                    </div>
                </div>
        
                <div className="border-l-[3px] border-blue-200 p-2">
                    {
                        true && 
                        <div className="flex items-center">
                            <i className="text-xs text-gray-300">[ Témoin ]</i>
                        </div>
                    }
                    <div>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <p>
                            This is the reponse to the request for explanation
                        </p>
                    </div>
                    <div className="flex items-center my-2 flex-wrap">
                        <FileComponent fileName="Permission d'absence"/>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-xs">
                            2024-03-10
                        </p>
                    </div>
                </div>
            </div>
            </CollapsibleComponent>
            <div>
                <h4>Toutes les propositions</h4>
                <hr />
                <div className="p-2 space-y-2">
                    <div className="border-l-[3px] border-red-200 p-2">
                        <div>
                            <p>John Doe</p>
                        </div>
                        <div>
                            <p>
                                This is the reponse to the request for explanation
                            </p>
                        </div>
                        <div className="flex items-center my-2 flex-wrap">
                            <FileComponent fileName="Permission d'absence"/>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-xs">
                                2024-03-10
                            </p>
                        </div>
                    </div>
        
                    <div className="border-l-[3px] border-red-200 p-2">
                        {
                            true && 
                            <div className="flex items-center">
                                <i className="text-xs text-gray-300">[ Validation ]</i>
                            </div>
                        }
                        <div>
                            <p>John Doe</p>
                        </div>
                        <div>
                            <p>
                                This is the reponse to the request for explanation
                            </p>
                        </div>
                        <div className="flex items-center my-2 flex-wrap">
                            <FileComponent fileName="Permission d'absence"/>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-xs">
                                2024-03-10
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-none  w-[250px] h-14">
            
        </div>
        
        </div> */}
    </div>

  )
}

export default ReponseForm