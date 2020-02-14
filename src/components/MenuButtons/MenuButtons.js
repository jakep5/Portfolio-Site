import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default class MenuButtons extends Component {

    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#scrollMain").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });
        jQuery(document).ready(function($) {
            $("button#contactInfo").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $('#contactInfoHolder').offset().top 
                }, 600);
            });
        });
    }

    openLinkedIn(e) {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/jake-pagel/', '_blank');
    }

    openGitHub(e) {
        e.preventDefault();
        window.open('https://github.com/jakep5', '_blank');
    }

    openEmail(e) {
        e.preventDefault();
        window.open('mailto:jakepagel1@yahoo.com', '_blank');
    }

    render() {

        return (

            <>
                <button onClick={(e) => this.openGitHub(e)} name="gitHub" type="button" id="github" className={styles.homepageButton}><FontAwesomeIcon icon={faGithubSquare} className={styles.faGithub} /></button>
                <button onClick={(e) => this.openEmail(e)} name="email" type="button" id="email" className={styles.homepageButton}><FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.faEnvelopeOpenText} /></button>
                <button name="contactInfo" type="button" id="contactInfo" className={styles.homepageButtonContact}><FontAwesomeIcon icon={faAddressCard} className={styles.faIdCard} /></button>
                <button onClick={(e) => this.openLinkedIn(e)} name="email" type="button" id="misc" className={styles.homepageButton}><FontAwesomeIcon icon={faLinkedin} className={styles.faLinkedIn} /></button>
                <div role="button" className={styles.buttonHolder3}>
                    <a role="button" href="#bio" className={styles.scrollDown} id="scrollMain" address="true"></a>
                </div>
            </>
        )
    }
}


