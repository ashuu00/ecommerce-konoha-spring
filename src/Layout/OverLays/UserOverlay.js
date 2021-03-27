import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollTop from '../../Services/ScrollTop';
// import BreadCrumbOverlay from '../../components/Blocks/CustomBreadCrumb'
export default function UserOverlay({children}) {
    return (
        <React.Fragment>
            <Navbar/>
            <ScrollTop/>
                {children}
            <Footer/>
        </React.Fragment>
    )
}
