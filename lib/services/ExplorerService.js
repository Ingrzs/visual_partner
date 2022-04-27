class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersbyMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersbyMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const AmountOfExplorers = explorers.filter((explorer) => explorer.mission == mission);
        return AmountOfExplorers;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const ExplorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == mission);
        return ExplorersUsernamesByMission;
    }

}

module.exports = ExplorerService;