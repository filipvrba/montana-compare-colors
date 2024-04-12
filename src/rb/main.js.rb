import '../css/bootstrap.min.css'
import '../css/style.css'
import 'sprays', '../json/montana-black.json'

import './core'
import './elements'

window.SPRAYS   = sprays
window.EVENTS   = {
  MONTANA_FILTER_INPUT: 1,
  TICK: 2,
}

document.querySelector('#app').innerHTML = """
<elm-montana-filter-tick></elm-montana-filter-tick>
<elm-montana-sprays></elm-montana-sprays>
"""

clock = Clock.new
def tick
  event = new CustomEvent(EVENTS::TICK, {
    detail: {
      value: clock.delta_time()
    }
  })
  window.dispatch_event(event)
  
  request_animation_frame lambda { tick() }
end
tick()