class ExplorerService{

    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const explorersNameList = explorersInNode.map((nameExplorer) => nameExplorer.githubUsername);
        return explorersNameList;
    }

}

module.exports = ExplorerService;