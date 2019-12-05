import React, { Component } from 'react'
import styles from './styles.module.css'


export default class MenuButtons extends Component {

    render() {

        return (

            <>
                <button name="gitHub" type="button" id="github" class="homepageButton"><i class="fab fa-github"></i></button>
                <button name="email" type="button" id="email" class="homepageButton"><i class="fas fa-envelope-open-text"></i></button>
                <button name="contactInfo" type="button" id="contactInfo" class="homepageButton"><i class="fas fa-id-card"></i></button>
                <button name="email" type="button" id="misc" class="homepageButton"></button>

                <div role="buttonHolder3" className={styles.buttonHolder3}>
                        <a href="#bio" class="scroll-down" id="scroll" address="true"></a>
                </div>
            </>
        )
    }
}


