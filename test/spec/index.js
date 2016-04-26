var expect = require('chai').expect;

describe('pick-weight: ', function () {

  var weighted = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(weighted).to.throw(TypeError);
      expect(weighted.bind(null, [])).to.throw(TypeError);
      expect(weighted.bind(null, ['a', 'b'], [1])).to.throw(RangeError);

      expect(weighted(['a', 'b'], [100, 1])).to.be.oneOf(['a', 'b']);
      expect(weighted(['a', 'b', 'c', 'd'], [1, 2, 3, 4])).to.be.oneOf(['a', 'b', 'c', 'd']);
      expect(weighted(['a', 'b', 'c', 'd'], [-1, 2, 3, 4])).to.be.oneOf(['b', 'c', 'd']);

    }

  });

});
