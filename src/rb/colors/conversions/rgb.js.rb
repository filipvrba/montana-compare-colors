export default class Rgb
  attr_accessor :r, :g, :b

  def initialize(r, g, b)
    @r = r
    @g = g
    @b = b
  end
end