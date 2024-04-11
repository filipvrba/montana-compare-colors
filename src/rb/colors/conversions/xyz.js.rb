export default class Xyz
  attr_accessor :x, :y, :z

  def initialize(rgb)
    r = pivot_rgb(rgb.r / 255.0)
    g = pivot_rgb(rgb.g / 255.0)
    b = pivot_rgb(rgb.b / 255.0)

    @x = r*0.4124 + g*0.3576 + b*0.1805
    @y = r*0.2126 + g*0.7152 + b*0.0722
    @z = r*0.0193 + g*0.1192 + b*0.9505
  end

  def pivot_rgb(n)
    number = (n + 0.055) / 1.055
    pow = number ** 2.4

    return (n > 0.04045 ? pow : n / 12.92) * 100
  end
end