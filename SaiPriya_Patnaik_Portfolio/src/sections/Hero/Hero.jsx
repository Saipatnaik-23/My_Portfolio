import styles from "./HeroStyle..module.css";
import img from "../../assets/AI_IMAGE.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import leetcodeLight from "../../assets/leetcode_light.png";
import leetcodeDark from "../../assets/leetcode_dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/SOFTWARE_RESUME (1).pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme == "light" ? sun : moon;
  const leetcodeIcon = theme == "light" ? leetcodeDark : leetcodeLight;
  const linkedInIcon = theme == "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme == "light" ? githubLight : githubDark;

  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeConatiner}>
        <img
          className={styles.hero}
          src={img}
          alt="Profile picture of Sai Priya Patnaik"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          SAI PRIYA
          <br></br>
          PATNAIK
        </h1>
        <h2>
          MERN Developer
        </h2>
        <span>
            {/* //have to add links */}
          <a href="https://leetcode.com/u/Sai_Priya_23/" target="_blank">
            <img src={leetcodeIcon} alt="Twitter"></img>
          </a>
          <a href="https://github.com/Saipatnaik-23" target="_blank">
            <img src={githubIcon} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/saipriya-patnaik-b19668258/" target="_blank">
            <img src={linkedInIcon} alt="Linkedin"></img>
          </a>
        </span>
        <p className={styles.description}>
         Passionate about developing modern React web applications that deliver seamless and dynamic user experiences
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
