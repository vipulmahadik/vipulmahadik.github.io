import React from 'react';
import snowLogo from '../snow.png'
import passageLogo from '../passage.png'
import idLogo from '../idlogo.png'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
      
    render() {
        return (
            <div className="home">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="header">
                                <div className="intro">Hello, I'm Vipul.</div>
                                <div className="subtitle">
                                    I <span>design</span>, <span>code</span>, <span>package</span> and <span>deploy</span> apps to <s>users</s> <span className="subtitle-diff">people..</span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="section-title">My Experience</section>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="experience">
                                <div className="experience-wrapper">
                                    <div className="logo">
                                        <img srcSet={snowLogo} alt="snow logo" />
                                        <div className="designation">Santa Clara, CA</div>
                                        <div className="duration">Feb 2020 - Present</div>
                                    </div>
                                    <div className="experience-body">
                                        <div className="company">Servicenow</div>
                                        <div className="designation">Full Stack Engineer - Machine Learning</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <section className="experience">
                                <div className="experience-wrapper">
                                    <div className="logo">
                                        <img srcSet={passageLogo} alt="snow logo" />
                                        <div className="designation">Mountain View, CA</div>
                                        <div className="duration">March 2019 - Feb 2020</div>
                                    </div>
                                    <div className="experience-body">
                                        <div className="company">Passage AI</div>
                                        <div className="designation">Full Stack Engineer - Node/Vue</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <section className="experience">
                                <div className="experience-wrapper">
                                    <div className="logo">
                                        <img srcSet={idLogo} alt="snow logo" />
                                        <div className="designation">Campbell, CA</div>
                                        <div className="duration">Aug 2017 - Feb 2019</div>
                                    </div>
                                    <div className="experience-body">
                                        <div className="company">iD Tech Camps</div>
                                        <div className="designation">Backend Dev - PHP/Node</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <section className="experience">
                                <div className="experience-wrapper">
                                    <div className="logo">
                                        <img srcSet={idLogo} alt="snow logo" />
                                        <div className="designation">Mumbai</div>
                                        <div className="duration">May 2013 - July 2015</div>
                                    </div>
                                    <div className="experience-body">
                                        <div className="company">Ninja Online Services</div>
                                        <div className="designation">Web Developer</div>
                                    </div>
                                </div>
                            </section> 
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }
}

export default Home;