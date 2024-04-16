import { Table, Modal, Dropdown, Drawer, Space, Button, Collapse, Badge, notification } from 'antd'
import React, {useEffect, useState, useMemo, useContext} from 'react'
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import { PlusIcon, EllipsisHorizontalIcon,UserPlusIcon, ShieldExclamationIcon, ReceiptRefundIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import ReponseForm from '../../components/Reponse/ReponseForm.jsx';
import TemoinsForm from '../../components/Temoins/TemoinsForm.jsx';
import SanctionForm from '../../components/Sanction/SanctionForm.jsx';
import ExplicationDetails from '../../components/ExplicationDetails/ExplicationDetails.jsx';
import CollapsibleComponent from '../../components/CollapsibleComponent/CollapsibleComponent.jsx';
import DetailCard from '../../components/DetailCard/DetailCard.jsx';
import SecondaryTabs from '../../components/Tab/SecondaryTabs.js'
import TabsWrapper from '../../components/Tabs/TabsWrapper.js'

import{AUTHCONTEXT} from '../../context/AuthContext.js'

import {useFetch} from '../../hooks/useFetch'
import {usePost} from '../../hooks/usePost'



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


// Notification system
const openNotification = () => {
    notification.open({
      message: 'Demande d\'explication',
      description:
        'Demande d\'explication initié avec success',
    });
  };

function DemandeExplication() {

    const { setUser, user } = useContext(AUTHCONTEXT);
    const { isLoading, error, fetchData } = useFetch();
    const { responseData, postData } = usePost();

    const {id} = useParams();
    const navigate = useNavigate();



    const [count, setCount] = useState(0)
    const[isOpenned, setIsOpenned]=useState(false);
    const [data, setData] = useState([]);
    const [actualRequest, setActualRequest] = useState({})
    const [dataSource, setDataSource] = useState([]);
    const _USER = localStorage.getItem('user');
    const userEntity = JSON.parse(localStorage.getItem('user'))?.entity[1].id;
    const [path, setPath] = useState("explanation");
    const [receiverLoading, setReceiverLoading] = useState(true);
    const [motifLoading, setMotifLoading] = useState(true);
    const [typeDE, setTypeDE] = useState(TYPE_DE.init)
    const [motifs, setMotifs] = useState([]);
    const [deIsLoading, setDEIsLoading] = useState(true);

    const [isCollapsed, setIsCollapsed] = useState(false);
  
    // Form values
    const [initiator, setInitiator] = useState(null);
    const [receivers, setReceivers] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [motif, setMotif] = useState('');
    const [sanction, setSanction] = useState('');
    const [sanctions, setSanctions] = useState([]);
    const [description, setDescription] = useState(
`Madame/Monsieur,
Il a été donné de constater que ...
Le rapport de votre hiérarchie fait état de ...
Vous voudriez bien nous expliquer dans un délai de 72h dès réception de la présente les raisons de ...
<b>NB:</b> Le refus de réponse à la présente demande d’explications et dans les délais annoncés sera assimilé à un acte d’insubordination et traité comme tel.
    `);

    const [searchDE, setSearchDE] = useState('')


    const [reponseFormIsOpenned, setReponseFormIsOpenned] = useState(false);
    const [temoinFormIsOpenned, setTemoinFormIsOpenned] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState('');
    
    const [open, setOpen] = useState(false);


    const [showSanctionButton, setShowSanctionButton] = useState(false);
    
    const handleShowSanctionForm=()=>{
        setShowSanctionButton(!showSanctionButton);
    }

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

    const handleOnReponseSaved=(id)=>{
        console.log(id)
        alert("Response sent");
        handleFetchAllDE();
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
            width: "150px",
            render:(record)=>(
                <>{dataSource.indexOf(record)+1}</>
            )
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
            width:"150px",
          },
          {
            title: 'Statut',
            dataIndex: 'statut_de',
            key: 'date_init',
            render:(text)=>(
                text === "1"?
                <div className="text-green-500 font-semibold">En attente de réponse</div>:
                text === "2"?
                <div className="text-orange-500 font-semibold">En attente de sanction</div>:
                text === "3"?
                <div className="text-yellow-500 font-semibold">En attente réponse du témoin</div>:
                text === "4"?
                <div className="text-purple-500 font-semibold">Archivé</div>:
                text === "5"?
                <div className="text-red-500 font-semibold">Répondu hors délais</div>:
                text === "6" &&
                <div className="text-blue-500 font-semibold">Répondu</div>
            )
          },
          {
            title: 'Actions',
            width:"100px",
            render:(record, text)=><EllipsisHorizontalIcon onClick={()=>handleOpenDetail(record.uuid)} className="h-8 w-8 text-gray-500 cursor-pointer" />
          },
    ];

    /**
     * Handle get all Demande Explication
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
       
       try{
        let res = await response.json();
        if(res.status === 200){
            setData(res.results);
            setDataSource(res.results);
        }
        
       }
       catch(err){
        console.error("FETCH ALL DE ERROR :", err)
       }
       finally{
        setDEIsLoading(false);
       }
       
    }


    const handleFetchDE= async (id)=>{

        let headersList = {
            "Accept": "*/*",
        }

       let url = `/api?end=demandes&termination=demande&detail=1&pid=${id}`
       let response = await fetch(url, { 
         method: "GET",
         headers: headersList   
       });
       
       let res = await response.json();
       console.log(res);
       if(res.status === 200){
        setActualRequest(res);
        setOpen(true);
        handleFetchSanctions();
        // setDataSource(res.results);
       }
    }

    const handleChange = (event) => {
        setSelectedOptions(event.target.value);
    };
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
     * Handle details
     */
    const handleOpenDetail=(id)=>{
        setOpen(true);
        handleFetchDE(id);

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
        console.log(result);
        if(response.ok){
            let data = result?.results;
            const actualUser = await data.filter(users => users.user.id === JSON.parse(_USER).id);
            const withoutUser = await  data
                                        .filter(users => users.user.id !== JSON.parse(_USER).id)
                                        .filter(users => users.rank.power >= actualUser[0].rank.power);
            setReceivers(await withoutUser);
            console.log(await withoutUser)
            setReceiverLoading(false);
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
        // evt.preventDefault();
        const url = "/api";
        
        const headersList={
            Accept: '*/*',
            Authorization: 'Bearer '+JSON.parse(_USER)?.access
        }

        const formData =JSON.stringify({
            "end":"demandes",
            "termination":"demande",
            "detail":0,

            "user_id":JSON.parse(_USER).id,
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

        try{
            const response = await fetch(url, RequestInfo);
            let res = response.json();
            if(res.status === 201){
                handleFetchAllDE();
                setIsOpenned(false);
                setReceiver('');
                setDescription('');
                setMotif('');
                // openNotification();
                // Notification()
            }
        }
        catch(err){
            console.log(err)
        }finally{

        }

        
    }

    const handleChooseWitness = async (e) => {
        e.preventDefault();
        console.log(selectedOptions);
        const url = "/api";
        
        const headersList={
            Accept: '*/*',
            Authorization: 'Bearer '+JSON.parse(_USER)?.access
        }

        const formData =JSON.stringify({
            "end":"demandes",
            "termination":"temoins",
            "detail":0,

            "id_employe":selectedOptions,
            "id_de": actualRequest.uuid,
        });

        const RequestInfo={
            headers: headersList,
            method: 'POST',
            body:formData 
        }

        const response = await fetch(url, RequestInfo);
        let res = response.json();
        handleFetchAllDE();
        setSelectedOptions('');
        setOpen(false);
        if(res.status === 201){
            // openNotification();
            // Notification()
        }
        
    }

    const handleFetchSanctions=()=>{
        fetchData("/api?end=demandes&termination=sanction&detail=0")
        .then(data=>{
            console.log("SANCTION :", data);
            setSanctions(data);
        })
        // const data = await fetchData("/api?end=demandes&termination=sanction&detail=0")
    }

    const handleProposeSanction=()=>{
        handleFetchAllDE();
        setOpen(false);
    }
    

    useEffect(()=>{
        getEntityEmployees(userEntity);
        // setReceivers(entitiesEmployees);
        handleFetchAllDE(); 
        handleGetMotifs();
        const explanations = data.filter(item=> item.reponse.length == 0);
        console.log(explanations);
        setDataSource(explanations);
        
        if(id){
            handleFetchDE(id)
        }
    }, []);


    useEffect(()=>{
        if(setSearchDE.length > 0){
            console.log(data
                .filter(de=>de.code_de.includes(searchDE) || de.employer_recepteur.includes(searchDE) || de.employer_initiateur.includes(searchDE) || de.date_init.includes(searchDE)))
            setDataSource(data
                .filter(de=>de.code_de.includes(searchDE) || de.employer_recepteur.includes(searchDE) || de.employer_initiateur.includes(searchDE) || de.date_init.includes(searchDE) || de.statut_de.includes(searchDE)
                
                )
                )
        }else{
            setDataSource(data);
        }
    }, [searchDE])

    
    
  return (
    <>
        <div className='p-5'>

            <div className='flex justify-between px-4'>
                <div className='relative w-4/5'>
                    <input 
                        className=' px-2 py-1 border-[1px] border-gray-200 text-gray-800 rounded-lg text-sm focus:outline-0 w-2/5' 
                        type='search' 
                        placeholder='Recherche'
                        value={searchDE}
                        onChange={e=>setSearchDE(e.target.value)}
                    />
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
                <TabsWrapper
                    className=""
                >
                    <SecondaryTabs 
                        title={`Toutes les DE (${data.length})`}
                        onClick={() =>{ 
                            setDataSource(data)
                            handleTabClick("explanation");
                        }}
                        isActive={path === 'explanation'} 
                    />
                    <SecondaryTabs 
                        title={`Initier (${data.filter(de=>de.user_id === JSON.parse(_USER).id).length})`}
                        onClick={() =>{ 
                            setDataSource(data.filter(de=>de.user_id === JSON.parse(_USER).id))
                            handleTabClick("initier");
                        }}
                        isActive={path === 'initier'} 
                    />
                    <SecondaryTabs 
                        title={`reçu (${data.filter(de=>de.user_id !== JSON.parse(_USER).id).length})`}
                        onClick={() =>{ 
                            setDataSource(data.filter(de=>de.user_id !== JSON.parse(_USER).id))
                            handleTabClick("received");
                        }}
                        isActive={path === 'received'} 
                    />
                    <SecondaryTabs 
                        title={`En attente de réponse (${data.filter(de=>de.statut_de == 1).length})`}
                        onClick={async() =>{
                            let repondue = data.filter(de=>de.statut_de == 1)
                            setDataSource(repondue);
                            handleTabClick("response");
                        }}
                        isActive={path === 'response'} 
                    />
                    <SecondaryTabs 
                        title={`En attente de témoins (${data.filter(de=>de.statut_de == 3).length})`}
                        onClick={() =>{ 
                            let repondue = data.filter(de=>de.statut_de == 3)
                            setDataSource(repondue);
                            handleTabClick("witness");
                        }}
                        isActive={path === 'witness'} 
                    />
                    <SecondaryTabs 
                        title={`En attente de proposition (${data.filter(de=>de.statut_de == 2).length})`}
                        onClick={() =>{ 
                            let repondue = data.filter(de=>de.statut_de == 2)
                            setDataSource(repondue);
                            handleTabClick("sanction");
                        }}
                        isActive={path === 'sanction'} 
                    />
                </TabsWrapper>

                <Modal
                    title="Initier une demande d'explication"
                    centered
                    open={isOpenned}
                    onCancel={() => setIsOpenned(false)}
                    footer={()=><></>}
                >
                        <form onSubmit={handleSaveDE} className='px-2 space-y-2 w-full flex flex-col justify-center h-[400px] max-h-[400px] overflow-y-scroll'>
                            <select 
                                className={`${receiverLoading?'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0 bg-gray-100' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} text-md`} 
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
                                className={`${motifLoading?'border-[1px] bg-gray-100 border-gray-100 rounded-lg p-2 w-full focus:outline-0' :'border-[1px] border-gray-100 rounded-lg p-2 w-full focus:outline-0'} text-md`} 
                                disabled={motifLoading}
                                value={motif}
                                onChange={(e)=>setMotif(e.target.value)}
                            >
                                <option value="">Motifs</option>
                                {
                                    motifs.map((motif)=>
                                        <option value={motif.uuid} key={motif.nom}>{motif.nom}</option>
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
                            <div className="">
                                <button className="text-white font-md bg-blue-500 p-2 rounded-lg" type="submit">
                                    <span>Initier la demande</span>
                                </button>
                            </div>
                        </form>
                    <div className="w-full">
                    </div>
                </Modal>
                <Table 
                    loading={deIsLoading}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        pageSize: 50,
                      }}
                      scroll={{
                        y: 200,
                        x: 500
                      }}
                />
            </div>



            {/* DE initiation drawer */}
            <Drawer
                title="Demande d'explication"
                placement="bottom"
                width={1000}
                height={600}
                onClose={() => setIsOpenned(false)}
                open={false}
                extra={
                <Space>
                    <Button onClick={onClose} className="">Cancel</Button>
                </Space>
                }
            >
                

            </Drawer>




            {/* Drawer details drawer*/}
            <Drawer
                title="Demande d'explication"
                placement="bottom"
                width={1000}
                height={600}
                onClose={onClose}
                open={open}
                extra={
                <Space>
                    <button onClick={onClose} className="p-2 border-2 border-red-500 text-red-500 shadow-sm rounded-lg">Cancel</button>
                </Space>
                }
            >

                {/* Main wrapper */}
                <div className="h-full w-full overflow-y-hidden flex space-x-2">
                    {/* DE detail area */}
                    <div className="h-full w-1/2 overflow-y-auto p-2">
                        {/*Header section  */}
                        <div className="flex items-center p-2 shadow-sm bg-white rounded-md">
                            
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
                    <div className="h-full w-1/2 overflow-y-auto hover:overflow-y-scroll p-2 space-y-2">

                        {/* Reponse collapse */}
                        <CollapsibleComponent 
                        title={`Toutes les réponses (${actualRequest?.reponse?.length})`} 
                        className="m-y-2"
                        >
                            {actualRequest?.reponse?.map((data)=>
                                    (
                                        <DetailCard
                                            borderColor={`border-l-blue-500 my-1`}
                                            name={data.id_employe}
                                            description={data.commentaire_reponse}
                                            date={data.date_init}
                                        /> 
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
                        title={`Toutes les interpélations (${actualRequest?.temoins?.length})`} 
                        className="m-y-2"
                        >
                            {actualRequest?.temions?.map((data)=>
                                    (
                                        <DetailCard
                                            borderColor={`border-l-yellow-500 my-1`}
                                            name={data.id_employe}
                                            description={data.commentaire_reponse}
                                            date={data.date_init}
                                        /> 
                                    )
                                )
                            }
                           
                        </CollapsibleComponent>
                        <div>
                            {
                                temoinFormIsOpenned && 
                                <TemoinsForm 
                                    temoins={receivers}
                                    selectedOption={setSelectedOptions}
                                    onSubmit={handleChooseWitness}
                                    onChange={handleChange}
                                />
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
                        title={`Toutes les sanctions (${actualRequest?.propositions?.length})`} 
                        className="m-y-2"
                        >
                            {actualRequest?.propositions?.map((data)=>
                                    (
                                        <DetailCard
                                            borderColor={`border-l-yellow-500 my-1`}
                                            name={data.id_employe}
                                            description={data.commentaire_reponse}
                                            date={data.date_init}
                                        /> 
                                    )
                                )
                            }
                        </CollapsibleComponent>
                        {showSanctionButton && <SanctionForm 
                            sanctions={sanctions}
                            explanation={actualRequest.uuid}
                            employee={JSON.parse(_USER).id}
                            onSubmit={handleProposeSanction}
                        />}
                        <div className="flex justify-end items-center">
                            {
                            showSanctionButton?
                                <button className="px-2 py-1 bg-red-500 text-xs text-white rounded-md" onClick={handleShowSanctionForm}>Annuler</button>
                                    :
                                <button className="px-2 py-1 bg-blue-500 text-xs text-white rounded-md" onClick={handleShowSanctionForm}>Proposer une sanction</button>
                            }
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    </>
  )
}

export default DemandeExplication