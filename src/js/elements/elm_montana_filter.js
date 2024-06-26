import Rgb from "../colors/conversions/rgb";
import Cie1976 from "../colors/comparisons/cie_1976";

export default class ElmMontanaFilter extends HTMLElement {
  constructor() {
    super();
    this._hMfInput = () => this.mfInput(this._montanaFilterInput.value);
    this.initElm();
    this._montanaFilterInput = document.getElementById("montanaFilterInput")
  };

  connectedCallback() {
    this._montanaFilterInput.addEventListener("input", this._hMfInput);
    return this._hMfInput()
  };

  disconnectedCallback() {
    return this._montanaFilterInput.removeEventListener(
      "input",
      this._hMfInput
    )
  };

  mfInput(value) {
    let [similar, different] = this.findSimilarAndDifferent(value);
    if (!similar) return;

    let similarSprays = this.findSimilarSprays(
      similar,
      different,
      value === "" ? Infinity : 50
    );

    if (value !== "" && similarSprays.length > 10) similarSprays.splice(10);

    return Events.emit(
      "#app",
      EVENTS.MONTANA_FILTER_INPUT,
      [similar].concat(similarSprays)
    )
  };

  initElm() {
    let template = `${`
<div class='form-floating mb-3'>
  <input type='text' class='form-control' id='montanaFilterInput' placeholder=''>
  <label for='montanaFilterInput'>Name</label>
</div>
    `}`;
    return this.innerHTML = template
  };

  findSimilarAndDifferent(value) {
    let similar = null;
    let different = [];

    for (let spray of SPRAYS["Montana BLACK 400ml"]) {
      let isSimilar = spray.name.toLowerCase().match(new RegExp(value.toLowerCase()));

      if (isSimilar && similar === null) {
        similar = spray
      } else {
        different.push(spray)
      }
    };

    return [similar, different]
  };

  findSimilarSprays(similar, different, compareMax=50) {
    let similarSprays = [];
    let similarRgb = new Rgb(similar.rgb);

    for (let spray of different) {
      let differentRgb = new Rgb(spray.rgb);
      let compare = Cie1976.compare(similarRgb, differentRgb);
      if (compare < compareMax) similarSprays.push({compare, spray})
    };

    let sortSimilarSprays = similarSprays.slice().sort((a, b) => (
      a.compare - b.compare
    ));

    similarSprays = sortSimilarSprays.map(o => o.spray);
    return similarSprays
  }
}