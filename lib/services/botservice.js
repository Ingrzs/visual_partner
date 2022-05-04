class Botservice{

    static validationnumber(number){
        if (number % 3 === 0 && number % 5 === 0) {
            return "FIZZBUZZ";
        } else if (number % 3 === 0) {
            return "FIZZ";
        } else if (number % 5 === 0) {
            return "BUZZ";
        }
        else {
            return number;
        }
    }


    static getbotByMission(explorers, mission) {    
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const explorersNameListNode = explorersInNode.map((nameExplorer) => nameExplorer.githubUsername);
        return explorersNameListNode;
    
        
    }}

module.exports = Botservice;