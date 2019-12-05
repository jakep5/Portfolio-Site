import React, { Component } from 'react'
import styles from './styles.module.css'

export default class BioSection extends Component {
    render() {
        return (
            <div role="wrapper" className={styles.bioWrapper} id="bio">    
                    <div role="bioDisplay" className={styles.bioHolder}>
                        <h1 className={styles.bioHeading}>
                            <u>BIO</u>
                        </h1>
                        <p className={styles.bio}>
                            I am an ex-premed student who has since decided to change career choices and follow my passion for computers and software
                            development. I've always been enthralled by the interworkings of computers, having built a computer of my own
                            and developed a strong intrigue for how computers function. I enjoy coding because it gives me an ever-lasting 
                            creative outlet and motivates me to continually develop problem solving skills, which I have found to be extremely 
                            helpful in all areas of life!

                            While not positioned infront of my computer, I can be found attempting to not die while running, playing with my dog, 
                            playing guitar, or spending time outdoors. I love people and enjoy socializing with people I have never met before. I am
                            somewhat of an overthinker, so I have developed a habit of meditation and zoning out to music.  
                        </p>
                    </div>
            </div>
        )
    }
}
