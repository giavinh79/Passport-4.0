import React from 'react'
import Header from '../components/Header';
// import DepositList from '../components/DepositList'
import NavBar from '../components/NavBar.jsx'
import DashboardBody from '../components/DashboardBody';

export default class Dashboard extends React.Component {
    state = {
        user: true
    }

    render() {
        return this.state.user === true ? (
            <>
                <Header loggedIn={true}/>
                <div style={styles.body}>
                    <NavBar />
                    <DashboardBody />
                </div>
            </>
        ) : (
            <div></div>
        );
    }
}

const styles = {
    body : {
        display: 'flex',
        height: '89%',
        width: '100%',
        flex: 'auto'
    }
}