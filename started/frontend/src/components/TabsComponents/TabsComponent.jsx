import React from 'react'

function TabsComponent(props) {
  return (
    <ul id="tabs" className={`${props.className} inline-flex pt-2 px-1 w-full border-b space-x-1 bg-gray-100=`}>
        {props.children}
    </ul>
  )
}

export default TabsComponent