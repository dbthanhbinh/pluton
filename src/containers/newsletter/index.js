import React from 'react'
const Newsletter = () => {
    return (
        <div className="section third-section">
            <div className="container newsletter">
                <div className="sub-section">
                    <div className="title clearfix">
                        <div className="pull-left">
                            <h3>Newsletter</h3>
                        </div>
                    </div>
                </div>
                <div id="success-subscribe" className="alert alert-success invisible">
                    <strong>Well done!</strong>You successfully subscribet to our newsletter.</div>
                <div className="row-fluid">
                    <div className="span5">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="span7">
                        <form className="inline-form">
                            <input type="email" name="email" id="nlmail" className="span8" placeholder="Enter your email" required />
                            <button id="subscribe" className="button button-sp">Subscribe</button>
                        </form>
                        <div id="err-subscribe" className="error centered">Please provide valid email address.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter