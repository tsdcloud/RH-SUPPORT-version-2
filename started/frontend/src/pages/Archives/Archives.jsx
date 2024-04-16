import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch.js'
import { usePost } from '../../hooks/usePost.js'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import {EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import { Modal, Table } from 'antd'
import SecondaryTabs from '../../components/Tab/SecondaryTabs.js'
import AddSanction from '../../components/Sanction/AddSanction.jsx';
import TabsWrapper from '../../components/Tabs/TabsWrapper.js'

function Archives() {
    const handleTabClick = (path) => {
        setPath(path)
    };

    const { isLoading, error, fetchData } = useFetch();
    const { responseData, postData } = usePost();

    const [openModal, setOpenModal] = useState(false);
    const [tableDataIsLoading, setTableDataIsLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [path, setPath] = useState('demande');
    const handleAddSanction =()=>{
        fetchData("/api?end=demandes&termination=sanction&detail=0")
        .then(res => {
          let deArchiver = res?.filter(data=> data.statut_de === "4");
            console.log(deArchiver);
            setTableData(deArchiver);
            setDataSource(deArchiver);
        }); 
    }

    const deCol = [
        {
            title: '#',
            width: "150px",
            render:(record)=>{
              return <>{dataSource.indexOf(record)+1}</>
            }
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
            // render:(record, text)=>{
            //     let motifName = motifs.find(motif => motif.uuid === text.motif )
            //     console.log(motifName?.nom);
            //     return <p>{motifName?.nom}</p>
            // }
          },
          {
            title: 'Destinataire',
            dataIndex: 'employer_recepteur',
            key: 'employer_recepteur'
          },
          {
            title: 'Initiateur',
            dataIndex: 'employer_initiateur',
            key: 'employer_initiateur'
          },
          {
            title: 'Date initiation',
            dataIndex: 'date_init',
            key: 'date_init',
            width:"150px",
          },
          {
            title: 'Actions',
            width:"100px",
            // render:(record, text)=><EllipsisHorizontalIcon onClick={()=>handleOpenDetail(record.uuid)} className="h-8 w-8 text-gray-500 cursor-pointer" />
          }
    ]
    const columns =[
        {
            title: '#',
            width: "150px",
            render:(record)=>(
                <>{dataSource.indexOf(record)+1}</>
            )
          },
          {
            title: 'Nom',
            dataIndex: 'libelle_sanction',
            key: 'libelle_sanction',
          },
          {
            title: 'Power',
            dataIndex: 'power',
            key: 'power',
          },
          {
            title: 'Motifs',
            dataIndex: 'motifs',
            key: 'motifs',
          },
          {
            title: 'Actions',
            width:"100px",
            render:(record)=><EllipsisHorizontalIcon onClick={()=>{}} className="h-8 w-8 text-gray-500 cursor-pointer" />
          },
    ]
    
    useEffect(()=>{
        handleAddSanction();
        fetchData("/api?end=demandes&termination=demande&detail=0")
        .then(res => {
            console.log(res);
            setTableData(res);
            setDataSource(res);
        });   
        
    }, []);


    return (
    <div className="p-5">

            <PageHeader 
                searchPlaceholder="Recherche"
                value=""
                onSearch=""
                buttonOnClick={()=>setOpenModal(true)}
                buttonText="Ajouter une sanction"
                disableButton={true}
                dis
            />


        <TabsWrapper
            className=""
        >
            <SecondaryTabs 
                title={`Toutes les DEs`}
                onClick={() =>{ 
                    // setDataSource(data)
                    handleTabClick("demande");
                }}
                isActive={path === 'demande'} 
            />
            <SecondaryTabs 
                title={`Toutes les Demande Permission (0)`}
                onClick={() =>{ 
                    // setDataSource(data)
                    handleTabClick("permission");
                }}
                isActive={path === 'permission'} 
            />
            <SecondaryTabs 
                title={`Toutes les Demande d'AVI (0)`}
                onClick={() =>{ 
                    // setDataSource(data)
                    handleTabClick("avi");
                }}
                isActive={path === 'avi'} 
            />
        </TabsWrapper>

        <Table 
            loading={false}
            dataSource={dataSource.filter(de=>de.statut_de == 4)}
            columns={deCol}
            pagination={{
                pageSize: 50,
                }}
                scroll={{
                y: 200,
                x: 500
                }}
        />

    </div>
  )
}

export default Archives