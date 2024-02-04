import {mathEnforcer} from "./03.js"
import { expect } from "chai"

describe("mathEnforcer", () =>{
    describe("addFive", () => {
       it("should return undefined when input is string", () => {
         const inputString = "sushi"
         const result = mathEnforcer.addFive(inputString);
         expect(result).to.be.undefined;
       })
       it("should return undefined when input is undefined", () => {
        const input = "undefined"
        const result1 = mathEnforcer.addFive(input);
        expect(result1).to.be.undefined;
      })
      it("should return undefined when input is number as string", () => {
        const inputStringNum = "20"
        const result = mathEnforcer.addFive(inputStringNum);
        expect(result).to.be.undefined;
      })
      it("should return correct result when input is float num with closeTo", () => {
        const inputFloat = 1.01
        const result = mathEnforcer.addFive(inputFloat);
        expect(result).to.be.closeTo(6.01, 0.01);
      })
      it("should return correct result when input is float num", () => {
        const inputFloat = 1.01
        const result = mathEnforcer.addFive(inputFloat);
        expect(result).to.be.equal(6.01);
      })
      it("should return correct result when input is long float num with closeTo", () => {
        const inputFloat = 1.01111111111111111111
        const result = mathEnforcer.addFive(inputFloat);
        expect(result).to.be.closeTo(6.01, 0.01);
      })
      it("should return correct result when input is simple number", () => {
        const inputNum = 5
        const result = mathEnforcer.addFive(inputNum);
        expect(result).to.be.equal(10);
      })
      it("should return correct result when input is negative number", () => {
        const inputNegativeNum = -5
        const result = mathEnforcer.addFive(inputNegativeNum);
        expect(result).to.be.equal(0);
      })
    })
    describe("subtractTen", () => {
        it("should return undefined when input is string", () => {
            const inputString = "sushi"
            const result = mathEnforcer.subtractTen(inputString);
            expect(result).to.be.undefined;
          })
          it("should return undefined when input is undefined", () => {
           const input = "undefined"
           const result1 = mathEnforcer.subtractTen(input);
           expect(result1).to.be.undefined;
         })
         it("should return undefined when input is number as string", () => {
           const inputStringNum = "20"
           const result = mathEnforcer.subtractTen(inputStringNum);
           expect(result).to.be.undefined;
         })
         it("should return correct result when input is float num with closeTo", () => {
           const inputFloat = 1.01
           const result = mathEnforcer.subtractTen(inputFloat);
           expect(result).to.be.closeTo(-8.99, 0.01);
         })
         it("should return correct result when input is float num", () => {
           const inputFloat = 1.01
           const result = mathEnforcer.subtractTen(inputFloat);
           expect(result).to.be.equal(-8.99);
         })
         it("should return correct result when input is long float num with closeTo", () => {
           const inputFloat = 1.01111111111111111111
           const result = mathEnforcer.subtractTen(inputFloat);
           expect(result).to.be.closeTo(-8.99, 0.01);
         })
         it("should return correct result when input is simple number", () => {
           const inputNum = 15
           const result = mathEnforcer.subtractTen(inputNum);
           expect(result).to.be.equal(5);
         })
         it("should return correct negative result when input is simple number", () => {
            const inputNum = 5
            const result = mathEnforcer.subtractTen(inputNum);
            expect(result).to.be.equal(-5);
          })
         it("should return correct result when input is same number and testing 0", () => {
           const inputNegativeNum = 10;
           const result = mathEnforcer.subtractTen(inputNegativeNum);
           expect(result).to.be.equal(0);
         })
    })
    describe("sum", () => {
        it("should return undefined when param1 is correct and param2 is incorret", () => {
            const param1 = 2;
            const param2 = "oso"
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.undefined
        })
        it("should return undefined when param1 is incorrect and param2 is corret", () => {
            const param1 = "banana";
            const param2 = 4
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.undefined
        })
        it("should return undefined when param1 is num as string  and param2 is corret", () => {
            const param1 = "5";
            const param2 = 4
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.undefined
        })
        it("should return undefined when param1 is correct  and param2 is num as string", () => {
            const param1 = 5;
            const param2 = "4"
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.undefined
        })
        it("should return undefined when param1 is correct  and param2 is correct", () => {
            const param1 = 5;
            const param2 = 4;
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.equal(9)
        })
        it("should return correct when param1 is negative num  and param2 is correct", () => {
            const param1 = -5;
            const param2 = 4;
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.equal(-1)
        })
        it("should return correct when param1 is floating num  and param2 is correct", () => {
            const param1 = 5.01;
            const param2 = 4;
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.equal(9.01)
        })
        it("should return correct when param1 is floating num  and param2 is correct testing with closeTo", () => {
            const param1 = 5.01;
            const param2 = 4;
             const result = mathEnforcer.sum(param1, param2)
             expect(result).to.be.closeTo(9.01, 0.01)
        })
    })

})