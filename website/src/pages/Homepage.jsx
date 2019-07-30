import React from 'react'
import Header from '../components/Header';
import SignIn from '../components/SignIn';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SignIn />
                <div style={styles.info}>version: 4.0.0.NB100 &copy; NCR Corporation</div>
            </React.Fragment>
        );
    }
}

const styles = {
    info : {
        // position: 'absolute',
        textAlign: 'right',
        right: '0',
        bottom: '0',
        color: '#666',
        padding: '1rem'
    }
}
const background = {
    position: 'absolute',
    backgroundColor: 'grey',
    opacity: '0.2',
    height: '20vw',
    widht: '10vw',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto'
}