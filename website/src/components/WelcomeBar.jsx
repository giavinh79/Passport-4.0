import React from 'react'

export default function WelcomeBar(props) {
    return(
        <div>
            <h1 style={styles.title}>Welcome {props.name}</h1>
        </div>
    );
}

const styles = {
    title : {
        color: '#666',
        padding: '0 1rem',
        margin: '0.8rem'
    }
}