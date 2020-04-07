import React from 'react'
import _ from 'lodash'
import './footer.scss'
const Footer = (props) => {
    let {footerConfigs} = props
    let copyrightText = _.get(footerConfigs, 'copyrightText')
    return (
        <React.Fragment>
            <div className="footer">
                <p>{copyrightText}</p>
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