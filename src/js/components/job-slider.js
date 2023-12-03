import Swiper from "swiper";
import { Pagination, Mousewheel } from "swiper/modules";
export const jobSlider = (function () {
  const init = function () {
    const jobSwiper = new Swiper(".job-swiper", {
      modules: [Pagination, Mousewheel],
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: "auto",
      mousewheel: {
        releaseOnEdges: true,
        eventsTarget: ".job-slider",
      },
      breakpoints: {
        1025: {
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
    });

    if (!jobSwiper.slides.length) {
      return;
    }

    const currentFraction = document.querySelector(".swiper-fraction-current");
    const totalFraction = document.querySelector(".swiper-fraction-total");

    if (jobSwiper.slides.length >= 10) {
      totalFraction.textContent = jobSwiper.slides.length;
      currentFraction.textContent =
        "0" + (jobSwiper.activeIndex + 1).toString();
    } else {
      totalFraction.textContent = "0" + jobSwiper.slides.length.toString();
      currentFraction.textContent =
        "0" + (jobSwiper.activeIndex + 1).toString();
    }

    jobSwiper.on("slideChange", function () {
      if (jobSwiper.slides.length >= 10) {
        currentFraction.textContent =
          "0" + (jobSwiper.activeIndex + 1).toString();

        if (jobSwiper.activeIndex + 1 >= 10) {
          let arrCurrentFraction = [];
          arrCurrentFraction = currentFraction.textContent.split("");
          arrCurrentFraction.shift();
          currentFraction.textContent = arrCurrentFraction.join("");
        }
      } else {
        currentFraction.textContent =
          "0" + (jobSwiper.activeIndex + 1).toString();
      }

      if (currentFraction.textContent == totalFraction.textContent) {
        currentFraction.classList.add("disabled");
      } else {
        currentFraction.classList.remove("disabled");
      }
    });
  };

  return {
    init,
  };
})();
