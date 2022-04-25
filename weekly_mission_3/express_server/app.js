const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
});

app.get('/launchx',(req,res)=>{
    return res.status(200).json({msg:'Todo bien explorer'});
})

const explorersNode = [
    {
        nombre: 'Daniel Ledezma',
        edad: 22,
        github: 'idanielmeza'
    },
    {
        nombre: 'Oscar Matias',
        edad: 7,
        github: 'es un bebe'
    },
    {
        nombre: 'Prueba',
        edad: 22,
        github: 'prueba'
    },
]

app.get('/launchx/:explorer', (req,res)=>{
    const {explorer} = req.params;
    res.status(200).json({msg: `Bienvenido explorer ${explorer}`})
})

app.get('/explorers-nodejs', (req,res)=>{
    res.status(200).json({explorersNode})
})