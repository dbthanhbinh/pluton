import React from 'react'
import _ from 'lodash'
import Header from './header'
import Footer from './footer'
import Slider from '../sliders'
import Service from '../services'
import ContactUs from '../contact-us'
import Newsletter from '../newsletter'

import TemplateData from '../../datas/template.json'

function Default() {
    
  return (
    <React.Fragment>
        <Header
            logoConfigs={_.get(TemplateData, 'logoConfigs')}
            menuItems={_.get(TemplateData, 'menuConfigs.primary')}
        />
        <Slider />
        <Service />
        <div className="section secondary-section " id="portfolio">
            <div className="triangle"></div>
            <div className="container">
                <div className=" title">
                    <h1>Have You Seen our Works?</h1>
                    <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                </div>
                <ul className="nav nav-pills">
                    <li className="filter" data-filter="all">
                        <a href="#noAction">All</a>
                    </li>
                    <li className="filter" data-filter="web">
                        <a href="#noAction">Web</a>
                    </li>
                    <li className="filter" data-filter="photo">
                        <a href="#noAction">Photo</a>
                    </li>
                    <li className="filter" data-filter="identity">
                        <a href="#noAction">Identity</a>
                    </li>
                </ul>
                <div id="single-project">
                    <div id="slidingDiv" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio01.png" alt="project 1" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv1" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio02.png" alt="project 2" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv2" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio03.png" alt="project 3" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv3" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio04.png" alt="project 4" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Project for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>Life's but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv4" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio05.png" alt="project 5" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>We need to give each other the space to grow, to be ourselves, to exercise our diversity. We need to give each other space so that we may both give and receive such beautiful things as ideas, openness, dignity, joy, healing, and inclusion.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv5" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio06.png" alt="project 6" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv6" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio07.png" alt="project 7" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>Always continue the climb. It is possible for you to do whatever you choose, if you first get to know who you are and are willing to work with a power that is greater than ourselves to do it.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv7" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio08.png" alt="project 8" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>What if you gave someone a gift, and they neglected to thank you for it - would you be likely to give them another? Life is the same way. In order to attract more of the blessings that life has to offer, you must truly appreciate what you already have.</p>
                            </div>
                        </div>
                    </div>
                    <div id="slidingDiv8" className="toggleDiv row-fluid single-project">
                        <div className="span6">
                            <img src="assets/images/Portfolio09.png" alt="project 9" />
                        </div>
                        <div className="span6">
                            <div className="project-description">
                                <div className="project-title clearfix">
                                    <h3>Webste for Some Client</h3>
                                    <span className="show_hide close">
                                        <i className="icon-cancel"></i>
                                    </span>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <span>Client</span>Some Client Name</div>
                                    <div>
                                        <span>Date</span>July 2013</div>
                                    <div>
                                        <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                    <div>
                                        <span>Link</span>http://examplecomp.com</div>
                                </div>
                                <p>I learned that we can do anything, but we can't do everything... at least not at the same time. So think of your priorities not in terms of what activities you do, but when you do them. Timing is everything.</p>
                            </div>
                        </div>
                    </div>
                    <ul id="portfolio-grid" className="thumbnails row">
                        <li className="span4 mix web">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio01.png" alt="project 1" />
                                <a href="#single-project" className="more show_hide" rel="#slidingDiv">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix photo">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio02.png" alt="project 2" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv1">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix identity">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio03.png" alt="project 3" />
                                <a href="#single-project" className="more show_hide" rel="#slidingDiv2">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix web">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio04.png" alt="project 4" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv3">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix photo">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio05.png" alt="project 5" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv4">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix identity">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio06.png" alt="project 6" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv5">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix web">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio07.png" alt="project 7" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv6">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix photo">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio08.png" alt="project 8" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv7">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                        <li className="span4 mix identity">
                            <div className="thumbnail">
                                <img src="assets/images/Portfolio09.png" alt="project 9" />
                                <a href="#single-project" className="show_hide more" rel="#slidingDiv8">
                                    <i className="icon-plus"></i>
                                </a>
                                <h3>Thumbnail label</h3>
                                <p>Thumbnail caption...</p>
                                <div className="mask"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="section primary-section" id="about">
            <div className="triangle"></div>
            <div className="container">
                <div className="title">
                    <h1>Who We Are?</h1>
                    <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                </div>
                <div className="row-fluid team">
                    <div className="span4" id="first-person">
                        <div className="thumbnail">
                            <img src="assets/images/Team1.png" alt="team 1" />
                            <h3>John Doe</h3>
                            <ul className="social">
                                <li>
                                    <a href="/">
                                        <span className="icon-facebook-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-twitter-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-linkedin-circled"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="mask">
                                <h2>Copywriter</h2>
                                <p>When you stop expecting people to be perfect, you can like them for who they are.</p>
                            </div>
                        </div>
                    </div>
                    <div className="span4" id="second-person">
                        <div className="thumbnail">
                            <img src="assets/images/Team2.png" alt="team 1" />
                            <h3>John Doe</h3>
                            <ul className="social">
                                <li>
                                    <a href="/">
                                        <span className="icon-facebook-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-twitter-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-linkedin-circled"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="mask">
                                <h2>Designer</h2>
                                <p>When you stop expecting people to be perfect, you can like them for who they are.</p>
                            </div>
                        </div>
                    </div>
                    <div className="span4" id="third-person">
                        <div className="thumbnail">
                            <img src="assets/images/Team3.png" alt="team 1" />
                            <h3>John Doe</h3>
                            <ul className="social">
                                <li>
                                    <a href="/">
                                        <span className="icon-facebook-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-twitter-circled"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-linkedin-circled"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="mask">
                                <h2>Photographer</h2>
                                <p>When you stop expecting people to be perfect, you can like them for who they are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-text centered">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                </div>
                <h3>Skills</h3>
                <div className="row-fluid">
                    <div className="span6">
                        <ul className="skills">
                            <li>
                                <span className="bar" data-width="80%"></span>
                                <h3>Graphic Design</h3>
                            </li>
                            <li>
                                <span className="bar" data-width="95%"></span>
                                <h3>Html & Css</h3>
                            </li>
                            <li>
                                <span className="bar" data-width="68%"></span>
                                <h3>jQuery</h3>
                            </li>
                            <li>
                                <span className="bar" data-width="70%"></span>
                                <h3>Wordpress</h3>
                            </li>
                        </ul>
                    </div>
                    <div className="span6">
                        <div className="highlighted-box center">
                            <h1>We're Hiring</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit lobortis nisl ut aliquip consequat. I learned that we can do anything, but we can't do everything...</p>
                            <button className="button button-sp">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section secondary-section">
            <div className="triangle"></div>
            <div className="container centered">
                <p className="large-text">Elegance is not the abundance of simplicity. It is the absence of complexity.</p>
                <a href="/" className="button">Purshase now</a>
            </div>
        </div>
        <div id="clients">
            <div className="section primary-section">
                <div className="triangle"></div>
                <div className="container">
                    <div className="title">
                        <h1>What Client Say?</h1>
                        <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                    </div>
                    <div className="row">
                        <div className="span4">
                            <div className="testimonial">
                                <p>"I've worked too hard and too long to let anything stand in the way of my goals. I will not let my teammates down and I will not let myself down."</p>
                                <div className="whopic">
                                    <div className="arrow"></div>
                                    <img src="assets/images/Client1.png" className="centered" alt="client 1" />
                                    <strong>John Doe
                                        <small>Client</small>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="span4">
                            <div className="testimonial">
                                <p>"In motivating people, you've got to engage their minds and their hearts. I motivate people, I hope, by example - and perhaps by excitement, by having productive ideas to make others feel involved."</p>
                                <div className="whopic">
                                    <div className="arrow"></div>
                                    <img src="assets/images/Client2.png" className="centered" alt="client 2" />
                                    <strong>John Doe
                                        <small>Client</small>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="span4">
                            <div className="testimonial">
                                <p>"Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing."</p>
                                <div className="whopic">
                                    <div className="arrow"></div>
                                    <img src="assets/images/Client3.png" className="centered" alt="client 3" />
                                    <strong>John Doe
                                        <small>Client</small>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="testimonial-text">
                        "Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away"
                    </p>
                </div>
            </div>
        </div>
        <div className="section third-section">
            <div className="container centered">
                <div className="sub-section">
                    <div className="title clearfix">
                        <div className="pull-left">
                            <h3>Our Clients</h3>
                        </div>
                        <ul className="client-nav pull-right">
                            <li id="client-prev"></li>
                            <li id="client-next"></li>
                        </ul>
                    </div>
                    <ul className="row client-slider" id="clint-slider">
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo01.png" alt="client logo 1" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo02.png" alt="client logo 2" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo03.png" alt="client logo 3" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo04.png" alt="client logo 4" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo05.png" alt="client logo 5" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo02.png" alt="client logo 6" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="assets/images/clients/ClientLogo04.png" alt="client logo 7" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="price" className="section secondary-section">
            <div className="container">
                <div className="title">
                    <h1>Price</h1>
                    <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                </div>
                <div className="price-table row-fluid">
                    <div className="span4 price-column">
                        <h3>Basic</h3>
                        <ul className="list">
                            <li className="price">$19,99</li>
                            <li><strong>Free</strong> Setup</li>
                            <li><strong>24/7</strong> Support</li>
                            <li><strong>5 GB</strong> File Storage</li>
                        </ul>
                        <a href="/" className="button button-ps">BUY</a>
                    </div>
                    <div className="span4 price-column">
                        <h3>Pro</h3>
                        <ul className="list">
                            <li className="price">$39,99</li>
                            <li><strong>Free</strong> Setup</li>
                            <li><strong>24/7</strong> Support</li>
                            <li><strong>25 GB</strong> File Storage</li>
                        </ul>
                        <a href="/" className="button button-ps">BUY</a>
                    </div>
                    <div className="span4 price-column">
                        <h3>Premium</h3>
                        <ul className="list">
                            <li className="price">$79,99</li>
                            <li><strong>Free</strong> Setup</li>
                            <li><strong>24/7</strong> Support</li>
                            <li><strong>50 GB</strong> File Storage</li>
                        </ul>
                        <a href="/" className="button button-ps">BUY</a>
                    </div>
                </div>
                <div className="centered">
                    <p className="price-text">We Offer Custom Plans. Contact Us For More Info.</p>
                    <a href="#contact" className="button">Contact Us</a>
                </div>
            </div>
        </div>
        <Newsletter />
        <ContactUs
            socialConfigs = {_.get(TemplateData, 'socialConfigs')}
            contactConfigs = {_.get(TemplateData, 'contactConfigs')}
        />
        <Footer
            footerConfigs = {_.get(TemplateData, 'footerConfigs')}
        />
    </React.Fragment>
  )
}

export default Default
