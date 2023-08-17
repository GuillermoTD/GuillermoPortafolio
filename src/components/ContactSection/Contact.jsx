import "./Contact.css";
export default function Contact() {
  return (
    <section className="Contact">
        <form className="Contact_Form">
          <div className="Contact_Form_Title">
            Contact <span>Me</span>
          </div>
          <input type="text" placeholder="Write yout name"/>
          <input type="text" placeholder="Write you email"/>
          <textarea name=""></textarea>
          <button className="CVDownload" placeholder="Write a description">Send Message</button>
        </form>
    </section>
  );
}
