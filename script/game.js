fizzBuzz = function (number) {
    if (typeof(number) == 'number') {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz";
        }
        if (number % 3 == 0) {
            return "Fizz";
        }
        if (number % 5 == 0) {
            return "Buzz";
        }
        else {
            return number;
        }
    }
    else {
        return "Argument must be a number!"
    }
}