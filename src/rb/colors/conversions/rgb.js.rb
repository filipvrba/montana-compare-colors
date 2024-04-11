export default class Rgb
  attr_accessor :r, :g, :b

  def initialize(options)
    @r = options.r
    @g = options.g
    @b = options.b
  end
end