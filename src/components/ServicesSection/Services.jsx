import "./Services.css";
import { BsGrid1X2 } from "react-icons/bs";
import { FaCode, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section className="Services">
      <h2 className="Services_Title">Services</h2>
      <div className="Services_Container">
        <div className="Services_Container_Item">
          <div className="Services_Container_Item_Icon">
            <BsGrid1X2 />
          </div>
          <div className="Services_Container_Item_Title">Web Design</div>
          <div className="Services_Container_Item_Description">
            Build Attractive And Appealing Web UI To Make The User Have A Good
            UX By Implementing The Different Web Design Technics As An Excelent User Experience.
          </div>
        </div>
        <div className="Services_Container_Item">
          <div className="Services_Container_Item_Icon">
            <FaCode />
          </div>
          <div className="Services_Container_Item_Title">Development</div>
          <div className="Services_Container_Item_Description">
            Develop And Create Functional Websites With A High Level Of User
            Interaction As Well As An Excellent User Experience.
          </div>
        </div>
        <div className="Services_Container_Item">
          <div className="Services_Container_Item_Icon">
            <FaMobileAlt />
          </div>
          <div className="Services_Container_Item_Title">UI and UX</div>
          <div className="Services_Container_Item_Description">
            Web Developer Develop And Create Functional Websites With A High
            Level Of User Interaction As Well As An Excellent User Experience.
          </div>
        </div>
      </div>
    </section>
  );
}
