// App.jsx
import { useState, useEffect } from "react";
import "./assets/css/sidebar.css";
import "./assets/css/navbar.css";
import "./assets/css/layout.css";
import "./App.css";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {
        isMobileView ? (
          <>
            <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
              <div className="sidebar-content">
                <div className="sidebar">
                  <div className="sidebar-brand">
                    <a href="https://www.lagsi.co">
                      <img
                        className="image-logo"
                        src="../public/logo-lagsi.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="sidebar-item">
                    <a
                      className="nav-item"
                      href="#inicio"
                      onClick={toggleMobileMenu}
                    >
                      Inicio
                    </a>
                    <a
                      className="nav-item"
                      href="#nosotros"
                      onClick={toggleMobileMenu}
                    >
                      Nosotros
                    </a>
                    <a
                      className="nav-item"
                      href="#servicios"
                      onClick={toggleMobileMenu}
                    >
                      Servicios
                    </a>
                    <a
                      className="nav-item"
                      href="#contacto"
                      onClick={toggleMobileMenu}
                    >
                      Contácto
                    </a>
                  </div>
                </div>
                <div className="btn-content">
                  <button className="btn-sidebar" onClick={toggleMobileMenu}>
                    <i className="bx bx-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null /* No renderizamos el navbar horizontal en modo móvil */
      }
      {!isMobileView && ( // Renderizamos el navbar horizontal solo en modo de escritorio
        <div className="navbar-content">
          <div className="navbar">
            <div className="navbar-brand">
              <a href="https://www.lagsi.co">
                <img
                  className="image-logo"
                  src="../public/logo-lagsi.png"
                  alt=""
                />
              </a>
            </div>
            <div className="navbar-items">
              <a className="nav-item" href="#inicio">
                Inicio
              </a>
              <a className="nav-item" href="#nosotros">
                Nosotros
              </a>
              <a className="nav-item" href="#servicios">
                Servicios
              </a>
              <a className="nav-item" href="#contacto">
                Contácto
              </a>
            </div>
          </div>
        </div>
      )}
      <main>
        <div className="main-content">
          <Inicio />
          <Nosotros />
          <Servicios />
          <Contacto />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
