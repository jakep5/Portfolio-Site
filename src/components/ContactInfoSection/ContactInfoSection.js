import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class ContactInfoSection extends Component {

    componentDidMount() {
        jQuery(document).ready(function($) {
          $("a#scrollTop").on("click", function(e) {
            e.preventDefault();
            $("body, html").animate({ 
              scrollTop: $( $(this).attr('href') ).offset().top 
            }, 600);
          });
        });
    }

    render() {

        return (
            <div role="contactInfo" className={styles.contactInfoWrapper} id="contactInfo">
                <div role="contactInfoHolder" id="contactInfoHolder" className={styles.contactInfoHolder}>
                    <h1 className={styles.contactHeader}>
                        Contact me!
                    </h1>

                    <p className={styles.contact}>email: <a className={styles.contactInfoLink} href="mailto:jakepagel1@yahoo.com">jakepagel1@yahoo.com</a></p>

                    <p className={styles.contact}>phone: 262-527-2421</p>

                    <p className={styles.contact}>github: <a className={styles.contactInfoLink} href="https://github.com/jakep5" target="_blank">jakep5</a></p>

                    <p className={styles.contact}>linkedin: <a className={styles.contactInfoLink} href="https://www.linkedin.com/in/jake-pagel-38b243191/" target="_blank">/jake-pagel</a></p>
                </div>
                <div className={styles.pictureHolder}>
                    <img src="https://cdn.clipart.email/44e4cc8daf6e7aab4d878a0510a5d8ef_astronaut-png-image-purepng-free-transparent-cc0-png-image-library_1888-2280.png" className={styles.contactAstro} />
                </div>
                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#title" className={styles.scrollDown} id="scrollTop" address="true"></a>
                </div>
            </div>
        )
    }
}
