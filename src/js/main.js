import "../css/bootstrap.min.css";
import "../css/style.css";
import sprays from "../json/montana-black.json";
import "./core";
import "./elements";
window.SPRAYS = sprays;
window.EVENTS = {MONTANA_FILTER_INPUT: 1, TICK: 2};
document.querySelector("#app").innerHTML = `${`\n<elm-montana-filter-tick></elm-montana-filter-tick>\n<elm-montana-sprays></elm-montana-sprays>\n`}`;
let clock = new Clock;

function tick() {
  let event = new CustomEvent(EVENTS.TICK, {detail: {value: clock.deltaTime()}});
  window.dispatchEvent(event);
  return requestAnimationFrame(() => tick())
};

tick()