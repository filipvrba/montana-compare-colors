import ElmMontanaFilter from "./elm_montana_filter";

export default class ElmMontanaFilterTick extends ElmMontanaFilter {
  constructor() {
    super();
    this._hTick = d => this.tick(d.detail.value);

    this._hMfInput = () => {
      return this.mfInputTick()
    };

    this._hSend = null;
    this._time = 0.0;
    this._isActive = false
  };

  connectedCallback() {
    super.connectedCallback();
    return window.addEventListener(EVENTS.TICK, this._hTick)
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    return window.removeEventListener(EVENTS.TICK, this._hTick)
  };

  tick(dt) {
    if (!this._isActive) return;

    if (this._time >= ElmMontanaFilterTick.RESPONSE_TIME) {
      if (this._hSend === null) {
        this._hSend = (() => {
          this._isActive = false;
          return this.mfInput()
        })()
      };

      return
    };

    return this._time += dt
  };

  mfInputTick() {
    this._hSend = null;
    this._time = 0.0;
    this._isActive = true;
    return this._isActive
  };

  mfInput() {
    return super.mfInput(this._montanaFilterInput.value)
  }
};

ElmMontanaFilterTick.RESPONSE_TIME = 0.2