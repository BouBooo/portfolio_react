import React, { Component } from "react";
import { Grid } from 'react-mdl';

class Aboutme extends Component {
    render() {
        return (
                <Grid>
                    <div class="aboutme-title">
                        <h1>Qui suis-je ?</h1>  
                        <hr/>
                    </div>  
                    <div class="aboutme-content">
                        <p>Je m'appelle Florent NICOLAS, j'ai 20 ans, et suis en bachelor informatique.</p>
                        <p>Je suis passionné d'informatique, et plus particulièrement de développement web.</p>
                        <p>J'essaye au maximum de diversifier mes projets, tout en me spécialisant dans des technologies qui me tiennent à coeur</p>
                        <p>Vous pouvez retrouver dans l'onglet Projets les créations que je trouvent les plus intéressantes. (Notamment des API, sites web, espace d'administration etc..)</p>
                    </div>

                    <div class="copyright-aboutme">
                        <p>&copy; 2019, NICOLAS Florent</p>
                    </div>
                </Grid>
        )
    }
}

export default Aboutme;