import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Rolepage from './pages/Rolepage.jsx'
import RolepageCreate from './pages/RolepageCreate.jsx'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => {return <Homepage />}} />
      <Route path="/dashboard" render={() => {return <Dashboard admin={false}/>}} />
      <Route path="/dashboard-admin" render={() => {return <Dashboard admin={true} />}} />
      <Route exact path="/roles" render={() => {return <Rolepage />}} />
      <Route path="/roles/create-new-role" render={() => {return <RolepageCreate />}} />
    </BrowserRouter>
  );
}

export default App;
