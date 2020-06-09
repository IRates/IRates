import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Layout = () => {
    return ( 
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header/>
        <div className="app-main">
            <Sidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Content/>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
     );
}
 
export default Layout;