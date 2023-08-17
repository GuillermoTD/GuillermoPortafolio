import ProjectsItem from "./ProjectsItem/ProjectsItem"
import "./Proyects.css"
import image from "../../assets/img/Proyecto1.png"
export default function Proyects() {
  return (
    <section className="Proyects" id="Projects">
        <h2>Portfolio</h2>
      <div className="Projects_Grid">
            <ProjectsItem img={image}/>
            <ProjectsItem img={image}/>
            <ProjectsItem img={image}/>
            <ProjectsItem img={image}/>
            <ProjectsItem img={image}/>
            <ProjectsItem img={image}/>
      </div>
    </section>
  )
}
