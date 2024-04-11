import 'Lab', '../conversions/lab'

export default class Cie1976
  def self.compare(rgb_a, rgb_b)
    a = Lab.new(rgb_a)
    b = Lab.new(rgb_b)

    diference = Cie1976.distance(a.l, b.l) + Cie1976.distance(a.a, b.a) + Cie1976.distance(a.b, b.b)
    return Math.sqrt(diference)
  end

  def self.distance(a, b)
    number = (a - b)
    return number ** 2
  end
end