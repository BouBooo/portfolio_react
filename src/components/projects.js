import React, { Component } from "react";
import { Tab, Tabs, Cell, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="symfony-icon" src="https://freeiconshop.com/wp-content/uploads/edd/php-flat.png"/>
                        <CardTitle className="card-title">
                            E-Smoke - Symfony 4
                        </CardTitle>
                        <CardText>
                            Site e-commerce de liquides pour cigarettes electroniques, avec Symfony.
                            <ul>
                                <li>Espace membre</li>
                                <li>Gestion de panier</li>
                                <li>Dashboard Admin</li>
                            </ul>
                            <p>Base de données: MySql.</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card className="project-element" shadow={5}>
                        <img className="project-img" alt="symfony-icon" src="https://freeiconshop.com/wp-content/uploads/edd/php-flat.png"/>
                        <CardTitle className="card-title">
                            Downloader - Symfony 4
                        </CardTitle>
                        <CardText>
                            Site de téléchargement de musique Youtube et Soundcloud. 
                                <ul>
                                    <li>Youtube : Musique, Chaîne, Playlist</li>
                                    <li>Soundcloud : Musique, Playlist</li>
                                    <li>API</li>
                                </ul>
                                <p>Base de données: MySql</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button colored>Github</Button>
                            <Button colored>Cloner</Button>
                            <Button href="https://github.com/BouBooo/Downloader-PHP/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
            

                    <Card className="project-element" shadow={5}>
                        <img className="project-img" alt="php-icon" src="https://freeiconshop.com/wp-content/uploads/edd/php-flat.png"/>
                        <CardTitle className="card-title">
                            Httpstatus - Descartes
                        </CardTitle>
                        <CardText>
                            Site de monitoring de sites web, afin de récupérer leur status actuel et historique.
                                <ul>
                                    <li>Espace membre</li>
                                    <li>Dashboard Admin</li>
                                    <li>API</li>
                                </ul>
                                <p>Base de données: MariaDB</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button colored>Github</Button>
                            <Button colored>Cloner</Button>
                            <Button colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="nodejs-icon" src="https://img.icons8.com/color/420/nodejs.png"/>
                        <CardTitle className="card-title">
                            Todos Manager - NodeJS
                        </CardTitle>
                        <CardText>
                            Todo liste avec système d'utilisateurs associé.
                            <ul>
                                <li>Todo manager</li>
                                <li>Users manager</li>
                                <li>API REST</li>
                            </ul>
                            <p>Base de données: SQLite</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button colored>Cloner</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="nodejs-icon" src="https://img.icons8.com/color/420/nodejs.png"/>
                        <CardTitle className="card-title">
                            Jeu Quizz - NodeJS
                        </CardTitle>
                        <CardText>
                            Petit quizz à thèmes.
                            <ul>
                                <li>Thèmes aux choix</li>
                                <li>Système de points</li>
                                <li>Jouable depuis le terminal</li>
                                
                            </ul>
                            <p>Base de données: SQLite</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button colored>Cloner</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="nodejs-icon" src="https://img.icons8.com/color/420/nodejs.png"/>
                        <CardTitle className="card-title">
                            Sites Manager - NodeJS
                        </CardTitle>
                        <CardText>
                            Websites manager avec système de propriétaire associé.
                            <ul>
                                <li>Websites manager</li>
                                <li>Owner manager</li>
                                <li>API REST</li>
                            </ul>
                            <p>Base de données: MySQL</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button colored>Cloner</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="nodejs-icon" src="https://freeiconshop.com/wp-content/uploads/edd/php-flat.png"/>
                        <CardTitle className="card-title">
                            Cloud Zone - PHP
                        </CardTitle>
                        <CardText>
                            Site de stockage et partage d'images publiques ou privées.
                            <ul>
                                <li>Espace membre</li>
                                <li>Dashboard Admin</li>
                                <li>Messagerie interne</li>
                            </ul>
                            <p>Base de données: MySQL</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-element" shadow={5}>
                    <img className="project-img" alt="nodejs-icon" src="http://chittagongit.com/download/12852"/>
                        <CardTitle className="card-title">
                            Plante connectée - C
                        </CardTitle>
                        <CardText>
                            Système de détection de température et humidité.
                            <ul>
                                <li>Réception température et humidité</li>
                                <li>Fréquence d'envoi automatisée</li>
                                <li>Partage des données reçues</li>
                            </ul>
                            <p>Base de données: None</p>
                        </CardText>
                        <CardActions className="project-actions" border>
                            <Button href="https://github.com/BouBooo/e-smoke" target="_blank" colored>Github</Button>
                            <Button href="https://github.com/BouBooo/e-smoke/archive/master.zip" colored>Télécharger</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={ this.state.activeTab } onChange={(tabId) => this.setState({ activeTab : tabId })} ripple>
                    <Tab>PHP</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Autres</Tab>
                </Tabs>

                <section className="projects">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                { this.toggleCategories() }
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>


        )
    }
}

export default Projects;