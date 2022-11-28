export function FizzBuzz(param)
{
    let question = param.toString();

    if(param % 3 == 0 && param % 5 == 0 || question.includes("3") && question.includes("5")){
        return "FizzBuzz";
    }
    if(param % 3 == 0 || question.includes("3")){
        return "Fizz";
    }
    if (param % 5 == 0 || question.includes("5")){
        return "Buzz";
    }
}