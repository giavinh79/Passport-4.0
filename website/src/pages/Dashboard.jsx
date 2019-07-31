import React from 'react'
import Header from '../components/Header';
import DepositList from './DepositList'
import NavBar from '../components/NavBar.jsx'
import { Grid } from '@material-ui/core';
import DashboardBody from '../components/DashboardBody'
import RolesList from '../components/RolesList';
import RoleCreation from '../components/RoleCreation';

export const PAGES = {
    DEPOSITS: 0,
    DASHBOARD: 1,
    ROLEPAGE: 2,
    ROLEPAGECREATE: 3
}
export default class Dashboard extends React.Component {
    state = {
        user: true,
        currentPage: PAGES.DASHBOARD
    }

    handleChangePage = (page) => {
        console.log(page)
        this.setState({ currentPage: page })
    }

    render() {
        return this.state.user === true ? (
            <>
                <Header loggedIn={true} />
                <div style={styles.body}>
                    <NavBar admin={this.props.admin} changePage={this.handleChangePage} />
                    <Grid container style={{ height: '100%', overflowY: 'auto' }}>
                        <Grid item xs={12}>
                            {this.state.currentPage === PAGES.DASHBOARD && <DashboardBody />}
                            {this.state.currentPage === PAGES.DEPOSITS && <DepositList />}
                            {this.state.currentPage === PAGES.ROLEPAGE && <RolesList />}
                            {this.state.currentPage === PAGES.ROLEPAGECREATE && <RoleCreation />}
                        </Grid>
                    </Grid>
                </div>
            </>
        ) : (
                <div></div>
            );
    }
}

const styles = {
    body: {
        display: 'flex',
        height: '89%',
        width: '100%',
        flex: 'auto'
    }
}