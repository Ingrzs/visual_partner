const ExplorerController = require("./controller/ExplorerController")
const express = require('express') //estamos usando valores7objetos de express

const app = express()   //los datos de exprees los pasamos a app "lo convertimos app"

const port = 3000  //el puerto que usaremos para express

app.get('/',(req,res)=>{   //path que respondera la url localhost la diagonal indica localhost
    res.json({message:"Hello world FIZZBUZZ"})
})


app.get("/v1/explorers/:mission", (req,res)=>{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission)
    res.json(explorersInMission)
})

app.listen(port,()=>{          //inicializamos la app express  
    console.log(`FIZZBUZZ en port ${port}`)
})