import React from 'react'
import './header.scss'
import ShowThumb from '../../components/show-thumb'

const Header = (props) => {

    let {logoConfigs, menuItems} = props
    let {logo} = logoConfigs
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="container">
                    <ShowThumb
                        href={`/`}
                        aclassname='brand'
                        src={logo} width="120" height="40" alt="Logo" />
                    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <i className="icon-menu"></i>
                    </button>
                    <div className="nav-collapse collapse pull-right">
                        <ul className="nav" id="top-navigation">
                            {
                                menuItems && menuItems.length > 0 && menuItems.map((item) => {
                                    return <li key={item.key}><a href={item.href || '/'}>{item.name}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header