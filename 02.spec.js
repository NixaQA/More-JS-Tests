import {lookupChar} from "./02.js"
import {expect} from 'chai'

describe("lookupChar", () => {
    it("should return undefined when first param is incorrect type and second param is correct type", () => {
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;

        //Act
        const result = lookupChar(incorrectFirstParam, correctSecondParam)

        //Assert
         //Assert
         expect(result).to.be.undefined
    })

    it("should return undefined when first param is correct type and second param is incorrect type", () => {
        const correctFirstParam = "some test here";
        const incorrectSecondParam = "10";

        //Act
        const result1 = lookupChar(correctFirstParam, incorrectSecondParam)

        //Assert
         expect(result1).to.be.undefined
    })

    it("should return undefined when first param is correct type and second param is incorrect float type", () => {
        const correctFirstParam = "some test here";
        const incorrectFloatSecondParam = 10.10;

        //Act
        const result2 = lookupChar(correctFirstParam, incorrectFloatSecondParam)

        //Assert
         expect(result2).to.be.undefined
    })

    it("should return undefined when first param is correct type and second param is correct type but too long", () => {
        const correctFirstParam = "some test here";
        const incorrectLongSecondParam = 1010;

        //Act
        const result3 = lookupChar(correctFirstParam, incorrectLongSecondParam)

        //Assert
         expect(result3).to.be.equal("Incorrect index");
    })

    it("should return undefined when first param is correct type and second param is correct type but negative", () => {
        const correctFirstParam = "some test here";
        const incorrecNegativeSecondParam = -4;

        //Act
        const result4 = lookupChar(correctFirstParam, incorrecNegativeSecondParam)

        //Assert
         expect(result4).to.be.equal("Incorrect index");
    })

    it("should return undefined when first param is correct type and second param is correct type but equal length", () => {
        const correctFirstParam = "some test here";
        const incorrectequalSecondParam = 14;

        //Act
        const result5 = lookupChar(correctFirstParam, incorrectequalSecondParam)

        //Assert
         expect(result5).to.be.equal("Incorrect index");
    })

    it("should return correct when both params are correct type and length", () => {
        const correctFirstParam = "some test here";
        const coorectSecondParam = 2;

        //Act
        const result6 = lookupChar(correctFirstParam, coorectSecondParam)

        //Assert
         expect(result6).to.be.equal("m");
    })
})