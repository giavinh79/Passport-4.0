import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar.jsx'
import RolesList from '../components/RolesList'

export default class Roles extends React.Component {
    state = {
        user: true
    }

    render() {
        return this.state.user === true ? (
            <>
                <Header loggedIn={true}/>
                <div style={styles.body}>
                    <NavBar admin={true} />
                    <RolesList />
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