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
    """

    self.innerHTML = template
  end

  def init_tr_elm(sprays)
    unless sprays
      return
    end

    trs = []

    sprays.each do |spray|
      template = """
<tr>
  <th scope='row'>#{spray.name}</th>
  <td>#{spray.hex}</td>
  <td>#{spray.rgb.r} #{spray.rgb.g} #{spray.rgb.b}</td>
  <td style='background-color: #{spray.hex};'></td>
</tr>
      """
      trs << template
    end

    document.get_element_by_id('montana-sprays-body').innerHTML = trs.join('')
  end

  def change_sprays(sprays)
    init_tr_elm(sprays)
  end
end