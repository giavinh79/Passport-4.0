import React from 'react'
import Header from '../components/Header';
import DepositList from './DepositList'
import NavBar from '../components/NavBar.jsx'

export default class Deposits extends React.Component {
    state = {
        user: true
    }

    render() {
        return this.state.user === true ? (
            <>
                <Header loggedIn={true}/>
                <div style={styles.body}>
                    <NavBar />
                    <DepositList />
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
        minHeight: '89%',
        width: '100%',
        flex: 'auto'
    }
}