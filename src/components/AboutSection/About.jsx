import "./About.css";
import image from "../../assets/img/photo.png";
export default function About() {
  return (
    <section className="About" id="About">
      <div className="About_LeftSide">
        <div className="About_Image">
          <img src={image} alt="" />
        </div>
        <div className="About_Image_Shadow"></div>
      </div>

      <div className="About_Description">
        <h2>About me</h2>
        <p className="About_Tag">Front-End Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni libero
          maiores harum ullam nulla reprehenderit nesciunt molestiae fuga velit
          asperiores!
        </p>
        <a href="#" className="About_Button CVDownload">
          Download CV
        </a>
      </div>
    </section>
  );
}
