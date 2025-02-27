import { threedlib } from '../../../src/lib';
import { Cartesian3D } from '../../../src/coordinate';
import { AxisZ } from '../../../src/component';
import { Point3D, Line3D, Interval3D } from '../../../src/mark';

describe('threedlib', () => {
  it('threedlib() should returns expected threed components.', () => {
    expect(threedlib()).toEqual({
      'coordinate.cartesian3D': Cartesian3D,
      'component.axisZ': AxisZ,
      'mark.point3D': Point3D,
      'mark.line3D': Line3D,
      'mark.interval3D': Interval3D,
    });
  });
});
