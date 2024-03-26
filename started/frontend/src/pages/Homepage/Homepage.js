import React from 'react'
import herobg from '../../assets/images/herobg.jpg'
import DashboardCard from '../../components/DashboardCard/DashboardCard'
function Homepage() {
  return (
    <div className='p-5'>
        {/* Header  */}
        <div>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
        </div>
        {/* <div className='min-h-[50vh] rounded-lg flex flex-col justify-center space-y-5 px-4' style={{background:"rgba(0,0,0,0.7) url('"+herobg+"')", backgroundPosition:"center center", backgroundSize:"cover", backgroundBlendMode:"overlay"}}>
            <h2 className='text-white text-8xl'>Support RH</h2>
            <p className='text-white text-light'>Human resource the better way.</p>
        </div> */}
    </div>
  )
}

export default Homepage