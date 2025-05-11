

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';



import { Routes, Route, BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react';

import AddActivity from './utils/AddActivity';
import SelectAddActivityHotel from './utils/SelectAddActivityHotel';
import ViewActivities from './utils/ViewActivities';
import PDFActivities from './components/PDFActivities';
import ActivityDashboard from './utils/ActivityDashboard';
import ViewEditActivity from './utils/ViewEditActivity';
import EditActivity from './utils/EditActivity';
import Finalize from './utils/Finalize';
import ViewPurchasedActivities from './utils/ViewPurchasedActivities';
import AdminActivityDashboard from './utils/AdminActivitiyDashboard';





function App() {

  const [categories, setCategories] = useState(["Entrees", "Appetizers", "SideDishes", "Salads", "Soups", "Desserts", "Beverages", "Specials"]);

  return (
    <BrowserRouter>


      <Routes>
        <Route path='/activity-dashboard' element={
          <ActivityDashboard />
        } />

<Route path='/admin-activity-dashboard' element={
          <AdminActivityDashboard />
        } />

        <Route path='/add-activity' element={
          <AddActivity />
        } />
        <Route path='/select-add-activity-hotel' element={
          <SelectAddActivityHotel />
        } />
        <Route path='/view-activities' element={
          <ViewActivities />
        } />
        <Route path='/view-edit-activity' element={
          <ViewEditActivity />
        } />
        <Route path='/edit-activity' element={
          <EditActivity />
        } />
         <Route path='/purchased-activities' element={
          <ViewPurchasedActivities />
        } />


        <Route path='/finalize' element={
          <Finalize />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
