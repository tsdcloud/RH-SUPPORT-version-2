import React from 'react'

function Tabs() {
  return (
    <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b space-x-2">
        {/* <p className='flex items-center'>Logo</p> */}
        <Tab 
        title=" Tableau de bord" 
        id="default-tab" 
        tabRef={dashboardTabRef} to="/dashboard" 
        onClick={() => handleTabClick("dashboard")} 
        className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
            path === 'dashboard' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
        }`}
        icon={<ComputerDesktopIcon className='w-6 h-6 text-gray-300'/>}
        />
        <Tab title="Demande d'explication" id="tab" tabRef={parapheurTabRef} to="/explantion" onClick={() => handleTabClick("explantion")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
        path === 'explantion' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
        }`}
        icon={<QueueListIcon className="h-6 w-6 text-gray-500" />}
        />
        <Tab title="Parametre" id="tab" tabRef={parapheurTabRef} to="/Parametre" onClick={() => handleTabClick("Parametre")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
        path === 'Parametre' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
        }`}
        icon={<EnvelopeOpenIcon className="h-6 w-6 text-gray-500" />}
        />
        <Tab title="Archiever" id="tab" tabRef={parapheurTabRef} to="/archieve" onClick={() => handleTabClick("archieve")} className={`bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px ${
        path === 'archieve' ? 'border-t border-r border-l -mb-px bg-white' : 'bg-gray-500 border-b'
        }`}
        icon={<InboxArrowDownIcon className="h-6 w-6 text-gray-500" />}
        />
    </ul>
  )
}

export default Tabs