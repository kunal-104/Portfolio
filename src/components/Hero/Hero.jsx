import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import k from './kb.jpg';

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Kunal</h1>
    <p className={styles.description}>I'm a full stack developer with 1 year of experience using React and NodeJS. Reach out if you'd like to learn more!</p>
    <a className={styles.contactBtn} href="mailto:tanejakunal533@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg} src={k} alt="Hero image of me" />
    {/* <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" /> */}
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
}

export default Hero
