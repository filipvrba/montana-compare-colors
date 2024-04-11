import "../css/bootstrap.min.css";
import "../css/style.css";
import sprays from "../json/montana-black.json";
import "./core";
import "./elements";
window.SPRAYS = sprays;
window.EVENTS = {MONTANA_FILTER_INPUT: 1};
document.querySelector("#app").innerHTML = `${`\n<elm-montana-filter></elm-montana-filter>\n<elm-montana-sprays></elm-montana-sprays>\n`}`