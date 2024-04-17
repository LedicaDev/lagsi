
import "../assets/css/contacto.css";

const Contacto = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('Mensaje enviado correctamente');
        event.target.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <>
      <article className="contacto section" id="contacto">
        <div className="contact-title">
          <h2>Contacto</h2>
        </div>
        <div className="contact-box">
          <div className="contact-box-map">
            <div className="contact-box-map-title">
              <span>Mi ubicación</span>
            </div>
            <iframe className="contact-box-map-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1808847317816!2d-75.52749788877249!3d5.074412694881144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476fe255075b1d%3A0xc9f13ccd03b5f727!2sCra.%2012%20%2311-44%2C%20Manizales%2C%20Caldas!5e0!3m2!1ses-419!2sco!4v1712794715025!5m2!1ses-419!2sco" allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="contact-box-form">
            <div className="contact-form-title">
              <span>
                Escríbenos &nbsp;<i className="bx bx-edit"></i>
              </span>
            </div>
            <form className="contact-form" action="https://formsubmit.co/gerentelagsi@gmail.com" method="POST" onSubmit={handleSubmit}>
                <label className="tag-company" htmlFor="">
                  Empresa
                  <input
                    className="input-company"
                    type="text"
                    placeholder="Escribe el nombre de tu empresa" name="Empresa"
                  />
                </label>
                <label className="tag-company" htmlFor="">
                  Nombre y apellidos *
                  <input
                    className="input-company"
                    name="Nombre completo" type="text"
                    placeholder="Escribe tu nombre completo" required
                  />
                </label>
                <label className="tag-company" htmlFor="">
                  Email *
                  <input
                    className="input-company" name="Email"
                    type="text"
                    placeholder="Escribe tu correo electrónico" required
                  />
                </label>
                <label className="tag-company" htmlFor="">
                  Número de contacto *
                  <input
                    className="input-company" name="Telefono"
                    type="tel"pattern="[0-9]{3}[0-9]{3}[0-9]{4}" maxLength={10}
                    placeholder="Escribe tu número de contácto - Formato: Solo números hasta 10 dígitos" required
                  />
                </label>
                <label className="tag-company" htmlFor="">
                  Mensaje *
                  <textarea
                    className="input-company input-textarea" rows={10}
                    type="text" name="Mensaje"
                    placeholder="Escribe tu mensaje" required
                  />
                </label>
                <input type="hidden" name="_subject" value="Nuevo Mensaje enviado desde tu sitio Web"></input>
                <div className="btn-send-content">
                  <button className="btn-form" type="submit">Enviar mensaje</button>
                  <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase"></input>
                  <input type="hidden" name="_captcha" value="false"></input>
                </div>
              </form>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contacto;
