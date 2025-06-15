import styles from "./SkillsStyles.module.css"
import SkillList from "../../common/SkillList"
import checkMarkDark from "../../assets/checkmark-dark.svg"
import checkMarkLight from "../../assets/checkmark-light.svg"
import { useTheme } from "../../common/ThemeContext";
function Skills() {
 const { theme } = useTheme();
 const checkMarkIcon = theme == "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="JAVA"/>
          <SkillList src={checkMarkIcon} skill="JavaScript"/>
          <SkillList src={checkMarkIcon} skill="SQL"/>
          <SkillList src={checkMarkIcon} skill="HTML"/>
          <SkillList src={checkMarkIcon} skill="CSS"/>
        </div>
        <hr></hr>
         <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React"/>
          <SkillList src={checkMarkIcon} skill="Node.js"/>
          <SkillList src={checkMarkIcon} skill="Express.js"/>
          <SkillList src={checkMarkIcon} skill="Bootstrap"/>
          <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
          
        </div>
        <hr></hr>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git"/>
          <SkillList src={checkMarkIcon} skill="Github"/>
          <SkillList src={checkMarkIcon} skill="VS Code"/>
          <SkillList src={checkMarkIcon} skill="IntelliJ IDEA"/>
        </div>
        <hr></hr>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="MySQL"/>
          <SkillList src={checkMarkIcon} skill="MongoDB"/>
        </div>
    </section>
  )
}

export default Skills