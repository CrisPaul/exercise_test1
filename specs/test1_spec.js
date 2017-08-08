'use strict'

var collect_elements = require('../practices/test1.js');

describe('collect_elements',function(){
  var num = 90;
  var num2= [2,3,5,3];
  it('collect_primers',function(){
    var result = collect_elements(num);
    expect(result).toEqual(num2);
  });
});
