import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <Grid className="contact-section">
                <div class="section">
                    <div class="top-border left"></div>
                    <div class="top-border right"></div>
                    <h1>Me contacter</h1>
                    <p>Vous souhaitez me parler d'un projet? N'hésitez pas à m'appeler ou m'envoyer un mail, 
                        et je vous répondrais dans les meilleurs délais.</p>
                    <div className="contact-grid">
                        <Cell col={6}>
                            <i class="fa fa-phone fa-3x mb-3 sr-contact"/>
                            <p>07.80.02.74.59</p>
                        </Cell>
                        <Cell col={6}>
                            <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"/> 
                            <p>contact@florentnicolas.com</p>
                        </Cell>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2019, NICOLAS Florent</p>
                </div>
            </Grid>
        )
    }
}

export default Contact;