import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'


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
    }

    render() {

        return (

            <>
                <button name="gitHub" type="button" id="github" className={styles.homepageButton}><i className={styles.faGithub}></i></button>
                <button name="email" type="button" id="email" className={styles.homepageButton}><i className={styles.faEnvelopeOpenText}></i></button>
                <button name="contactInfo" type="button" id="contactInfo" className={styles.homepageButtonContact}><i className={styles.faIdCard}></i></button>
                <button name="email" type="button" id="misc" className={styles.homepageButton}></button>

                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#bio" className={styles.scrollDown} id="scrollMain" address="true"></a>
                </div>
            </>
        )
    }
}


