import {analyzeArray} from "./04.js"
import {expect} from 'chai'

describe("analyzeArray", () => {
  it ("should return undefined hen input is string", ()=> {
    const input = "string"
    const result =  analyzeArray(input);
    expect(result).to.be.undefined;
  })
  it ("should return undefined hen input is an empty array", ()=> {
    const input = [];
    const result =  analyzeArray(input);
    expect(result).to.be.undefined;
  })
  it ("should return correct value when input an array with diff numbers", ()=> {
    const input = [3, 5, -2, 4, 1];
    const result =  analyzeArray(input);
    expect(result).to.deep.equal({min: -2, max: 5, length: 5})
  })
  it ("should return correct alue when input is an array with one number", ()=> {
    const input = [3];
    const result =  analyzeArray(input);
    expect(result).to.deep.equal({min: 3, max: 3, length: 1})
  })
  it ("should return correct value when inout is an array with the same elements", ()=> {
    const input = [3, 3, 3];
    const result =  analyzeArray(input);
    expect(result).to.deep.equal({min: 3, max: 3, length: 3})
  })

})