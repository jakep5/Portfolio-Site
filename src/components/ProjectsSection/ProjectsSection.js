import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'
import projects from '../../projects';

export default class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectStore: projects,
            currentProject: 0
        }
    }
    

    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#scrollProjects").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });
    }

    handleProjectChange = (e) => {

        if (this.state.currentProject == 2) {
            this.setState({
                currentProject: 0,
            })
        } else {
            this.setState({
                currentProject: this.state.currentProject + 1,
            })
        }
    }

    render() {

        let projectStore = this.state.projectStore;
        let currentProject = this.state.currentProject;

        return (
            <div role="wrapper" className={styles.projectWrapper} id="projects">    
                    <div role="bioDisplay" className={styles.projectHolder}>
                        <h1 className={styles.projectHeading}>
                            <u>PROJECTS</u>
                        </h1>
                        <div className={styles.fadeProjects}>
                            <h2 className={styles.projectHeadingTwo}>{projectStore[currentProject].title}</h2>
                            <div role="languageIcons" className="languageIcons">
                                {projectStore[currentProject].languageIcons.map((icon) => {
                                    return (
                                        <img alt={icon.alt} className={icon.class} src={icon.src} />
                                    )
                                })}
                            </div> 

                            <div role="projectScreenshot" class="projectScreenshot">
                                <img alt="quiz app screenshot" className={styles.quizScreenshot} src={projectStore[currentProject].screenshot} />
                            </div>
                            <a href={projectStore[currentProject].applink}>Live Application</a>

                            <a href={projectStore[currentProject].githublink}>GitHub Repository</a>

                            <p className={styles.projectDescription}>
                            {projectStore[currentProject].description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.projectScrollHolder}>
                        <a className={styles.scrollDownProject} id="projectScroll" onClick={(e) => this.handleProjectChange(e)} address="true"></a>
                    </div>
                    <div role="buttonHolder3" className={styles.buttonHolder3}>
                            <a href="#contactInfo" className={styles.scrollDown} id="scrollProjects" address="true"></a>
                    </div>
            </div>
        )
    }
}
