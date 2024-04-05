import "../assets/css/footer.css";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="footer-column">
          <span className="footer-col-title">Mapa del sitio</span>
          <ul className="footer-site-map">
            <li>
              <a className="footer-links-item" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="#servicios">
                Servicios
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="#contacto">
                Contácto
              </a>
            </li>
          </ul>
          <span className="footer-attributs">Atribuciones:</span>
          <ul className="footer-attributs-list">
            <li>
              <a
                className="link-attributs"
                href="https://www.flaticon.es/iconos-gratis"
              >
                Iconos por Freepik - Flaticon
              </a>
            </li>
            <li>
              <a
                className="link-attributs"
                href="https://www.freepik.es/foto-gratis"
              >
                Fotos por Freepik
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <span className="footer-col-title">Servicios</span>
          <ul className="footer-servicios">
            <li>
              <a className="footer-links-item" href="#edu-financiera">
                Educación financiera
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="#ases-empresarial">
                Asesoría Empresarial
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="#ahorro-programado">
                Ahorro Programado
              </a>
            </li>
            <li>
              <a
                className="footer-links-item"
                href="#finanzas-a-la-luz-de-la-biblia"
              >
                Finanzas a la luz de la Biblia
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <span className="footer-col-title">Contácto</span>
          <ul className="footer-servicios">
            <li>
              <a className="footer-links-item" href="tel:+573128368582" title="+57 312 836 8582">
              <i className="bx bx-mobile icon-contact mobile"></i>
              &nbsp;&nbsp;Llamar
              </a>
            </li>
            <li>
              <a className="footer-links-item" href="https://wa.me/3128368582">
                <i className="bx bxl-whatsapp icon-contact whatsapp"></i>
                &nbsp;&nbsp;Whatsapp me
              </a>
            </li>
            <li>
              <a
                className="footer-links-item"
                href="mailto:gerentelagsi@gmail.com"
              >
                <i className="bx bx-envelope icon-contact email"></i>
                &nbsp;&nbsp;gerentelagsi@gmail.com
              </a>
            </li>
            <li>
              <a
                className="footer-links-item"
                href="https://koalendar.com/e/reunion-con-laura-arias"
              >&nbsp;
                <i className="fa solid fa-handshake fa-1x"></i>
                &nbsp;&nbsp;Agendar una reunión
              </a>
            </li>
          </ul>
          <span className="footer-attributs">
            Síguenos en nuestras Redes Sociales:
          </span>
          <div className="btn-redes-sociales">
            <a className="btn-redes-sociales-item facebook" href="https://www.facebook.com" target="_blank">
              <i className="bx bxl-facebook icon-redes"></i>
            </a>
            <a className="btn-redes-sociales-item instagram" href="#" target="_blank">
              <i className="bx bxl-instagram icon-redes"></i>
            </a>
            <a className="btn-redes-sociales-item linkedin" href="#" target="_blank">
              <i className="bx bxl-linkedin icon-redes"></i>
            </a>
            <a className="btn-redes-sociales-item youtube" href="#" target="_blank">
              <i className="bx bxl-youtube icon-redes"></i>
            </a>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
