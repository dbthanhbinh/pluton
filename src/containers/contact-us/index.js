import React from 'react'
const ContactUs = () => {
    return (
        <div id="contact" className="contact">
            <div className="section secondary-section">
                <div className="container">
                    <div className="title">
                        <h1>Contact Us</h1>
                        <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="map-canvas" id="map-canvas">Loading map...</div>
                    <div className="container">
                        <div className="row-fluid">
                            <div className="span5 contact-form centered">
                                <h3>Say Hello</h3>
                                <div id="successSend" className="alert alert-success invisible">
                                    <strong>Well done!</strong>Your message has been sent.</div>
                                <div id="errorSend" className="alert alert-error invisible">There was an error.</div>
                                <form id="contact-form" action="php/mail.php">
                                    <div className="control-group">
                                        <div className="controls">
                                            <input className="span12" type="text" id="name" name="name" placeholder="* Your name..." />
                                            <div className="error left-align" id="err-name">Please enter name.</div>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="controls">
                                            <input className="span12" type="email" name="email" id="email" placeholder="* Your email..." />
                                            <div className="error left-align" id="err-email">Please enter valid email adress.</div>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="controls">
                                            <textarea className="span12" name="comment" id="comment" placeholder="* Comments..."></textarea>
                                            <div className="error left-align" id="err-comment">Please enter your comment.</div>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="controls">
                                            <button id="send-mail" className="message-btn">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="span9 center contact-info">
                        <p>123 Fifth Avenue, 12th,Belgrade,SRB 11000</p>
                        <p className="info-mail">ourstudio@somemail.com</p>
                        <p>+11 234 567 890</p>
                        <p>+11 286 543 850</p>
                        <div className="title">
                            <h3>We Are Social</h3>
                        </div>
                    </div>
                    <div className="row-fluid centered">
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
                            <li>
                                <a href="/">
                                    <span className="icon-pinterest-circled"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-dribbble-circled"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-gplus-circled"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs