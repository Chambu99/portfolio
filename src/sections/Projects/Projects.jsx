
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/Transformers.png'
import ProjectCard from '../../Common/ProjectCard'
import moto3 from '../../assets/Moto3.png'
import Contactform from '../../assets/Construction-PNG.png'
import Javaprogramming from '../../assets/Java-PNG-Photos-200x200.png'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.ProjectsContainer}>
         <ProjectCard src={viberr}
         link='https://google.com/'
         h2='Viberr'
         p='Movie-fetching App'
          />
         <ProjectCard src={moto3}
         link='https://google.com/'
         h2='Moto3-login'
         p='Login Page'
          />
         <ProjectCard src={Contactform}
         link='https://google.com/'
         h2='Architecture'
         p='Construction Form'
          />
         <ProjectCard src={Javaprogramming}
         link='https://google.com/'
         h2='Java projects'
         p='**coming soon**'
          />
        </div>
    </section>
  )
}

export default Projects