import React from 'react'
const Service = () => {
    return (
        <div className="section primary-section" id="service">
            <div className="container">
                <div className="title">
                    <h1>What We Do?</h1>
                    <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                </div>
                <div className="row-fluid">
                    <div className="span4">
                        <div className="centered service">
                            <div className="circle-border zoom-in">
                                <img className="img-circle" src="assets/images/Service1.png" alt="service 1" />
                            </div>
                            <h3>Modern Design</h3>
                            <p>We Create Modern And Clean Theme For Your Business Company.</p>
                        </div>
                    </div>
                    <div className="span4">
                        <div className="centered service">
                            <div className="circle-border zoom-in">
                                <img className="img-circle" src="assets/images/Service2.png" alt="service 2" />
                            </div>
                            <h3>Powerfull Theme</h3>
                            <p>We Create Modern And Powerful Theme With Lots Animation And Features</p>
                        </div>
                    </div>
                    <div className="span4">
                        <div className="centered service">
                            <div className="circle-border zoom-in">
                                <img className="img-circle" src="assets/images/Service3.png" alt="service 3" />
                            </div>
                            <h3>Clean Code</h3>
                            <p>We Create Modern And Powerful Html5 And CSS3 Code Easy For Read And Customize.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service