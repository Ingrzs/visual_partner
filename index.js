const Reader = require("./lib/utils/Reader"); 
//const ExplorerService = require ("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
//console.log(explorers)

const explorersbyMission = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersbyMission.length)


const usernamesInNode = explorersbyMission.map((explorer) => explorer.Username == "node");
//console.log(usernamesInNode.length)


const assignFizzBuzzTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzBuzzTrick = explorersbyMission.map((explorer) => assignFizzBuzzTrick(explorer));
console.log(explorersInNodeAndFizzBuzzTrick)