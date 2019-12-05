import React from 'react'
import styles from './styles.module.css'

export default function NavBar() {
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
            <a href="http://stackoverflow.com/users/4084003/" target="_blank">Bio</a>
            <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Skills</a>
            <a href="https://codepen.io/jo_Geek/" target="_blank">Projects</a>
            <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Contact info</a>
          </div>
        </div>
    )
}
