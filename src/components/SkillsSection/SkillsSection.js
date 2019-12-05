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
            <div role="wrapper" className={styles.skillsWrapper} id="skills">
                <div role="skillsDisplay" className={styles.skillsHolder}>
                    <h1 className={styles.skillsHeading}>Skills</h1>
                    
                </div>
                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#projects" className={styles.scrollDown} id="scrollSkills" address="true"></a>
                </div>
            </div>
        )
    }
}
