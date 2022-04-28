const { getExplorersByMission } = require("./../../lib/controller/ExplorerController");
const ExplorerController = require("./../../lib/controller/ExplorerController");

describe("Pruebas unitarias Explorer Controller",()=>{
    test ("test para validar 1",()=>{
        const explorerbymission = ExplorerController.getExplorersByMission("node");
        expect(explorerbymission[0].name).toBe("Woopa1");

    });
   
    

});