import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <p>&copy; 2013 Theme by <a href="http://www.graphberry.com">GraphBerry</a>, <a href="http://goo.gl/NM84K2">Documentation</a></p>
            </div>
            <div className="scrollup">
                <a href="/">
                    <i className="icon-up-open"></i>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Footer