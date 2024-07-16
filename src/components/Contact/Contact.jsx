import React from 'react';
import styles from './Contact.module.css';
import {getImageUrl} from '../../utils';


const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:tanejakunal533@gmail.com">tanejakunal533@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/kunal-taneja-673436260/">linkedin.com/Kunal Taneja</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="http://www.github.com/kunal-104">github.com/Kunal</a>
        </li>
    </ul>

  </footer>
}

export default Contact
