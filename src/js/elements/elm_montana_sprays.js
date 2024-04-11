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
    let template = `${`\n    `}`;
    return this.innerHTML = template
  };

  changeSprays(sprays) {
    return console.log(sprays)
  }
}