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
}

module.exports = ExplorerController;