/* import backgroundImage from '../assets/images/lagsi-background.jpg'; */
import "../assets/css/inicio.css"; 
import Enlaces from "./Enlaces";
import Slideshow from "./Slideshow";

const Inicio = () => {
  return (
    <>
      <div className="inicio section" id="inicio">
        <div className="home-background"></div>
      </div>
      <div className="home-description">
        <p>
          <h2>Somos Consultores especialistas en análisis de Riesgo patrimonial.</h2> <br /><br /> 
          <i>Contamos con 17 años de experiencia ayudando a personas naturales y jurídicas,
          logrando que aprendan a usar el dinero como una herramienta
          estratégica, no como un obstaculo.</i>
        </p>
      </div>
      <Slideshow />
      <Enlaces />
    </>
  );
};

export default Inicio;
