import React from 'react'
import Total_waste_disposed from '../Total_waste_disposed/Total_waste_disposed';

import Dashboard_total from './Dashboard_total/Dashboard_total';
import Recylcing_history from './Recycling_history/Recylcing_history';
import Total_users from './Total_users/Total_users';
function Admin_dashboard() {
  return (
    <div className='admin-dashboard-con'>
    <div className="admin-dashboard-left">
        <Dashboard_total/>
        {/* <Recylcing_history/> */}
         <Total_users/>

  {/* <Total_waste_disposed/> */} 
      </div>
      <div className="admin-dashboard-right">
      
      </div>
      
    </div>
  )
}

export default Admin_dashboard