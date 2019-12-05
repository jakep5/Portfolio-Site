import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class ProjectsSection extends Component {

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

    render() {

        return (
            <div role="wrapper" className={styles.projectWrapper}>    
                    <div role="bioDisplay" className={styles.projectHolder}>
                        <h1 className={styles.projectHeading}>
                            <u>PROJECTS</u>
                        </h1>
                        <h2 className={styles.projectHeadingTwo}>Thinkful Quiz Application </h2>
                        <div role="languageIcons" class="languageIcons">
                            <img alt="HTML5 Icon" className={styles.HTML5Icon} src="https://user-images.githubusercontent.com/53489910/65455804-86581d80-de37-11e9-93fb-fd0b10380102.png" />
                            <img alt="JQuery Icon" className={styles.jqueryIcon} src="https://user-images.githubusercontent.com/53489910/65455806-86581d80-de37-11e9-8be1-be1836c947d3.png" />
                            <img alt="CSS Icon" className={styles.cssIcon} src="https://user-images.githubusercontent.com/53489910/65455801-85bf8700-de37-11e9-8f26-ccd241c07287.png" />
                            <img alt="JavaScript Icon" className={styles.javascriptIcon} src="https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon-by-vexels.png" />
                        </div> 

                        <div role="projectScreenshot" class="projectScreenshot">
                            <img alt="quiz app screenshot" className={styles.quizScreenshot} src="https://user-images.githubusercontent.com/53489910/65455807-86581d80-de37-11e9-96a7-46f7579e1182.png" />
                        </div>
                        <a href="https://jakep5.github.io/Quiz-Project/">Live Application</a>

                        <a href="https://github.com/jakep5/Quiz-Project">GitHub Repository</a>

                        <p className={styles.projectDescription}>
                            Developed knowledge of JavaScript and JQuery by designing a simple and interactive quiz from scratch.
                            The quiz is ten questions, and relates to music artists. Has elements of functionality such as an updating legend that 
                            updates with each question, the ability to restart the quiz after the final question, and an update of current score after
                            each question. These elements were grabbed and manipulated using JQuery and Javascript.
                        </p>
                    </div>
                    <div role="buttonHolder3" className={styles.buttonHolder3}>
                            <a href="#contactInfo" className={styles.scrollDown} id="scrollProjects" address="true"></a>
                    </div>
            </div>
        )
    }
}
