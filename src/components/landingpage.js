import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";


class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img alt="avatar" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png" className="avatar-img" />

                        <div className="banner-text">
                            <h1>Full Stack Web Developper</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | PHP | Symfony | SQL | NodeJS</p>

                            <div className="social-links">
                                <a href="google.com" target="_blank">
                                    <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>
                                <a href="instagram.com" target="_blank">
                                    <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>
                                <a href="google.com" target="_blank">
                                    <i className="fa fa-envelope-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>

                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default LandingPage;