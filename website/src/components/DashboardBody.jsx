import React from 'react'
import ActivityOverview from './ActivityOverview';
import WelcomeBar from './WelcomeBar';
import Messages from './ActivityOverview';
import Roles from './Roles';
import Graph from './Graph';
import Pie from './Pie';

export default function DashboardBody() {
    return(
        <div style={{width:'100%'}}>
            <WelcomeBar name='wm_op1'/>
            <div style={styles.parentContainer}>
                <div style={styles.topContainer}>
                    {/* <ActivityOverview />
                    <Messages />
                    <Roles /> */}
                </div>
                <div style={styles.bottomContainer}>
                    {/* <Graph />
                    <Pie /> */}
                </div>
            </div>
        </div>
    );
}

const styles = {
    parentContainer : {
        display: 'flex',
        flexDirection: 'column'
    },
    topContainer : {
        display: 'flex',
        padding: '1rem',
        flex: '3',
        flexDirection: 'row'
    },
    bottomContainer : {
        display: 'flex',
        padding: '1rem',
        flex: '1',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}