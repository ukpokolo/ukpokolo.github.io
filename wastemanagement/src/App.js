import './App.css';
import Dashboard_total from './components/Admin_dashboard/Dashboard_total/Dashboard_total';
import Recylcing_history from './components/Admin_dashboard/Recycling_history/Recylcing_history';
import React from 'react';
import Products_in_stock from './components/Store/Products_in_stock/Products_in_stock';
import Store from './components/Store/Store';
import Admin_dashboard from './components/Admin_dashboard/Admin_dashboard';
import Sales from './components/Store/Sales/Sales';
import Total_users from './components/Admin_dashboard/Total_users/Total_users';
import Total_waste_disposed from './components/Total_waste_disposed/Total_waste_disposed';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

    <Routes>

    <Route path="/" element={<Admin_dashboard/>} />
    <Route path='/Dashboard_total' element={<Dashboard_total/>} />
    <Route path='/Recycling_history' element={<Recycling_history/>} />
    <Route path='/Total_users' element={<Total_users/>} />
    <Route path='/Total_waste_disposed' element={<Users_history/>} />
    <Route path='/Store' element={<Store/>} />
    <Route path='/Product_in_stock' element={<Product_in_stock/>} />
    <Route path='/Sales' element={<Sales/>} />
    <Route path='/Upload_products' element={<Upload_products/>} />

    


    </Routes>
      </div>
  );
}

export default App;
