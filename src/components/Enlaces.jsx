import "../assets/css/enlaces.css";

const Enlaces = () => {
  return (
    <>
      <div className="link-content">
        <div className="link-item">
          <a href="#">
            <div className="link">
              <img className="icon-service" src="/public/finance.png" alt="" />
              <span className="link-title">Educación Financiera</span>
            </div>
          </a>
        </div>
        <div className="link-item">
          <a href="#">
            <div className="link">
            <img className="icon-service" src="/public/asesorias-empresariales.png" alt="" />
              <span className="link-title">Asesoria Empresarial</span>
            </div>
          </a>
        </div>
        <div className="link-item">
          <a href="#">
            <div className="link">
            <img className="icon-service" src="/public/ahorro.png" alt="" />
              <span className="link-title">Ahorro Programado</span>
            </div>
          </a>
        </div>
        <div className="link-item">
          <a href="#">
            <div className="link">
            <img className="icon-service" src="/public/ahorrar-dinero.png" alt="" />
              <span className="link-title">Finanzas a la Luz de la Biblia</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Enlaces;
