import 'Rgb', '../colors/conversions/rgb'
import 'Cie1976', '../colors/comparisons/cie_1976'

export default class ElmMontanaFilter < HTMLElement
  def initialize
    super

    @h_mf_input = lambda { mf_input(@montana_filter_input.value) }
    
    init_elm()

    @montana_filter_input = document.get_element_by_id('montanaFilterInput')
  end

  def connected_callback()
    @montana_filter_input.add_event_listener('input', @h_mf_input)
  end

  def disconnected_callback()
    @montana_filter_input.remove_event_listener('input', @h_mf_input)
  end

  def mf_input(value)
    similar, different = find_similar_and_different(value)
    
    unless similar
      return
    end

    similar_sprays = find_similar_sprays(similar, different)
    
    if similar_sprays.length > 10
      similar_sprays.splice(10)
    end

    Events.emit('#app', EVENTS::MONTANA_FILTER_INPUT, similar_sprays)
  end

  def init_elm()
    template = """
<div class='form-floating mb-3'>
  <input type='text' class='form-control' id='montanaFilterInput' placeholder=''>
  <label for='montanaFilterInput'>Spray</label>
</div>
    """

    self.innerHTML = template
  end

  def find_similar_and_different(value)
    similar   = nil
    different = []

    SPRAYS['Montana BLACK 400ml'].each do |spray|

      is_similar = spray.name.downcase().match(/#{value.downcase()}/)
      if is_similar && similar == nil
        similar = spray
      else
        different << spray
      end
    end

    return [similar, different]
  end

  def find_similar_sprays(similar, different)
    similar_sprays = []
    similar_rgb = Rgb.new(similar.rgb)
    different.each do |spray|
      different_rgb = Rgb.new(spray.rgb)
      compare = Cie1976::compare(similar_rgb, different_rgb)
      if compare < 50.0
        similar_sprays << {
          compare: compare,
          spray: spray
        }
      end
    end

    sort_similar_sprays = similar_sprays.slice().sort( lambda {|a, b| a.compare - b.compare})
    similar_sprays = sort_similar_sprays.map(lambda { |o| return o.spray})

    return similar_sprays
  end
end