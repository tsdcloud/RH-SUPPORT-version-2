import { Table, Modal, Dropdown, Drawer, Space, Button, Collapse } from 'antd'
import React, {useEffect, useState, useMemo} from 'react'
import { useLocation, Link } from 'react-router-dom';
import { PlusIcon, EllipsisHorizontalIcon,UserPlusIcon, ShieldExclamationIcon, ReceiptRefundIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import Tab from '../../components/Tab/Tab';
import ReponseForm from '../../components/Reponse/ReponseForm.jsx';
import FileComponent from '../../components/FileComponent/FileComponent.jsx';
import ExplicationDetails from '../../components/ExplicationDetails/ExplicationDetails.jsx';
import CollapsibleComponent from '../../components/CollapsibleComponent/CollapsibleComponent.jsx';
import DetailCard from '../../components/DetailCard/DetailCard.jsx';



/**
 * On this page, the user should be able to get the following information :
 * 1- All the requests for explanation initiated
 * 2- All the requests for explanation received
 * 3- All the requests answered
 * 4- All the requests awaiting for propositions
 * 5- All the 
 */

const TYPE_DE = {
    init: "initier_de",
    upload: "upload_de"
}

// const REQUEST_STEP = {
//     all_demande,
//     request_intiated,
//     request_received
// }


function DemandeExplication() {

    const [count, setCount] = useState(0)
    const[isOpenned, setIsOpenned]=useState(false);
    const [data, setData] = useState([]);
    const [actualRequest, setActualRequest] = useState({})
    const [dataSource, setDataSource] = useState([]);
    const _USER = localStorage.getItem('user');
    const userEntity = JSON.parse(localStorage.getItem('user'))?.entity[0].id;
    const [path, setPath] = useState("explanation");
    const [receiverLoading, setReceiverLoading] = useState(true);
    const [motifLoading, setMotifLoading] = useState(true);
    const [typeDE, setTypeDE] = useState(TYPE_DE.init)
    const [motifs, setMotifs] = useState([]);

    const [isCollapsed, setIsCollapsed] = useState(false);

    
    // Form values
    const [initiator, setInitiator] = useState(null);
    const [receivers, setReceivers] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [motif, setMotif] = useState('');
    const [description, setDescription] = useState('');



    const [reponseFormIsOpenned, setReponseFormIsOpenned] = useState(false);
    const [temoinFormIsOpenned, setTemoinFormIsOpenned] = useState(false);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleSetActualRequest=(id)=>{
        const actualRequest = dataSource.filter(data=>{
            return data.uuid == id
        });
        setActualRequest(...actualRequest);
    }

    const handleOpenResponse=(id)=>{
        handleSetActualRequest(id)
        setOpen(true)
    }

    const handleOnReponseSaved=()=>{
        alert("Response sent");
        handleFetchAllDE();
        // handleSetActualRequest(id)
        setOpen(false)
    }

    const location = useLocation();

    const handleTabClick = (path) => {
        // setActiveTab(tabName);
        setPath(path)
        // console.log(location.pathname);
    };

    const columns = [
          {
            title: '#',
          },
          {
            title: 'No Ref',
            dataIndex: 'code_de',
            key: 'code_de',
          },
          {
            title: 'Motifs',
            dataIndex: 'motif',
            key: 'motif',
            render:(record, text)=>{
                let motifName = motifs.find(motif => motif.uuid === text.motif )
                console.log(motifName?.nom);
                return <p>{motifName?.nom}</p>
            }
          },
          {
            title: 'Destinataire',
            dataIndex: 'employer_recepteur',
            key: 'employer_recepteur',
            // render:((text)=>{
            //     let destinataire = receivers.filter(receiver=>receiver.id == text)
            //     console.log(receivers)
            //     return <>{destinataire}</>
            // })
          },
          {
            title: 'Initiateur',
            dataIndex: 'employer_initiateur',
            key: 'employer_initiateur',
            // render:((text)=>{
            //     let destinataire = receivers.filter(receiver=>receiver.id == text)
            //     console.log(receivers)
            //     return <>{destinataire}</>
            // })
          },
          {
            title: 'Date initiation',
            dataIndex: 'date_init',
            key: 'date_init',
          },
          {
            title: 'Actions',
            render:(record, text)=><EllipsisHorizontalIcon onClick={()=>handleOpenResponse(record.uuid)} className="h-8 w-8 text-gray-500 cursor-pointer" />
          },
    ];

    /**
     * Handle get all Demande Explicatio
     */
    const handleFetchAllDE=async ()=>{
        let headersList = {
            "Accept": "*/*",
        }
       let url = "/api?end=demandes&termination=demande&detail=0"
       let response = await fetch(url, { 
         method: "GET",
         headers: headersList
       });
       
       let res = await response.json();
       if(res.status === 200){
        setData(res.results);
        setDataSource(res.results);
       }
    }

    /**
     * Returns the motifs for a given entity
     */
    const handleGetMotifs = async () => {
    
        let headersList = {
            "Accept": "*/*",
            "Authorization": "Bearer "+JSON.parse(_USER).access
        }
              
        let response = await fetch("/api?end=motifs&termination=motifs&detail=0", { 
            method: "GET",
            headers: headersList
        });
        
        if(response.status === 200){
            let result = await response.json();
            let data = await result.results;
            setMotifLoading(false);
            setMotifs(data);
        }
    }

    /**
     * Handle get all employees
     */
    const getEntityEmployees = async (id) => {
        const url= `api/?end=entity&termination=firm&detail=1&pid=${id}&action=employees`;
        let RequestInfo = {
            method: "GET",
            maxBodyLength: Infinity,
            headers: {
                Authorization: `Bearer ${JSON.parse(_USER).access}`,
            },
        };
        const response = await fetch(url, RequestInfo);
        const result = await response.json();
        if(response.ok){
            let data = result?.results;
            const actualUser = await data.filter(users => users.user.id === JSON.parse(_USER).id);
            const withoutUser = await  data
                                        .filter(users => users.user.id !== JSON.parse(_USER).id)
                                        .filter(users => users.rank.power >= actualUser[0].rank.power);

            setReceivers(await withoutUser);
            await setReceiverLoading(false);
            return withoutUser;
        }
        return [];
    };

    /**
     * Upload files to the file endpoint
     */
    const handleFileUploaded=async(e)=>{
        const file = e.target.value[0]
        if(!file) return;
    }

    /**
     * Returns the list of employees from a given entity 
     */
    const handleSaveDE = async () => {
        const url = "/api";
        
        const headersList={
            Accept: '*/*',
            Authorization: 'Bearer '+JSON.parse(_USER)?.access
        }

        const formData =JSON.stringify({
            "end":"demandes",
            "termination":"demande",
            "detail":0,

            "employer_initiateur":JSON.parse(_USER).id,
            "employer_recepteur":receiver,
            "description":description,
            "motif":motif
        });

        const RequestInfo={
            headers: headersList,
            method: 'POST',
            body:formData 
        }

        const response = await fetch(url, RequestInfo);
        let res = response.json();
        if(res.status === 200){
            handleFetchAllDE();
            setIsOpenned(false);
            Notification()
        }
        
    }

    useEffect(()=>{
        getEntityEmployees(userEntity);
        // setReceivers(entitiesEmployees);
        handleFetchAllDE(); 
        handleGetMotifs();
        const explanations = data.filter(item=> item.reponse.length == 0);
        setDataSource(explanations);
    }, []);

    
    
  return (
    <>
        <div className='p-5'>
            
            <Modal
                title="Demande d'explication"
                centered
                open={isOpenned}
                onCancel={() => setIsOpenned(false)}
                onOk={handleSaveDE}
                footer={
                    (_, {CancelBtn})=>(
                        <>
                        <CancelBtn />
                        <button
                            className='text-white rounded-md shadow-sm mx-3 bg-blue-500 px-3 py-1'
                            onClick={handleSaveDE}
                        >
                            Initier
                        </button>
                        </>
                    )
                }
            >
                <form onSubmit={()=>{}} className='px-2 space-y-2 w-full h-[400px] max-h-[400px] overflow-y-scroll'>
                    {/* Type the of demandes */}
                    <select 
                    value={typeDE}
                    onChange={e=>setTypeDE(e.target.value)}
                    className={'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'}>
                        <option value={TYPE_DE.init}>Initier une demande d'explanation</option>
                        <option value={TYPE_DE.upload}>Téléverser une demande d'explication</option>
                    </select>

                    {/* Receiver */}
                    <select 
                        className={receiverLoading?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                        disabled={receiverLoading}
                        value={receiver}
                        onChange={e=>setReceiver(e.target.value)}
                        >
                        <option value="">Destinataire</option>
                        {
                            receivers.map((users)=>(
                                <option key={users.user.id} value={users.user.id}>{`${users.user.member.first_name} ${users.user.member.last_name}`}</option>
                            ))
                        }
                    </select>

                    {/* Initiator */}
                    {
                        typeDE == TYPE_DE.upload && 
                        <>
                            <select 
                                className={receiverLoading?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                                disabled={receiverLoading}
                                value={initiator}
                                onChange={e=>setInitiator(e.target.value)}
                                >
                                <option value="">Initiateur</option>
                            </select>
                            <div className=''>
                                <label className='' for="init_date">Date d'initiation :</label>
                                <input type="date" id="init_date" className="border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0"/>
                            </div>
                        </>
                    }

                    {/* Motifs */}
                    <select 
                        className={motifLoading?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                        disabled={motifLoading}
                        value={motif}
                        onChange={(e)=>setMotif(e.target.value)}
                    >
                        <option value="">Motifs</option>
                        {
                            motifs.map((motif)=>
                                <option value={motif.uuid} key={motif.uuid}>{motif.nom}</option>
                            )
                        }
                    </select>  

                    {/* Justification */}
                    <div className='p-2 w-full'>
                        <label htmlFor="justif font-bold">Choisir un justif:</label>
                        <input 
                        type='file' 
                        id="justif"
                        className='border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0' 
                        placeholder='Ajouter une piece Jointe'/>             
                    </div>


                    {/* The mannual demande d'explication */}
                    {
                        typeDE == TYPE_DE.upload && 
                        <div className='p-2 w-full'>
                            <div className='rounded-lg w-full '>
                                <label htmlFor="demande_file">Televerser la demande:</label>             
                            </div>
                            <input 
                            type='file' 
                            id="demande_file"
                            className='border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0' 
                            placeholder='Ajouter une piece Jointe'/>
                        </div>
                    }

                    {/* Description */}
                    <textarea 
                        className='border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'
                        placeholder='Descriptions'
                        rows="5"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    >
                    </textarea>
                </form>
            </Modal>

            <div className='flex justify-between px-4'>
                <div className='relative'>
                    <input className=' px-2 py-1 border-[1px] border-gray-100 rounded-lg text-sm focus:outline-0' type='search' placeholder='Recherche'/>
                </div>
                <div className='flex items-center space-x-1'>
                    <button 
                        className='p-2 shadow-sm rounded-md bg-blue-600 text-white text-sm flex items-center justify-center space-x-2'
                        onClick={()=>{setIsOpenned(true)}}>
                        <PlusIcon class="h-4 w-4 text-white" />
                        Initier une demande
                    </button>
                </div>
            </div>

            {/* Demande explication content */}
            <div className='p-4'>
                <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b space-x-2">
                    {/* <p className='flex items-center'>Logo</p> */}
                    <Tab 
                        title="Toute les demandes d'explication"
                        id="default-tab" 
                        // to="all" 
                        number={data.length}
                        onClick={() =>{ 
                            setDataSource(data)
                            handleTabClick("explanation");
                        }} 
                        className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
                            path === 'explanation' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
                        }`}
                    />
                    <Tab 
                    title="Repondue"
                    // id="default-tab" 
                    // to="answered"
                    number = {data.filter(item => item.reponse.length > 0).length}
                    onClick={() => {
                        const explanations = data.filter(item => item.reponse.length > 0);
                        setDataSource(explanations);
                        console.log(dataSource);
                        handleTabClick("answered")
                    }} 
                    className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
                        path === ('answered') ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
                    }`}
                    />
                    <Tab 
                    title="En attente de témoins" 
                    // id="default-tab" 
                    // to="answered" 
                    onClick={() => handleTabClick("witness")} 
                    className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
                        path === ('witness') ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
                    }`}
                    />
                    <Tab 
                    title="En attente de sanction" 
                    // id="default-tab" 
                    // to="answered" 
                    onClick={() => handleTabClick("sanction")} 
                    className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
                        path === ('sanction') ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
                    }`}
                    />
                </ul>
                <Table 
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        pageSize: 50,
                      }}
                      scroll={{
                        y: 200,
                      }}
                />
            </div>

            {/* Drawer */}
            <Drawer
                title="Demande d'explication"
                placement="bottom"
                width={1000}
                height={600}
                onClose={onClose}
                open={open}
                extra={
                <Space>
                    <Button onClick={onClose} className="">Cancel</Button>
                </Space>
                }
            >

                {/* Main wrapper */}
                <div className="h-full w-full overflow-hidden flex space-x-2">
                    {/* DE detail area */}
                    <div className="h-full w-1/2 overflow-y-auto p-2">
                        {/*Header section  */}
                        <div className="flex items-center p-2 shadow-sm bg-white rounded-md">
                            {/* <h4 className="text-lg font-semibold">Demande D'explication</h4> */}
                            <div className="flex justify-between items-center space-x-3">
                                <button className="text-blue-500 flex items-center space-x-2">
                                    Repondre{" "}
                                    <ArrowUturnRightIcon class="h-3 w-3 text-blue-500" />
                                </button>
                                <button className="text-yellow-500 flex items-center space-x-2">
                                    Interpeler un témoins{" "}
                                    <UserPlusIcon class="h-3 w-3 text-yellow-500" />
                                </button>
                                <button className="text-red-500 flex items-center space-x-2">
                                    Proposer une sanction{" "}
                                    <ShieldExclamationIcon class="h-3 w-3 text-red-500" />
                                </button>
                                <button className="text-green-500 flex items-center space-x-2">
                                    Faire une requette{" "}
                                    <ReceiptRefundIcon class="h-3 w-3 text-green-500" />
                                </button>
                            </div>
                        </div>

                        {/* Content section */}
                        <div className="shadow-sm p-2 mt-3 rounded-sm">
                            <ExplicationDetails
                                code={actualRequest.code_de}
                                dateInit={actualRequest.date_init}
                                initiateur={actualRequest.employer_initiateur}
                                motif={motifs.find(motif => motif.uuid === actualRequest.motif)?.nom}
                                description={actualRequest.description}
                            />
                        </div>
                    </div>
                    <span className="h-full w-[1px] bg-gray-200"></span>
                    
                    {/* List and Forms section */}
                    <div className="h-full w-1/2 overflow-y-auto p-2 space-y-2">

                        {/* Reponse collapse */}
                        <CollapsibleComponent 
                        title={`Toutes les réponses (${
                            dataSource
                            .filter(data=>{
                                return data.uuid == actualRequest.uuid
                            })
                            .filter(item => {
                                return item.reponse.length > 0
                            })
                            .length
                        })`} 
                        className="m-y-2"
                        >
                            {actualRequest.reponse?.map((data)=>
                                    (
                                        dataSource
                                        .filter(data=>{
                                            return data.uuid == actualRequest.uuid
                                        })
                                        .filter(item => {
                                            return item.reponse.length > 0
                                        })
                                        .length > 0 ?
                                        <div>
                                            <DetailCard
                                                borderColor={`border-l-blue-500 my-1`}
                                                name={data.id_employe}
                                                description={data.commentaire_reponse}
                                                date={data.date_init}
                                            /> 
                                        </div>
                                        :
                                        <div className="border-[1px] p-2 border-gray-100">
                                            <p className="italics">Aucune réponse</p>
                                        </div>
                                    
                                    )
                                )
                            }
                        </CollapsibleComponent>
                        <div>
                            {
                                reponseFormIsOpenned && 
                                <ReponseForm 
                                    onSave={handleOnReponseSaved}
                                    demande={actualRequest.uuid}
                                />
                            }
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-2">
                            {
                                reponseFormIsOpenned?
                                    <button className="px-2 py-1 bg-red-500 text-xs text-white rounded-md" onClick={()=>setReponseFormIsOpenned(false)}>Annuler</button>
                                :
                                    <button className="px-2 py-1 bg-blue-500 text-xs text-white rounded-md" onClick={()=>setReponseFormIsOpenned(true)}>Repondre</button>
                            }
                        </div>

                        {/* Toutes les interpélations */}
                        <CollapsibleComponent 
                        title={`Toutes les interpélations (${
                            dataSource
                            .filter(data=>{
                                return data.uuid == actualRequest.uuid
                            })
                            .filter(item => {
                                return item.temoins.length > 0
                            })
                            .length
                        })`} 
                        className="m-y-2"
                        >
                            {actualRequest.temoins?.map((data)=>
                                    (
                                        dataSource
                                        .filter(data=>{
                                            return data.uuid == actualRequest.uuid
                                        })
                                        .filter(item => {
                                            return item.temoins.length > 0
                                        })
                                        .length > 0 ?
                                        <DetailCard
                                            borderColor={`border-l-blue-500 my-1`}
                                            name={data.id_employe}
                                            description={data.commentaire_reponse}
                                            date={data.date_init}
                                        /> :
                                        <div className="border-[1px] p-2 border-gray-100">
                                            <p className="italics">Aucune réponse</p>
                                        </div>
                                    
                                    )
                            )
                            }
                        </CollapsibleComponent>
                        <div>
                            {
                                temoinFormIsOpenned && 
                                <div className="">
                                    <select 
                                        className={receiverLoading?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} 
                                        disabled={receiverLoading}
                                        value={receiver}
                                        onChange={e=>setReceiver(e.target.value)}
                                        >
                                        <option value="">Témoins</option>
                                        {
                                            receivers.map((users)=>(
                                                <option key={users.user.id} value={users.user.id}>{`${users.user.member.first_name} ${users.user.member.last_name}`}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            }
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-2">
                            {
                                temoinFormIsOpenned?
                                    <button className="px-2 py-1 bg-red-500 text-xs text-white rounded-md" onClick={()=>setTemoinFormIsOpenned(false)}>Annuler</button>
                                :
                                    <button className="px-2 py-1 bg-blue-500 text-xs text-white rounded-md" onClick={()=>setTemoinFormIsOpenned(true)}>Interpeler un témoin</button>
                            }
                        </div>

                        {/* Toutes les sanctions */}
                        <CollapsibleComponent 
                        title={`Toutes les sanctions (${
                            dataSource
                            .filter(data=>{
                                return data.uuid == actualRequest.uuid
                            })
                            .filter(item => {
                                return item.temoins.length > 0
                            })
                            .length
                        })`} 
                        className="m-y-2"
                        >
                            {actualRequest.propositions?.map((data)=>
                                    (
                                        dataSource
                                        .filter(data=>{
                                            return data.uuid == actualRequest.uuid
                                        })
                                        .filter(item => {
                                            return item.propositions.length > 0
                                        })
                                        .length > 0 ?
                                        <DetailCard
                                            borderColor={`border-l-blue-500 my-1`}
                                            name={data.id_employe}
                                            description={data.commentaire_reponse}
                                            date={data.date_init}
                                        /> :
                                        <div className="border-[1px] p-2 border-gray-100">
                                            <p className="italics">Aucune réponse</p>
                                        </div>
                                    
                                    )
                            )
                            }
                        </CollapsibleComponent>
                    </div>
                </div>
            </Drawer>


        </div>
    </>
  )
}

export default DemandeExplication