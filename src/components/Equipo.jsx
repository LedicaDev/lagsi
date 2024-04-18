import "../assets/css/equipo.css";
import ImageTeam1 from "../../public/asesor1.png";
import ImageTeam2 from "../../public/asesor2.png";

const Equipo = () => {
  return (
    <>
      <article>
        <div className="team-title">
          <span>Nuestro Equipo</span>
        </div>
        <div className="teams-content">
          <div className="team-item">
            <img src={ImageTeam1} alt="" />
            <h2 className="team-name">Laura Arias</h2>
            <span>Gerente General</span>
          </div>
          <div className="team-item">
            <img src={ImageTeam2} alt="" />
            <h2 className="team-name">Lauro Arias</h2>
            <span>Asesor Financiero</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Equipo;
