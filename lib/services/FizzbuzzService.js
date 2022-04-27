class FizzbuzzService {
   
   static applyValidationInExplorer(explorer){

   

    const assignFizzBuzzTrick = function(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    };
    return assignFizzBuzzTrick(explorer)
 }
}

module.exports = FizzbuzzService