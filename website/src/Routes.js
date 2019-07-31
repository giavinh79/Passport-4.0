import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Rolepage from './pages/Rolepage.jsx'
import RolepageCreate from './pages/RolepageCreate.jsx'
import Deposits from './pages/Deposits.jsx'
import CreateDeposit from './pages/CreateDeposit';
import DepositListItem from './pages/DepositListItem';
import Notification from './components/Notification.jsx'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => {return <Homepage />}} />
      <Route path="/dashboard" render={() => {return <Dashboard admin={false}/>}} />
      <Route path="/dashboard-admin" render={() => {return <Dashboard admin={true} />}} />
      <Route exact path="/roles" render={() => {return <Rolepage />}} />
      <Route path="/roles/create-new-role" render={() => {return <RolepageCreate />}} />
      <Route path="/deposits" render={() => {return <Deposits/>}} />
      <Route path="/create-deposit" render={() => {return <CreateDeposit/>}} />
      <Route path="/deposit-list-item" render={() => {return <DepositListItem/>}} />
      <Route path="/test" render={() => {return <Notification />}} />
    </BrowserRouter>
  );
}

export default App;
