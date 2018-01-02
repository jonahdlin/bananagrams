import React from 'react';

class Header extends React.Component {
    render() {
        return <img id="logo" src={require('./../../styles/logo.png')} alt="" />
    }
}

export default Header;