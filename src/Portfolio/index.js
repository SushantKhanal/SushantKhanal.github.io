import "./Portfolio.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideButtons from "./SlideButtons";
import PortfolioModal from "./PortfolioModal";
import PortfolioSlide from "./PortfolioSlide";
import { MODAL_DATA, SLIDE_DATA } from "./PortfolioData";
import SwiperCore, { Autoplay } from "swiper";

function Portfolio() {
  const [slideData, setSlideData] = useState(SLIDE_DATA);
  const [modalData, setModalData] = useState(null);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const closePortfolioModalButtons = document.querySelectorAll(
      ".portfolio-modal-close-button"
    );

    closePortfolioModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".portfolio__modal");
        closePortfolioModal(modal);
      });
    });

    const closePortfolioModal = (modal) => {
      if (modal === null) return;
      setModalData(null);
    };
  });

  const openModalHandler = (id) => {
    const activeModalData = MODAL_DATA.find((item) => item.id === id);
    setModalData(activeModalData);
  };

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          autoplay={{ delay: 3000 }}
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id}>
              <PortfolioSlide
                item={item}
                openModal={(id) => {
                  openModalHandler(id);
                }}
              />
            </SwiperSlide>
          ))}
          <SlideButtons />
        </Swiper>
      </section>
      {modalData && <PortfolioModal modalData={modalData} />}
    </div>
  );
}

export default Portfolio;
