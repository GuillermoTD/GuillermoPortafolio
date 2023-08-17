import "./FooterStyles.css";
import {BsGithub,BsLinkedin,BsFillSuitHeartFill} from "react-icons/bs"

export default function Footer() {
  return <div className="Footer">
    <div className="Footer_Content">
        Made with  <BsFillSuitHeartFill/>  by <a href="https://github.com/GuillermoTD" target="_blank" rel="noreferrer"> Guillermo Tapia</a>
    </div>
    <div className="Hero_Description_Network Footer_Network">
          <a href="https://www.linkedin.com/in/guillermo-tapia-a178ab213/" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/GuillermoTD" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
  </div>;
}


