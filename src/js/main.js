import "../css/style.css";
import sprays from "../json/montana-black.json";
import "./core";

// import 'Rgb', './colors/conversions/rgb'
// import 'Cie1976', './colors/comparisons/cie_1976'
window.SPRAYS = sprays;
document.querySelector("#app").innerHTML = "<h1>Hello RubyJS</h1>"