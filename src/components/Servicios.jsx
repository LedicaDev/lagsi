import "../assets/css/servicios.css";
import ImageFinance from "../../public/educacion-financiera.jpg";
import ImageAdvisory from "../../public/asesoria-empresarial.png";
import ImageSaving from "../../public/ahorro-programado.jpg";
import ImageBible from "../../public/finanzas-biblia.jpg";

const Servicios = () => {
  return (
    <>
      <article className="servicios section" id="servicios">
        <div className="service-title">
          <h2 className="service-title-text">Servicios</h2>
        </div>

        <div className="service-content">
          <div className="card">
            <img src={ImageFinance} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Educación Financiera</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                dignissimos? Error temporibus veniam officia, optio molestiae,
                adipisci suscipit dolorum itaque officiis odio numquam illum
                quos nobis commodi laborum in facilis?
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582">Whatsapp me</a>
                <a href="#contacto">Contácto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageAdvisory} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Asesoría Empresarial</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                dignissimos? Error temporibus veniam officia, optio molestiae,
                adipisci suscipit dolorum itaque officiis odio numquam illum
                quos nobis commodi laborum in facilis?
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582">Whatsapp me</a>
                <a href="#contacto">Contácto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageSaving} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Ahorro Programado</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                dignissimos? Error temporibus veniam officia, optio molestiae,
                adipisci suscipit dolorum itaque officiis odio numquam illum
                quos nobis commodi laborum in facilis?
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582">Whatsapp me</a>
                <a href="#contacto">Contácto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageBible} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">
                Finanzas a la Luz de la Biblia
              </span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                dignissimos? Error temporibus veniam officia, optio molestiae,
                adipisci suscipit dolorum itaque officiis odio numquam illum
                quos nobis commodi laborum in facilis?
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582">Whatsapp me</a>
                <a href="#contacto">Contácto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Servicios;
