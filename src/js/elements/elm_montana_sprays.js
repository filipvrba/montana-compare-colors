export default class ElmMontanaSprays extends HTMLElement {
  constructor() {
    super();
    this._hMfInput = o => this.changeSprays(o.detail.value);
    this.initElm()
  };

  connectedCallback() {
    return Events.connect(
      "#app",
      EVENTS.MONTANA_FILTER_INPUT,
      this._hMfInput
    )
  };

  disconnectedCallback() {
    return Events.disconnect(
      "#app",
      EVENTS.MONTANA_FILTER_INPUT,
      this._hMfInput
    )
  };

  initElm() {
    let template = `${`
<table class='table table-bordered'>
  <thead>
    <tr>
      <th scope='col'>Name</th>
      <th scope='col'>Hex</th>
      <th scope='col'>Rgb</th>
      <th scope='col'>Color</th>
    </tr>
  </thead>
  <tbody id='montana-sprays-body'>
  </tbody>
</table>
    `}`;
    return this.innerHTML = template
  };

  initTrElm(sprays) {
    if (!sprays) return;
    let trs = [];

    for (let spray of sprays) {
      let template = `${`
<tr>
  <th scope='row'>${spray.name}</th>
  <td>${spray.hex}</td>
  <td>${spray.rgb.r} ${spray.rgb.g} ${spray.rgb.b}</td>
  <td style='background-color: ${spray.hex};'></td>
</tr>
      `}`;
      trs.push(template)
    };

    return document.getElementById("montana-sprays-body").innerHTML = trs.join("")
  };

  changeSprays(sprays) {
    return this.initTrElm(sprays)
  }
}