const ExplorerService = require("./../../lib/services/ExplorerService");



describe("ExplorerService test", () => {
    test("Test ByMission", () => {
        const explorer = [{ mission: "node" }];
        const filterExplorer = ExplorerService.filterByMission(explorer, "node");
    
        expect(filterExplorer.length).toBe(1);
    });
    
    test("test de cantidad ByMission", () => {
        const explorer = [{ mission: "node" }, { mission: "node" }];
        const filterExplorer = ExplorerService.getAmountOfExplorersByMission(
            explorer,
            "node"
        );
    
        expect(filterExplorer).toBe(2);
    });
    
    test("Test por UsernamesByMission", () => {
        const explorer = [
            { mission: "node", githubUsername: "Ramiro" },
            { mission: "node", githubUsername: "rzs" },
        ];
        const filterExplorer = ExplorerService.getExplorersUsernamesByMission(
            explorer,
            "node"
        );
    
        expect(filterExplorer[0]).toBe("Ramiro");
    });
});

