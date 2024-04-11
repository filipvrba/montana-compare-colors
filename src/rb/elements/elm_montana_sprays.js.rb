export default class ElmMontanaSprays < HTMLElement
  def initialize
    super

    @h_mf_input = lambda { |o| change_sprays(o.detail.value) }
    
    init_elm()
  end

  def connected_callback()
    Events.connect('#app', EVENTS::MONTANA_FILTER_INPUT, @h_mf_input)
  end

  def disconnected_callback()
    Events.disconnect('#app', EVENTS::MONTANA_FILTER_INPUT, @h_mf_input)
  end

  def init_elm()
    template = """
    """

    self.innerHTML = template
  end

  def change_sprays(sprays)
    puts sprays
  end
end