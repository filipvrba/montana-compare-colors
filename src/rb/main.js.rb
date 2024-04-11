import '../css/style.css'
import 'sprays', '../json/montana-black.json'

import './core'
# import 'Rgb', './colors/conversions/rgb'
# import 'Cie1976', './colors/comparisons/cie_1976'

window.SPRAYS = sprays

document.querySelector('#app').innerHTML = "<h1>Hello RubyJS</h1>"


# a = Rgb.new(244, 159, 36)
# b = Rgb.new(240, 140, 72)
# puts Cie1976::compare(a, b)