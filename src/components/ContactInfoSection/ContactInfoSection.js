import React, { Component } from 'react'
import styles from './styles.module.css'

export default class ContactInfoSection extends Component {

    render() {

        return (
            <div role="contactInfo" className={styles.contactInfoWrapper} id="contactInfoWrapper">
                <div role="contactInfoHolder" className={styles.contactInfoHolder}>
                    <h1 className={styles.contactHeader}>
                        Contact me!
                    </h1>

                    <p className={styles.contact}>email: <a href="mailto:jakepagel1@yahoo.com">jakepagel1@yahoo.com</a></p>

                    <p className={styles.contact}>phone: 262-527-2421</p>

                    <p className={styles.contact}>github: <a href="https://github.com/jakep5" target="_blank">jakep5</a></p>

                    <p className={styles.contact}>linkedin: <a href="https://www.linkedin.com/in/jake-pagel-38b243191/" target="_blank">Jake Pagel</a></p>
                </div>
                <a href="#main" class="scroll-downTop" id="scrollTop" address="true"></a>
            </div>
        )
    }
}
