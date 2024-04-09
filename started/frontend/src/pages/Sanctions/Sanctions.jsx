import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch.js'
import { usePost } from '../../hooks/usePost.js'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import {EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import { Modal, Table } from 'antd'
import AddSanction from '../../components/Sanction/AddSanction.jsx';
import SecondaryTabs from '../../components/Tab/SecondaryTabs.js'
import TabsWrapper from '../../components/Tabs/TabsWrapper.js'


function Sanctions() {
    const handleTabClick = (path) => {
        setPath(path)
    };

    const { isLoading, error, fetchData } = useFetch();
    const { responseData, postData } = usePost();

    const [openModal, setOpenModal] = useState(false);
    const [tableDataIsLoading, setTableDataIsLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [path, setPath] = useState('sanction');

    const handleAddSanction =()=>{
        fetchData("/api?end=demandes&termination=sanction&detail=0")
        .then(res => {
            console.log(res);
            setTableData(res);
            setDataSource(res);
        }); 
    }

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
        // fetchData("/api?end=demandes&termination=sanction&detail=0")
        // .then(res => {
        //     console.log(res);
        //     setTableData(res);
        //     setDataSource(res);
        // });   
        
    }, []);


    return (
    <div className="p-5">

            <PageHeader 
                searchPlaceholder="Recherche"
                value=""
                onSearch=""
                buttonOnClick={()=>setOpenModal(true)}
                buttonText="Ajouter une sanction"
            />

        <Modal
            title="Ajouter une sanction"
            centered
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={()=><></>}
        >
            <div className='p-2'>
                {/* Sanction form */}
                <AddSanction
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    onSubmit={()=>{
                        handleAddSanction();
                        setOpenModal(false);
                    }}
                />
            </div>
        </Modal>


        <TabsWrapper
            className=""
        >
            <SecondaryTabs 
                title={`Toutes les sanctions (${dataSource.length})`}
                onClick={() =>{ 
                    // setDataSource(data)
                    handleTabClick("sanction");
                }}
                isActive={path === 'sanction'} 
            />
        </TabsWrapper>

        <Table 
            loading={false}
            dataSource={tableData}
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
  )
}

export default Sanctions