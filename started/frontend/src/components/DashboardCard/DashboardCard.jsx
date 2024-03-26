import React from 'react'

function DashboardCard({className, title, icon, border, content, footer, onClick, iconBg}) {
  return (
    <div className={`${className} border-2 border-${border}-500 rounded-lg relative`} onClick={onClick}>
        <div className={`bg-${iconBg}-500`}>{icon}</div>
        <div className='text-light'>{title}</div>
        <div></div>
        <div></div>
    </div>
  )
}

export default DashboardCard