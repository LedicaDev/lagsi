import "../assets/css/footer.css";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="footer-column">
          <span className="footer-col-title">Mapa del sitio</span>
          <ul className="footer-site-map">
            <li ><a className="footer-links-item" href="#inicio">Inicio</a></li>
            <li ><a className="footer-links-item" href="#nosotros">Nosotros</a></li>
            <li ><a className="footer-links-item" href="#servicios">Servicios</a></li>
            <li ><a className="footer-links-item" href="#contacto">Contácto</a></li>
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
        </div>
        <div className="footer-column">
          <span className="footer-col-title">Contácto</span>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
