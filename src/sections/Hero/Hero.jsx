import styles from './HeroStyles.module.css';
import heroImg from '../../assets/unnamed.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Common/ThemeContext';
function Hero() {
    const   {theme , toggleTheme}= useTheme();
    const themeIcon = theme === 'light' ? sun : moon ;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark ;
    const githubIcon = theme === 'light' ? githubLight : githubDark ;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark ;
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className= {styles.Hero} src={heroImg} alt='Profile picture of kelvin Nicodemus' />

       <img className={styles.colorMode}
        src={themeIcon} 
        alt='Color Mode Icon'
        onClick={toggleTheme} />

        </div>
        <div className={styles.info}>
            <h1>Kelvin <br/>
            Nicodemus</h1>
            <h2>Front-end Developer</h2>
            <span>
                <a href='https://twitter.com/' target='_blank'>
                <img src={twitterIcon} alt='TwitterIcon' />
                </a>
                <a href='https://github.com/' target='_blank'>
                <img src={githubIcon} alt='GithubIcon' />
                </a>
                <a href='https://linkedin.com/' target='_blank'>
                <img src={linkedinIcon} alt='LinkedinIcon' />
                </a>
            </span>
            <p className={styles.description}>With a passion of creating modern React web apps for commercial
             businesses</p>
             <a href={CV} download>
                <button className='hover' >Resume</button>
             </a>
        </div>
    </section>

  )
}

export default Hero