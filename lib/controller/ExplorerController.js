const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorersUsernames;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmount;
    }

    static getValidationInNumber(number) {
        const numb = FizzbuzzService.applyValidationInNumber(number);
        return numb;
    }
    
    
    static getFizzBuzzBot(chatId, bot, num) {
        const fizzbuzzTrick = ExplorerController.getValidationInNumber(num);
        const responseBot = `Tu número es: ${num}. Validación: ${fizzbuzzTrick}`;
        return bot.sendMessage(chatId, responseBot);
    }
    
    static getUsernameBot(chatId, bot, mission) {
        const missionIn = mission.toLowerCase();
        if (missionIn === "node") {
            const username = ExplorerController.getExplorersUsernamesByMission(missionIn);
            const responseBot = `Los explorers en  ${missionIn} son: ${username}`;
            return bot.sendMessage(chatId, responseBot);
        } else if (missionIn === "java") {
            const username = ExplorerController.getExplorersUsernamesByMission(missionIn);
            const responseBot = `Los explorers en ${missionIn} son: ${username}`;
            return bot.sendMessage(chatId, responseBot);
        } else {
            return bot.sendMessage(chatId, `No ahi datos para: ${missionIn} Escriba un numero o una mission correcta`);
        }
    }
   
    
}

module.exports = ExplorerController;