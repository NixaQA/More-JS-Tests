
import {isOddOrEven} from "./01.js"
import {expect} from 'chai'

describe ("isddOrEven", () => {
    it ("return undefined with non string", () => {
        const input1 = 15;
        const input2 = undefined
        const input3 = 0
        const input4 = 10.10

        //Act
        const result1 = isOddOrEven(input1)
        const result2 = isOddOrEven(input2)
        const result3 = isOddOrEven(input3)
        const result4 = isOddOrEven(input4)

        //Assert
        expect(result1).to.be.undefined
        // expect(result1).to.be.equal(undefined)
        expect(result2).to.be.undefined
        expect(result3).to.be.undefined
        expect(result4).to.be.undefined

    })

    it ("return even when string length is even", ()=> {
          const evenStringLength = "abcd"

          const resultEvenStringLength = isOddOrEven(evenStringLength)

          expect(resultEvenStringLength).to.be.equal('even')
    })

    it ("return odd when string length is odd", () => {
        const oddStringLength = "abcde"
        const resultoddStringLength = isOddOrEven(oddStringLength)
        expect(resultoddStringLength).to.be.equal('odd');
    })

    it("should return even when the input string length is 0", () => {
        const zeroStringLength = ""
        const resultzeroStringLength = isOddOrEven(zeroStringLength)
        expect(resultzeroStringLength).to.be.equal('even');
    })
})