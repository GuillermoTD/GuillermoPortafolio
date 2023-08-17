import { ImHtmlFive } from "react-icons/im";
import {
  SiCsswizardry,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaAngular, FaBootstrap, FaSass } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import "./Skills.css"





export default function Skills() {
  return (
    <section className="Skills">
      <div className="Skills_Title">
        Skills
      </div>
      <div className="Skills_Content">
        <div style={{fontSize:"3rem", color:"#EB6217"}} className="Skills_Content_Item">
          <ImHtmlFive />
        </div>
        <div style={{fontSize:"3rem", color:"#0899DD"}} className="Skills_Content_Item">
          <SiCsswizardry />
        </div>
        <div style={{fontSize:"3rem", color:"#F7E025"}} className="Skills_Content_Item">
          <SiJavascript />
        </div>
        <div style={{fontSize:"3rem", color:"#0ad3f3"}} className="Skills_Content_Item">
          <FaReact />
        </div>
        <div style={{fontSize:"3rem", color:"#8A18FB"}} className="Skills_Content_Item">
          <FaBootstrap />
        </div>
        <div style={{fontSize:"3rem", color:"#0EB8D5"}} className="Skills_Content_Item">
          <SiTailwindcss />
        </div>
        <div style={{fontSize:"3rem", color:"#F15639"}} className="Skills_Content_Item">
          <BsGit />
        </div>
        <div style={{fontSize:"3rem", color:"#DE0837"}} className="Skills_Content_Item">
          <FaAngular />
        </div>
        <div style={{fontSize:"3rem", color:"#CF6C9C"}} className="Skills_Content_Item">
          <FaSass />
        </div>
        <div style={{fontSize:"3rem", color:"#087ECE"}} className="Skills_Content_Item">
          <SiTypescript />
        </div>
      </div>
    </section>
  );
}


