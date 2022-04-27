const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Pruebas unitarias para services",()=>{

    test('Requerimiento uno explorer en Node', () =>{
    const explorers = [{mission:"node"}]
    const explorersbyMission =  ExplorerService.filterByMission( explorers ,"node")
    expect(explorersbyMission.length).toBe(1);
    })



    test('Requerimiento tres explorer en Node', () =>{
        const explorers = [{mission:"node"}]
        const AmountOfExplorers =  ExplorerService.getAmountOfExplorersByMission( explorers ,"node")
        expect(AmountOfExplorers.length).toBe(1);
        })
    

    test('Requerimiento tres explorer en Node', () =>{
         const explorers = [{mission:"node"}]
         const ExplorersUsernamesByMission =  ExplorerService.getExplorersUsernamesByMission( explorers ,"node")
         expect(ExplorersUsernamesByMission.length).toBe(1);
         })

})