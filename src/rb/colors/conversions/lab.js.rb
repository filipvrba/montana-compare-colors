import 'Xyz', './xyz'

export default class Lab
  attr_accessor :l, :a, :b

  REF_X = 95.047
  REF_Y = 100.000
  REF_Z = 108.883

  def initialize(rgb)
    xyz = Xyz.new(rgb)

    x = pivot_xyz(xyz.x / REF_X)
    y = pivot_xyz(xyz.y / REF_Y)
    z = pivot_xyz(xyz.z / REF_Z)

    @l = [0, 116 * y - 16].max
    @a = 500 * (x - y)
    @b = 200 * (y - z)
  end

  def pivot_xyz(n)
    i = cubic_root(n)
    return n > 0.008856 ? i : 7.787 * n + 16 / 116
  end

  def cubic_root(n)
    n ** (1.0 / 3.0)
  end
end