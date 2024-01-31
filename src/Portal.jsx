import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserList from './UserList';
import DashBoard from './DashBoard';

import SideBar from './SideBar';
import Nav from './Nav';
import CreateLinkPage from './CreateLinkPage';

function Portal() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav></Nav>
          <div className="container-fluid">
            <Routes>
             
              <Route path="/create-link" element={<CreateLinkPage />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
