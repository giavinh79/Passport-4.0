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
        searchBarExpanded: false,

    }

    expandSearchBar = () => {
        this.setState({searchBarExpanded: true})
        // console.log('e')
    }

    collapseSearchBar = () => {
        this.setState({searchBarExpanded: false})
        // console.log('e')
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
                <div style={{display: 'flex', flex: '5'}}>
                    <img src="images/logo.png" alt="logo"/>
                </div>
                <div onMouseEnter={this.expandSearchBar} onMouseLeave={this.collapseSearchBar} style={{alignItems: 'left', display : this.state.loggedIn === true ? 'flex' : 'none', flex: '11'}}>
                    <SearchBar expanded={this.state.searchBarExpanded}/>   
                </div>
                <div style={{display : this.state.loggedIn === true ? 'flex' : 'none', flex: '2'}}>
                    <i class="far fa-user" style={styles.userIconStyle}></i>
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
    header : {
        color: 'white',
        fontFamily: 'sans-serif'
    },
    search : {
        backgroundColor: 'white'
    },
    userIconStyle : {
        margin: 'auto',
        fontSize: '20px',
        color: 'white'
    }
}