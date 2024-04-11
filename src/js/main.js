import "../css/bootstrap.min.css";
import "../css/style.css";
import sprays from "../json/montana-black.json";
import "./core";
import "./elements";
window.SPRAYS = sprays;
window.EVENTS = {};
document.querySelector("#app").innerHTML = `${`\n<elm-montana-filter></elm-montana-filter>\n`}`