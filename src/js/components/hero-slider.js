import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
export const heroSlider = (function () {
  const init = function () {
    const heroSwiper = new Swiper(".hero-swiper", {
      modules: [Autoplay, Pagination],
      spaceBetween: 20,
      slidesPerView: "auto",
      followFinger: false,
      breakpoints: {
        1025: {
          spaceBetween: 0,
          rewind: true,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      autoplay: {
        delay: 4000,
      },
    });

    heroSwiper.on("click", function () {
      heroSwiper.slideNext();
    });
  };

  return {
    init,
  };
})();
