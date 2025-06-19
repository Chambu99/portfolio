import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../Common/SkillList'
function Skills() {
  return (
    <section id='skills'className={styles.container} >
    <h1 className='sectionTitle'>skills</h1>
    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill='HTML'/>
       <SkillList src={checkMarkIcon} skill='CSS'/>
       <SkillList src={checkMarkIcon} skill='JavaScript'/>
       <SkillList src={checkMarkIcon} skill='Tailwind-CSS'/>
       <SkillList src={checkMarkIcon} skill='React'/>

    </div>
    <hr/>
    <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill='Git'/>
       <SkillList src={checkMarkIcon} skill='Java'/>
       

    </div>
    <hr/>
    </section>
    
  )
}

export default Skills