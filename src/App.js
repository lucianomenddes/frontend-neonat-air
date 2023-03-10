import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import CreateLeitos from './pages/CreateLeitos';
import MonitoredEnvironmente from './pages/MonitoredEnvironment';
import Report from './pages/Report';
import UpdateLeito from './pages/UpdateLeito';
import Users from './pages/Users';
import UpdateUsers from './pages/UpdateUsers';
import LoginOrRegister from './pages/LoginOrRegister';
import RequireAuth from './services/requireAuth';
import Wellcome from './pages/Wellcome'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/loginOrRegister" element={<LoginOrRegister />} />


        <Route element={<RequireAuth />}>
      
          <Route path="/" element={[<Layout />, <Wellcome />]} />
          <Route path="/leitoform" element={[<Layout />, <CreateLeitos />]} />
          <Route path="/leitoform-update/:id" element={[<Layout />, <UpdateLeito />]} />
          <Route path="/monitored-leitos" element={[<Layout />, <MonitoredEnvironmente />]} />
          <Route path="/report" element={[<Layout />, <Report />]} />
          <Route path="/users" element={[<Layout />, <Users />]} />
          <Route path="/users-update" element={[<Layout />, <UpdateUsers />]} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
