const convertThounsands = require('../../src/regex/index.js');

describe('test convertTounsands', function() {
  var result;
  afterEach(function() {
    result = convertThounsands('1000')
  })

  it('should be equal 1,000', function() {
    expect(result).toEqual('1,000')
  })
  
  it('should not equal 1,000,000', function() {
    expect(result).not.toEqual('1,000,000')
  })
})