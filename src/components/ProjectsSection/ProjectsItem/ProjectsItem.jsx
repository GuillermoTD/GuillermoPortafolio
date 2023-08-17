import "./ProjectsItem.css";
import { PropTypes } from "prop-types";
export default function ProjectsItem({ img }) {
  return (
    <div className="ProjectsItem">
      <div className="ProjectsItem_Image">
        <img src={img} alt="" />
      </div>
      <div className="ProjectsItem_Overlay">
        <p>Name proyect</p>
        <span>icon</span>
        <span>icon</span>
      </div>
    </div>
  );
}
ProjectsItem.propTypes = {
  img: PropTypes.image,
};
