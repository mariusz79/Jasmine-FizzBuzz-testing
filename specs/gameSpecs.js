describe("My fizzBuzz function", function(){
    beforeEach(function(){
        num = new fizzBuzz();
    });

    describe("check number", function(){
        it("should exist", function(){
            expect(fizzBuzz).toBeDefined();                         //check if function exists
        });
        it("should return FizzBuzz if number is divisible by 3 and 5", function(){
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return fizz if number is divisible by 3", function(){
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        it("should return buzz if number is divisible by 5", function(){
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });
        it("should return number if number is not divisible neither by 3 or 5", function(){
            var result = fizzBuzz(8)
            expect(result).toBe(8);
        });
        it("should have called the alert function if argument is not a number", function () {
            var result = fizzBuzz("spam")
            expect(result).toBe("Argument must be a number!");
    })
})
})