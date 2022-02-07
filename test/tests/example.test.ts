import { assert } from "chai"
// import { suite, test } from "@testdeck/mocha"
// import { expect } from 'chai'

// @suite
// class Hello {

//   @test
//   world() {
//     // expect(false).to.be.true
//   }
// }

describe("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            const have = [1, 2, 3].indexOf(4)
            const want = -1
            assert.equal(have, want)
        })
    })
})
