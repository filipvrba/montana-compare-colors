import 'ElmMontanaFilter', './elm_montana_filter'

export default class ElmMontanaFilterTick < ElmMontanaFilter
  RESPONSE_TIME = 0.2

  def initialize
    super

    @h_tick = lambda { |d| tick(d.detail.value) }
    @h_mf_input = lambda { mf_input_tick() }
    @h_send = nil

    @time = 0.0
    @is_active = false
  end

  def connected_callback()
    super
    window.add_event_listener(EVENTS::TICK, @h_tick)
  end

  def disconnected_callback()
    super
    window.remove_event_listener(EVENTS::TICK, @h_tick)
  end

  def tick(dt)
    unless @is_active
      return
    end
    
    if @time >= RESPONSE_TIME
      if @h_send == nil
        @h_send = lambda do
          @is_active = false
          mf_input()
        end.call
      end
      return
    end
    
    @time += dt
  end

  def mf_input_tick()
    @h_send = nil
    
    @time = 0.0
    @is_active = true
  end

  def mf_input()
    super(@montana_filter_input.value)
  end
end