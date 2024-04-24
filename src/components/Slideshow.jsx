import "../assets/css/slideshow.css";

const Slideshow = () => {
  return (
    <>
    {/* <div className="slide-title">
    <h2>Testimónios</h2>
    </div> */}
      <div className="slide-container">
        <div className="slide">
          <ul>
            <li className="image-content"><img className="image-item" src="/Image1.jpg" /></li>
            <li className="image-content"><img className="image-item" src="/Image2.jpg" /></li>
            <li className="image-content"><img className="image-item" src="/Image3.jpg" /></li>
            <li className="image-content"><img className="image-item" src="/Image4.jpg" /></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
