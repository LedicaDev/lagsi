import "../assets/css/contacto.css";

const Contacto = () => {
  return (
    <>
      <article className="contacto section" id="contacto">
        <div className="contact-title">
          <h2>Contacto</h2>
        </div>
        <div className="contact-box">
          <div className="contact-box-map">
            <iframe></iframe>
          </div>
          <div className="contact-box-form"></div>
        </div>
      </article>
    </>
  );
};

export default Contacto;
