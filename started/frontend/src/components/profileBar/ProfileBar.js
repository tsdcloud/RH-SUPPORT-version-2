import React, {useContext, useEffect, useRef, useState} from 'react'
import { ComputerDesktopIcon, CogIcon , QueueListIcon, InboxArrowDownIcon, ArchiveBoxIcon, ArrowPathRoundedSquareIcon, ScaleIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';
import Tab from '../Tab/Tab'
import { Modal } from 'antd';

function ProfileBar() {
    const [activeTab, setActiveTab] = useState();
    const [path, setPath] = useState("dashboard");
    const[isOpenned, setIsOpenned]=useState(false);

  const handleTabClick = (path) => {
    // setActiveTab(tabName);
    setPath(path)
    // console.log(location.pathname);
  };



  const dashboardTabRef = useRef();
  const parapheurTabRef = useRef();

  const location = useLocation();
  
  useEffect(()=>{
    setPath(location.pathname.replace('/', ''));
  }, []);

  return (
    <div className='w-full'>
      {/* Modal */}
      <Modal
        title="Nouveau courrier"
        centered
        open={isOpenned}
        onCancel={() => setIsOpenned(false)}
      >
        <div>
          <span></span>
        </div>
        {/* <CourrierForm /> */}
      </Modal>

      <div className='flex justify-between bg-gray-200'>
        {/* Tabs wrapper*/}
        <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b space-x-2">
          {/* <p className='flex items-center'>Logo</p> */}
          <Tab 
            title=" Tableau de bord" 
            id="default-tab" 
            tabRef={dashboardTabRef} to="/" 
            onClick={() => handleTabClick("")} 
            className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
              path === 'dashboard' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
            }`}
            icon={<ComputerDesktopIcon className='w-6 h-6 text-gray-500'/>}
          />
          <Tab title="Demande d'explication" id="tab" tabRef={parapheurTabRef} to="/explanation" onClick={() => handleTabClick("explanation")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'explanation' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<QueueListIcon className="h-6 w-6 text-gray-500" />}
          />
          <Tab title="Archives" id="tab" tabRef={parapheurTabRef} to="/archives" onClick={() => handleTabClick("archives")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'archives' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<ArchiveBoxIcon className="h-6 w-6 text-gray-500" />}
          />
          <Tab title="Requete" id="tab" tabRef={parapheurTabRef} to="/requete" onClick={() => handleTabClick("requete")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'requete' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<ArrowPathRoundedSquareIcon className="h-6 w-6 text-gray-500" />}
          />
          <Tab title="Motifs" id="tab" tabRef={parapheurTabRef} to="/motifs" onClick={() => handleTabClick("motifs")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'motifs' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<BookmarkIcon className="h-6 w-6 text-gray-500" />}
          />
          <Tab title="Sanctions" id="tab" tabRef={parapheurTabRef} to="/sanction" onClick={() => handleTabClick("sanction")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'sanction' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<ScaleIcon className="h-6 w-6 text-gray-500" />}
          />
          <Tab title="Parametres" id="tab" tabRef={parapheurTabRef} to="/Parametre" onClick={() => handleTabClick("Parametre")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'Parametre' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
          }`}
          icon={<CogIcon className="h-6 w-6 text-gray-500" />}
          />
        </ul>
        
      </div>

      

      {/* Tabs Content */}
      {/* Tab Contents */}
      {/* <div id="tab-contents">
        <div id="home" className={`p-4 ${activeTab === 'home' ? '' : 'hidden'} w-full bg-white`}>
          First tab
        </div>
        <div id="second" className={`p-4 ${activeTab === 'second' ? '' : 'hidden'} w-full bg-white`}>
          Second tab
        </div>
      </div> */}
    </div>
  )
}

export default ProfileBar