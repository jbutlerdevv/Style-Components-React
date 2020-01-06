import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => {
    return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout;