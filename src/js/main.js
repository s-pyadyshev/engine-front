import "./vendor";
// import { vhFix } from "./vendor/vh-fix";
import { accordion } from "./components/accordion";
import { mobileMenu } from "./components/mobile-menu";
import { heroSlider } from "./components/hero-slider";
import { permutation } from "./components/permutation";
import { casesSlider } from "./components/cases-slider";
import { jobSlider } from "./components/job-slider";
import { slider } from "./components/slider";
import { tabs } from "./components/tabs";
import { toggle } from "./components/toggle";
import { scrollspy } from "./components/scrollspy";
import "./components/scrollto";
import "./components/backToTop";

window.addEventListener(
  "load",
  () => {
    accordion.init();
    mobileMenu.init();
    heroSlider.init();
    casesSlider.init();
    jobSlider.init();
    permutation.init();
    slider.init();
    tabs.init();
    toggle.init();
    scrollspy.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
