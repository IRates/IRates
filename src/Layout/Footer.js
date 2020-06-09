import React from 'react';

const Footer = () => {
    return ( 
        <div className="app-wrapper-footer">
                    <div className="app-footer">
                        <div className="app-footer__inner justify-content-center">
                            <ul className="nav">
                                <li className="nav-item">
                                    <span>&copy; Copyright : </span>
                                    <a href="http://IranRates.com">
                                        <span style={{ color: 'blue' }}>
                                            {' '}
                                            IRates
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
     );
}
 
export default Footer;