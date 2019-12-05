import React, { Component } from 'react'
import styles from './styles.module.css'


export default class MenuButtons extends Component {

    render() {

        return (

            <>
                <button name="gitHub" type="button" id="github" className={styles.homepageButton}><i className={styles.faGithub}></i></button>
                <button name="email" type="button" id="email" className={styles.homepageButton}><i className={styles.faEnvelopeOpenText}></i></button>
                <button name="contactInfo" type="button" id="contactInfo" className={styles.homepageButton}><i className={styles.faIdCard}></i></button>
                <button name="email" type="button" id="misc" className={styles.homepageButton}></button>

                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#bio" className={styles.scrollDown} id="scroll" address="true"></a>
                </div>
            </>
        )
    }
}


