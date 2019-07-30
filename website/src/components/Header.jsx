import React from 'react'
import SearchBar from "./SearchBar"

export default class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = {
        loggedIn : this.props.loggedIn,
        temp: 'thing'
    }

    render() {
        // return this.props.loggedIn === true ? (
        //     <div style={styles.container}>
        //         <img src="images/logo.png" alt="logo" />
        //     </div>
        // ) : (
        //     <div style={styles.container}>
        //         <img src="images/logo.png" alt="logo" />
        //     </div>
        // );
        console.log(this.props)
        return (
            <div style={Object.assign(styles.container, this.state.loggedIn ? styles.conditionalLeft: styles.conditionalCenter)}>
                <div style={{display: 'flex', flex: '5'}}>
                    <img src="images/logo.png" alt="logo"/>
                </div>
                <div style={{display : this.state.loggedIn === true ? 'flex' : 'none', flex: '11'}}>
                    <SearchBar />   
                </div>
                <div style={{display : this.state.loggedIn === true ? 'flex' : 'none', flex: '2'}}>
                    logo 
                </div>
            </div>
        )
    }

}

const styles = {
    container : {
        display: 'flex',
        minHeight: '6rem',
        height: '11%',
        backgroundColor: '#51B948'
    },
    conditionalCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    conditionalLeft: {
        alignItems: 'left',
        justifyContent: 'left'
    },
    header : {
        color: 'white',
        fontFamily: 'sans-serif'
    },
    search : {
        backgroundColor: 'white'
    }
}