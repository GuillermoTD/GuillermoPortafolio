import "./HeroStyles.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ImageProfile from "../../assets/img/photo.png";

function Hero() {
  return (
    <section className="Hero">
      <div className="Hero_Description">
        <div className="Hero_Description_Title">
          Hello! I`m <span>Guillermo Tapia</span>
        </div>
        <div className="Hero_Description_Text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus
          qui repellendus?
        </div>
        <div className="Hero_Description_Network">
          <a href="https://www.linkedin.com/in/guillermo-tapia-a178ab213/" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/GuillermoTD" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
        <div className="Hero_Description_Buttons">
          <a href="#" target="_blank" className="CVDownload" rel="nonreferrer">
            Download CV
          </a>
          <a href="#" target="_blank" className="Hero_Description_Buttons_ContactButton" rel="nonreferrer">
            <p>Mail me</p>
          </a>
        </div>
      </div>
      <div className="Hero_Image">
        <img src={ImageProfile} alt="image.png" />
      </div>
    </section>
  );
}

export default Hero;
