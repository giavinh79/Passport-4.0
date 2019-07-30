import React from 'react'
import MessagesList from './MessagesList';

export default function ActivityOverview() {
    return(
        <div style={styles.container}>
            <h2>Recent Activity</h2>
            <MessagesList />
        </div>
    );
}

const styles = {
    container : {
        width: '100%',
        border: '1px solid #ccc',
        padding: '1rem'
    },
    item : {
        backgroundColor: '#ccc',
        width: '10rem',
        height: '6rem',
        margin: '1rem'
    }
}