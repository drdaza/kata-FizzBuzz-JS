import { FizzBuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        //given
        let number = 43;
        //then
        const result = FizzBuzz(number);
        //when
        expect(result).toBe("Fizz");
    });
    test("should return Buzz", () => {
        //given
        let number = 100;
        //then
        const result = FizzBuzz(number);
        //when
        expect(result).toBe("Buzz");
    });
    test('should return FizzBuzz', () => {
        //given
        let number = 15;
        //then
        const result = FizzBuzz(number);
        //when
        expect(result).toBe("FizzBuzz");
    });
});