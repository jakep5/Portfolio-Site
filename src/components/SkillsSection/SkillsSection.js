import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class SkillsSection extends Component {

    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#scrollSkills").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });
    }

    render() {
        return (
            <div role="presentation" className={styles.skillsWrapper} id="skills">
                <div role="contentinfo" className={styles.skillsHolder}>
                    <h1 className={styles.skillsHeading}>Skills</h1>

                    <div className={styles.imageHolder}>
                        <img alt="Skills display 1" className={styles.img1} src="https://user-images.githubusercontent.com/53489910/83068661-45e81980-a02e-11ea-8166-f9fe643a1723.png" />
                        <img alt="Skills display 2" className={styles.img2} src="https://user-images.githubusercontent.com/53489910/83068789-7465f480-a02e-11ea-96c2-2aa61133b568.png" />
                        <img alt="Skills display 3" className={styles.img3} src="https://user-images.githubusercontent.com/53489910/83068982-c9096f80-a02e-11ea-9698-d1517640bf68.png" />
                    </div>

                    <p className={styles.skillsText}>*10 corresponds to my highest level of mastery</p>
                    
                </div>
                <div className={styles.pictureHolder}>
                    <img alt="floating astronaut" className={styles.skillsAstro} src="https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png"></img>
                </div>
                <div role="button" className={styles.buttonHolder3}>
                    <a href="#projects" aria-label="Scroll down" className={styles.scrollDown} id="scrollSkills" address="true"></a>
                </div>
            </div>
        )
    }
}
