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
            <div className={styles.nav}>
              <div className={styles.navHeader}>
                <div className={styles.navTitle}>
                </div>
              </div>
              <div className={styles.navBtn}>
                <label for="navCheck">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              <div className={styles.navLinks}>
                <a href="#bio" target="_blank" id="bioLink">Bio</a>
                <a href="#skills" target="_blank" id="skillsLink">Skills</a>
                <a href="#projects" target="_blank"id="projectsLink">Projects</a>
                <a href="#contactInfo" target="_blank" id="contactInfoLink">Contact info</a>
              </div>
            </div>
        )

    }


    
}
