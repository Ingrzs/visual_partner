const Botservice = require ("./../../lib/services/botservice")

describe("Pruebas unitarias BotFizbuzz",()=>{
    test ("test para validar ",()=>{
        const explorer1 = { name: "Explorer1", score: 1 };
        const Fizzbuss1 = Botservice.validationnumber(explorer1);
        expect(Fizzbuss1.score).toBe(1);

    });

    test("Test por BotByMission", () => {
        const explorer = [
            { mission: "node", githubUsername: "Ramiro" },
            { mission: "node", githubUsername: "rzs" },
        ];
        const filterExplorer = Botservice.getbotByMission(
            explorer,
            "node"
        );
    
        expect(filterExplorer[0]).toBe("Ramiro");
    });
})