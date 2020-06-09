import React from 'react';
import {NavLink,withRouter} from 'react-router-dom'

const Sidebar = (props) => {
    return ( 
        <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button
                                type="button"
                                className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar"
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button
                            type="button"
                            className="hamburger hamburger--elastic mobile-toggle-nav"
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button
                            type="button"
                            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                        >
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>{' '}
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading"></li>
                            <li>
                                <NavLink to="/" className={props.location.pathname ==='/' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-coffee"></i>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Profile" className={props.location.pathname ==='/Profile' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-user"/>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/inbox" className={props.location.pathname ==='/inbox' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-box2"></i>
                                    inbox
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Requests" className={props.location.pathname ==='/Requests' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-paper-plane"></i>
                                    Requests
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bookings" className={props.location.pathname ==='/bookings' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-ticket"></i>
                                    Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/More" className={props.location.pathname ==='/More' ? 'mm-active' : null}>
                                    <i className="metismenu-icon pe-7s-more"></i>
                                    More
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </NavLink>
                                <ul>
                                    <li>
                                        <NavLink to="/more1" className={props.location.pathname ==='/more1' ? 'mm-active' : null}>
                                            <i className="metismenu-icon"></i>
                                            more 1
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/more2" className={props.location.pathname ==='/more2' ? 'mm-active' : null}>
                                            <i className="metismenu-icon"></i>
                                            more 2
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     );
}
 
export default withRouter(Sidebar);