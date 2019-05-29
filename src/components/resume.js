import React, { Component } from "react";
import { Grid, Cell, Button } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
        <div class="wrapper">
			<div class="container">
				<div class="header">
					<div class="photo head_items">
						<div class="myPhoto"><img class="resume-avatar-img" alt="avatar" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"/></div>
					</div>
					<div class="name head_items">
						<a class="title-cv" href="/">Florent NICOLAS </a>
						<h5>Développeur Fullstack en devenir</h5>
					</div>

					<div class="container_inner">
						<div class="address head_items">

							<table>
								<tr>
									<td>07 80 02 74 59<img alt="phone-icon" src="http://www.pictureshack.ru/images/79017_phone-icon.png"/></td>
								</tr>
								<tr>
									<td>https://florentnicolas.com<img alt="website-icon" src="https://img.icons8.com/ios/100/000000/internet.png"/></td>
								</tr>
								<tr>
									<td>contact@florentnicolas.com<img alt="mail-icon" src="https://img.icons8.com/metro/52/000000/secured-letter.png"/></td>
								</tr>
								<tr>
									<td>France<img alt="localisation-icon" src="http://www.pictureshack.ru/images/26062_location-icon.png"/></td>
								</tr>
								<tr>
									<td id="last_td">Bordeaux, 33100</td>
								</tr>
							</table>
						</div>
					</div>
				</div>

				
				<div class="refSkill">
					<div class="skills">
								<div class="skills-title">
									<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
									<span class="resume-skills-title">Expérience</span>
								</div>
								<div class="experience-elements">
								<h4>Stages</h4>
									<div class="stages">
										<div class="stages-dates">
											<p>11/06/2019  08/08/2019</p>
											<p>23/04/2019  30/05/2019</p>
										</div>
										<div class="stages-content">
											<p>Développement Web (ReactJS, PHP, HTML/CSS)</p>
											<p>SEO Optimisation & Référencement</p>
										</div>
									</div>
								</div>
						</div>
						<div class="skills">
							<div class="skills-title">
								<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
								<span class="resume-skills-title">Formation</span>
							</div>
							<div class="experience-elements">
							<h4>Stages</h4>
								<div class="stages">
									<div class="stages-dates">
										<p>Juin 2016</p>
										<p>Depuis 2017</p>
									</div>
									<div class="stages-content">
										<p>Baccalauréat, Option Maths</p>
										<p>Bachelor 2  - Ingésup</p>
									</div>
								</div>
							</div>
					</div>
				</div>

				<div class="refSkill">
					<div class="skills">
						<div class="skills-title">
							<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
							<span class="resume-skills-title">Compétences</span>
						</div>
						<div class="experience-elements">
							<div class="stages">
								<div class="stages-title">
									<p>Frameworks</p>
									<p>Databases</p>
									<p>Autres</p>
								</div>
								<div class="stages-content">
									<p>Symfony, Descartes, Micro-framework personnel</p>
									<p>MySQL, PostgreSql, MariaDB, Oracle, SQLite</p>
									<p>NodeJS, ReactJS</p>
								</div>
							</div>
						</div>
					</div>
					<div class="skills">
							<div class="skills-title">
								<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
								<span class="resume-skills-title">Langages informatiques</span>
							</div>
							<div class="progress_list">
								<div class="ul_skills">
									<ul>
										<li><span class="skill">HTML</span></li>
										<li><span class="skill">CSS</span></li>
										<li><span class="skill">PHP</span></li>
										<li><span class="skill">SQL</span></li>
										<li><span class="skill">JS</span></li>
									</ul>
								</div>

								<div id="skills_progrss" class="progressBar">
									<div class="progress">
										<div class="green" id="green_1"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="green_2"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="green_3"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="green_4"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="green_5"></div>
										<div class="gray"></div>
									</div>
								</div>
							</div>
						</div>
				</div>
				<div class="refSkill">
					<div class="references">
						<div class="skills">
							<div class="skills-title">
								<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
								<span class="resume-skills-title">Langues</span>
							</div>

							<div class="progress_list">
								<div class="ul_languages">
									<ul>
										<li><span class="skill">Français</span></li>
										<li><span class="skill">Anglais </span></li>
										<li><span class="skill">Espagnol</span></li>
									</ul>
								</div>

								<div class="progressBar">
									<div class="progress">
										<div class="green" id="french"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="english"></div>
										<div class="gray"></div>
									</div>
									<div class="progress">
										<div class="green" id="spanish"></div>
										<div class="gray"></div>
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="skills">
							<div class="skills-title">
								<img class="skills-img-title" alt="skills-icon" src="http://www.pictureshack.ru/images/93569_skillsIcon.png"/>
								<span class="resume-skills-title">Loisirs</span>
							</div>
							<div class="loisirs">
								<div class="icons">
									<div class="loisirs-container">
										<div class="loisirs-element">
											<img alt="music" src="https://img.icons8.com/metro/26/000000/musical-notes.png"/>
											<p>Musique</p>
										</div>
										<div class="loisirs-element">
											<img src="https://img.icons8.com/ios/32/000000/film-reel-filled.png"/>
											<p>Films, Séries</p>
										</div>
										<div class="loisirs-element">
											<img src="https://img.icons8.com/metro/26/000000/trainers.png"/>
											<p>Sport</p>
										</div>
										<div class="loisirs-element">
											<img src="https://img.icons8.com/metro/26/000000/laptop.png"/>
											<p>Dev web</p>
										</div>
									</div>
										
								</div>
							</div>
					</div>
				</div>
				
			</div>
			<div class="copyright">
                <p>&copy; 2019, NICOLAS Florent</p>
            </div>
		</div>
        )
    }
}

export default Resume;