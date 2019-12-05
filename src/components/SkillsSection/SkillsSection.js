import React, { Component } from 'react'
import styles from './styles.module.css'

export default class SkillsSection extends Component {

    render() {
        return (
            <div role="wrapper" className={styles.skillsWrapper}>
                <div role="skillsDisplay" className={styles.skillsHolder}>
                    <h1 className={styles.skillsHeading}>Skills</h1>
                    
                </div>
            </div>
        )
    }
}
