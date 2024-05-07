import { useEffect } from 'react';
import "../assets/css/slideshow.css";
import SlideImage1 from "../../public/Image1.jpg";
import SlideImage2 from "../../public/Image2.jpg";
import SlideImage3 from "../../public/Image3.jpg";

const Slideshow = () => {
  useEffect(() => {
    const slider = document.querySelector("#slider");
    let sliderSections = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSections[sliderSections.length - 1];

    const btnLeft = document.querySelector("#slider__btn--left");
    const btnRight = document.querySelector("#slider__btn--right");

    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    function next() {
      let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }

    function prev() {
      let sliderSections = document.querySelectorAll(".slider-section");
      let sliderSectionLast = sliderSections[sliderSections.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }

    btnRight.addEventListener("click", next);
    btnLeft.addEventListener("click", prev);

    const intervalId = setInterval(next, 5000);

    return () => {
      btnRight.removeEventListener("click", next);
      btnLeft.removeEventListener("click", prev);
      clearInterval(intervalId);
    };
  }, []); // Esta función se ejecutará solo una vez al montar el componente

  return (
    <>
      <div className="slide-title">
        <h2>Testimonios</h2>
      </div>
      <div className="slide-container">
        <div className="slider" id="slider">
          <div className="slider-section">
            <img src={SlideImage1} alt="" className="slider__img" />
          </div>
          <div className="slider-section">
            <img src={SlideImage2} alt="" className="slider__img" />
          </div>
          <div className="slider-section">
            <img src={SlideImage3} alt="" className="slider__img" />
          </div>
        </div>
        <div className="slider__btn slider__btn--left" id="slider__btn--left">
        <i className="fa-solid fa-caret-left fa-2xl"></i>
        </div>
        <div className="slider__btn slider__btn--right" id="slider__btn--right">
        <i className="fa-solid fa-caret-right fa-2xl"></i>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
