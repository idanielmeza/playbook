class FizzBuzzService{

    static appliValidationInExplorer(score){
        if(score%3 === 0 && score%5 === 0){
            return "FIZZBUZZ";

        }else if(score%5 === 0){
            return "BUZZ";
        }else if(score%3 === 0){
            return "FIZZ";
        }else{
            return  score;
        }
    }

}

module.exports = FizzBuzzService;