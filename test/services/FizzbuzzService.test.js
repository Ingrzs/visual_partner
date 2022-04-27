const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Pruebas unitarias Fizbuzz",()=>{

    test("Requerimiento uno explorer con trick 1", () =>{
        const explorer1 = {name:"Explorer1",score:1 };
        const explorersbyMission =  FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersbyMission).toBe(explorer1,1);
    });
    
    test("Requerimiento dos explorer con FIZZ", () =>{
        const explorer3 = {name:"Explorer3",score:3 };
        const explorersbyMission =  FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorersbyMission).toBe(explorer3,"FIZZ");
    });

    test("Requerimiento tres explorer con BUZZ", () =>{
        const explorer5 = {name:"Explorer5",score:5 };
        const explorersbyMission =  FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorersbyMission).toBe(explorer5,"BUZZ");
    });

    test("Requerimiento cuatro explorer con FIZZBUZZ", () =>{
        const explorer15 = {name:"Explorer15",score:15 };
        const explorersbyMission =  FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorersbyMission).toBe(explorer15,"FIZZBUZZ");
    });
});