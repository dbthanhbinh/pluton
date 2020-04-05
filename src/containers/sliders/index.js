import React from 'react'
const Slider = () => {
    return (
        <div id="home">
            <div id="da-slider" className="da-slider">
                <div className="triangle"></div>
                <div className="mask"></div>
                <div className="container">
                    <div className="da-slide">
                        <h2 className="fittext2">Welcome to pluton theme</h2>
                        <h4>Clean & responsive</h4>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                        <a href="/" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="assets/images/Slider01.png" alt="image01" width="320" />
                        </div>
                    </div>
                    <div className="da-slide">
                        <h2>Easy management</h2>
                        <h4>Easy to use</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <a href="/" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="assets/images/Slider02.png" width="320" alt="image02" />
                        </div>
                    </div>
                    <div className="da-slide">
                        <h2>Revolution</h2>
                        <h4>Customizable</h4>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <a href="/" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="assets/images/Slider03.png" width="320" alt="image03" />
                        </div>
                    </div>
                    <div className="da-arrows">
                        <span className="da-arrows-prev"></span>
                        <span className="da-arrows-next"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider