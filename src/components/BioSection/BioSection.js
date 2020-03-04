import React, { Component } from 'react'
import styles from './styles.module.css'
import jQuery from 'jquery'

export default class BioSection extends Component {

    componentDidMount() {
        jQuery(document).ready(function($) {
            $("a#scrollBio").on("click", function(e) {
                e.preventDefault();
                $("body, html").animate({ 
                    scrollTop: $( $(this).attr('href') ).offset().top 
                }, 600);
            });
        });
    }


    render() {
        return (
            <div role="presentation" className={styles.bioWrapper} id="bio">    
                    <div role="contentinfo" className={styles.bioHolder}>
                        <h1 className={styles.bioHeading}>
                            <u>BIO</u>
                        </h1>
                        <p className={styles.bio}>
                            I am an ex-premed student who has since decided to change career choices and follow my passion for computers and software
                            development. I've always been enthralled by the interworkings of computers, having built a computer of my own
                            and developed a strong intrigue for how computers function. I enjoy coding because it gives me an ever-lasting 
                            creative outlet and motivates me to continually develop problem solving skills, which I have found to be extremely 
                            helpful in all areas of life!

                        </p>
                        <p className={styles.bioTwo}>
                            While not positioned infront of my computer, I can be found attempting to not die while running, playing with my dog, 
                            playing guitar, or spending time outdoors. I love people and enjoy socializing with people I have never met before. I am
                            somewhat of an overthinker, so I have developed a habit of meditation and zoning out to music.  
                        </p>
                    </div>
                    <div className={styles.pictureHolder} role="presentation">
                        <img className={styles.astroImage} alt="floating astronaut" src="https://beneration.com/coveragespace/wp-content/uploads/2017/11/waving-astronaut-e1514942512563.png"></img>
                    </div>
                    <div role="presentation" className={styles.buttonHolder3}>
                        <a href="#skills" role="button" aria-label="Scroll down" className={styles.scrollDown} id="scrollBio" address="true"></a>
                    </div>
            </div>
        )
    }
}
