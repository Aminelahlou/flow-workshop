// @flow
const _ = require('lodash');
type Point2d = {|
  x: number,
  y: number
|};
const points: Point2d[] = [
  { x: 1, y: 2},
  { x: -1, y: 2}
]
const numbers = [2, 3, 4];
function testFunc(point: Point2d):bool {
  return point.x > 0 && point.y > 0;
}
_.some(numbers, testFunc);
