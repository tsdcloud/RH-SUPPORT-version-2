import React from 'react'

function TabsWrapper({ children }) {
    return (
        <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b space-x-1">
            {children}
        </ul>
    )
}

export default TabsWrapper