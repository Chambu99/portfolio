
import styles from './ProjectsStyles.module.css'
import AnimeK from '../../assets/AnimeK.webp'
import ProjectCard from '../../Common/ProjectCard'
import moto3 from '../../assets/Moto3.png'
import HDtv from '../../assets/HDTV.jpg'
import Contactform from '../../assets/Construction-PNG.png'
import Javaprogramming from '../../assets/Java-PNG-Photos-200x200.png'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.ProjectsContainer}>
         <ProjectCard src={AnimeK}
         link='https://chambu99.github.io/movie-react/'
         h2='Viberr'
         p='Movie-Streaming '
          />
         <ProjectCard src={moto3}
         link='https://chambu99.github.io/Moto3-login/'
         h2='Moto3-login'
         p='Login Page'
          />
         <ProjectCard src={HDtv}
         link='https://chambu99.github.io/live-streaming/'
         h2='HD-streaming'
         p='Live Streaming'
          />
         <ProjectCard src={Contactform}
         link='https://chambu99.github.io/contact-form/'
         h2='Architecture'
         p='Construction Form'
          />
         <ProjectCard src={Javaprogramming}
         link='https://blank.page/'
         h2='Java projects'
         p='**coming soon**'
          />
        </div>
    </section>
  )
}

export default Projects