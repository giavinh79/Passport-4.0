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
            <div style={styles.container}>
                <img src="images/logo.png" alt="logo"/>
                <div style={{display : this.state.loggedIn === true ? 'block' : 'none'}}>
                    <SearchBar />   
                </div>
            </div>
        )
    }

}

const styles = {
    container : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '11%',
        backgroundColor: '#51B948'
    },
    header : {
        color: 'white',
        fontFamily: 'sans-serif'
    },
    search : {
        backgroundColor: 'white'
    }
}