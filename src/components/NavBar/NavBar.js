import React from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class NavBar extends React.Component{

    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#bioLink").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });

        jQuery(document).ready(function($) {
            $("a#skillsLink").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });

        jQuery(document).ready(function($) {
            $("a#projectsLink").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });

        jQuery(document).ready(function($) {
            $("a#contactInfoLink").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });     
    }

    render() {

        return (
            <div className={styles.nav} role="navigation">
                <div role="presentation" className={styles.navHeader}>
                    <div role="presentation" className={styles.navTitle}></div>
                </div>
                <div role="presentation" className={styles.navBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div role="navigation" className={styles.navLinks}>
                    <a href="#bio" target="_blank" className={styles.bioLink} id="bioLink">Bio</a>
                    <a href="#skills" target="_blank" className={styles.skillsLink} id="skillsLink">Skills</a>
                    <a href="#projects" target="_blank" className={styles.projectsLink} id="projectsLink">Projects</a>
                    <a href="#contactInfoHolder" target="_blank" className={styles.contactInfoLink} id="contactInfoLink">Contact info</a>
                    <a href="https://drive.google.com/file/d/1wAlZt5E60FzFfRAVbJV2Zmq4jPOD3LfP/view?usp=sharing" target="_blank" className={styles.resumeLink} id="resumeLink">Resume</a>
                </div>
            </div>
        )

    } 
}
