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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.491558415376!2d-75.5982838245884!3d6.198692893789034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1712282585831!5m2!1ses-419!2sco"  ></iframe>
          </div>
          <div className="contact-box-form"></div>
        </div>
      </article>
    </>
  );
};

export default Contacto;
