import Swiper from "swiper";
import { Pagination, Mousewheel } from "swiper/modules";
export const jobSlider = (function () {
  const init = function () {
    const jobSwiper = new Swiper(".job-swiper", {
      modules: [Pagination, Mousewheel],
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: "auto",
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

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const swiperContainer = document.querySelector(".job-swiper");
    observer.observe(swiperContainer);

    function handleIntersection(entries, observer) {
      entries.forEach(function (entry) {
        console.log(jobSwiper);
        if (
          entry.isIntersecting &&
          (jobSwiper.activeIndex === 0 ||
            jobSwiper.activeIndex + 1 === jobSwiper.slides.length)
        ) {
          jobSwiper.mousewheel.enable();
        } else {
          jobSwiper.mousewheel.disable();
        }
      });
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
      if (
        jobSwiper.activeIndex === 0 ||
        jobSwiper.activeIndex + 1 === jobSwiper.slides.length
      ) {
        jobSwiper.mousewheel.disable();
      } else {
        jobSwiper.mousewheel.enable();
      }

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
