import { mobileMenu } from "./components/mobile-menu";
import { heroSlider } from "./components/hero-slider";
import { permutation } from "./components/permutation";
import { casesSlider } from "./components/cases-slider";
import { jobSlider } from "./components/job-slider";
import { tabs } from "./components/tabs";
import { toggle } from "./components/toggle";
import { scrollspy } from "./components/scrollspy";
import { backToTop } from "./components/backToTop";

window.addEventListener(
  "load",
  () => {
    mobileMenu.init();
    heroSlider.init();
    casesSlider.init();
    jobSlider.init();
    permutation.init();
    tabs.init();
    toggle.init();
    scrollspy.init();
    backToTop.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
