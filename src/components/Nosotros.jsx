import "../assets/css/nosotros.css";
import Equipo from "./Equipo";

const Nosotros = () => {
  return (
    <>
      <div className="nosotros section" id="nosotros">
        <div className="card-us">
          <div className="card-title">
            <h2>Nosotros</h2>
          </div>
          <div className="row-us">
            <div className="img-us">
              <img src="/nosotros.jpg" className="card-img" />
            </div>
            <div className="card-body">
              <p className="card-text">
                En <strong>Lagsi,</strong> nos enorgullece ser promotores en el
                arte de convertir el manejo del dinero en una habilidad
                estratégica tanto para individuos como para pequeñas empresas. <br /><br />
                Con una trayectoria sólida de 17 años en el sector financiero,
                hemos dedicado nuestro compromiso y profundo conocimiento para
                empoderar a nuestros clientes, ayudándoles a alcanzar sus metas
                financieras con confianza y claridad. <br />
                <br /> A lo largo de nuestra historia, hemos cultivado
                relaciones sólidas y duraderas con nuestros clientes, brindando
                soluciones personalizadas y asesoramiento experto que se adapta
                a sus necesidades particulares. <br />
                <br /> En <strong>Lagsi,</strong> creemos en el poder transformador del
                conocimiento financiero y estamos comprometidos a guiar a
                nuestros clientes hacia un futuro financiero más seguro y
                próspero.
              </p>
            </div>
          </div>
        </div>
        <div className="card-us">
          <div className="card-title">
            <h2>Misión</h2>
          </div>
          <div className="row-us">
            <div className="img-us">
              <img src="/mision.png" className="card-img" />
            </div>
            <div className="card-body">
              <p className="card-text">
                Desde nuestra fundación, en Lagsi nos hemos comprometido
                con una misión clara y apasionada: transformar la relación que
                las personas y los pequeños negocios tienen con el dinero.
                Creemos firmemente que el dinero no debería ser percibido como
                un obstáculo, sino como una herramienta poderosa para construir
                el futuro que cada individuo y empresa merece. En consecuencia,
                nos esforzamos incansablemente por proporcionar las estrategias
                y el conocimiento necesarios para que nuestros clientes tomen
                decisiones financieras informadas y seguras. Creemos en
                capacitar a nuestros clientes con las habilidades y la confianza
                necesarias para tomar el control de su futuro financiero y
                alcanzar sus metas con éxito y tranquilidad.
              </p>
            </div>
          </div>
        </div>

        <div className="card-us">
          <div className="card-title">
            <h2>Visión</h2>
          </div>
          <div className="row-us">
            <div className="img-us">
              <img src="/vision.jpg" className="card-img" />
            </div>
            <div className="card-body">
              <p className="card-text">
                En <strong>Lagsi,</strong> queremos ser líderes reconocidos y
                respetados en el ámbito financiero a nivel nacional. Nuestra
                visión es la de un mundo donde todas las personas y las empresas
                de todos los tamaños puedan dominar el arte de manejar el dinero
                de manera estratégica y efectiva, utilizando la sabiduría y el
                conocimiento financiero como una herramienta para alcanzar sus
                sueños y aspiraciones. <br />
                <br /> Nos esforzamos por crear un impacto positivo y duradero
                en la vida de nuestros clientes, capacitándolos y acompañándolos
                para tomar decisiones financieras informadas que les permitan
                prosperar en cualquier entorno económico. <br />
                <br /> Con un enfoque centrado en la innovación, la excelencia y
                la integridad, estamos comprometidos a seguir creciendo y
                evolucionando para cumplir nuestra visión de un futuro
                financiero más brillante y accesible para todos.
              </p>
            </div>
          </div>
        </div>
        <div className="card-us">
          <div className="card-title">
            <h2>Valores</h2>
          </div>
          <div className="row-us">
            <div className="img-us">
              <img src="/valores.jpg" className="card-img" />
            </div>
            <div className="card-body">
              <p className="card-text">
                En <strong>Lagsi,</strong> nos guiamos por un conjunto de
                valores fundamentales que informan cada aspecto de nuestro
                trabajo y nuestras interacciones con los clientes. <br />
                <br /> La integridad es el pilar de nuestro compromiso,
                comprometiéndonos a actuar con honestidad y transparencia en
                todas nuestras relaciones comerciales. Buscamos la excelencia en
                todo lo que hacemos, desde el asesoramiento financiero hasta el
                servicio al cliente, siempre esforzándonos por superar las
                expectativas y brindar soluciones de la más alta calidad. <br />
                <br />
                Creemos en el empoderamiento de nuestros clientes,
                proporcionándoles el conocimiento y las herramientas necesarias
                para tomar decisiones financieras sólidas y seguras. Además,
                estamos comprometidos a servir a nuestros clientes con pasión y
                dedicación, ofreciendo soluciones personalizadas y atención
                individualizada. En resumen, nuestros valores de integridad,
                excelencia, empoderamiento y compromiso son la piedra angular de
                nuestra misión de ayudar a nuestros clientes a alcanzar su
                máximo potencial financiero.
                <br />
                <br />
                <ul>
                  <li className="viñeta">
                    <strong>Integridad: </strong>
                    En Lagsi, nos comprometemos a actuar con honestidad y
                    transparencia en todas nuestras relaciones comerciales.
                  </li>
                  <li className="viñeta">
                    <strong>Excelencia: </strong>
                    Buscamos la excelencia en todo lo que hacemos, desde el
                    asesoramiento financiero hasta el servicio al cliente,
                    siempre esforzándonos por superar las expectativas y brindar
                    soluciones de la más alta calidad.
                  </li>
                  <li className="viñeta">
                    <strong>Empoderamiento: </strong>
                    Creemos en el empoderamiento de nuestros clientes,
                    proporcionándoles el conocimiento y las herramientas
                    necesarias para tomar decisiones financieras sólidas y
                    seguras.
                  </li>
                  <li className="viñeta">
                    <strong>Compromiso: </strong>
                    Estamos comprometidos a servir a nuestros clientes con
                    pasión y dedicación, ofreciendo soluciones personalizadas y
                    atención individualizada.
                  </li>
                  <li className="viñeta">
                    <strong>Lealtad: </strong>
                    Valoramos la lealtad hacia nuestros clientes y socios
                    comerciales, manteniendo relaciones basadas en la confianza
                    mutua y el compromiso a largo plazo.
                  </li>
                  <li className="viñeta">
                    <strong>Transparencia: </strong>
                    Nos comprometemos a ser transparentes en nuestras
                    operaciones y comunicaciones, proporcionando a nuestros
                    clientes la información necesaria para tomar decisiones
                    informadas y confiables.
                  </li>
                </ul>
                <br />
                Estos valores son fundamentales en nuestra misión de ayudar a
                nuestros clientes a alcanzar su máximo potencial financiero.
              </p>
            </div>
          </div>
        </div>
        <Equipo />
      </div>
    </>
  );
};

export default Nosotros;
