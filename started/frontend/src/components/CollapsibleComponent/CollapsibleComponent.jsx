import React, { useState } from 'react';

const CollapsibleComponent = ({ children, title, className }) => {
  const [collapseIsCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center p-2 border-[1px] rounded-md border-gray-200 bg-gray-100' onClick={() => setIsCollapsed(!collapseIsCollapsed)}>
        <span className='text-md font-bold'>{title}</span>
        {/* <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2"
          
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button> */}
      
      </div>
      {/* <div className={`${className} overflow-y-auto m-y-2 ${collapseIsCollapsed ? 'hidden' : 'block'} max-h-96 `} style={{ maxHeight: '300px' }}> */}
      <div className={`${className} overflow-y-auto hover:overflow-y-scroll m-y-2 ${collapseIsCollapsed ? 'hidden' : 'block'} bg-gray-[#f2f2f2] p-2`} style={{ maxHeight: '300px' }}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleComponent;