import React, { Component } from 'react'
import MenuButtons from '../MenuButtons/MenuButtons'
import styles from './styles.module.css'


export default class TitleSection extends Component {

    render() {

        return (
            <div role="contentinfo" className={styles.main} >

                <section role="contentinfo">
                    <h1 className={styles.name}>Hi, I'm Jake Pagel</h1>
                    <p className={styles.intro}>I'm a fullstack developer living in Milwaukee, Wisconsin with a passion for front-end development</p>
                </section>

                <section role="buttons">
                    <div role="menu">
                        <MenuButtons />
                    </div>
                </section>

            </div>
        )
    }
}
