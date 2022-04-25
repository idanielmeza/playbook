const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Parse json middleware
app.use(express.json());

//port
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
});

let explorers = [
    {
        id: 1,
        nombre: 'Daniel',
        edad: 20,
        carrera: 'Sistemas Computacionales'
    },
    {
        id: 2,
        nombre: 'Matias',
        edad: 7,
        carrera: 'Es un bebe no estudia'
    },
    {
        id: 3,
        nombre: 'Enrique',
        edad: 27,
        carrera: 'Petrolera'
    }
]

app.get('/',(req,res)=>{
    res.status(200).json({explorers});
})

app.get('/:id',(req,res)=>{
    const {id} = req.params;

    const explorer = explorers.filter(e => e.id == id)[0];

    res.status(200).json({explorer});
})

app.post('/',(req,res)=>{
    explorers = [...explorers, req.body];
    res.status(201).json({msg: 'Explorer agregado correctamente', explorers})
});

app.delete('/:id', (req,res)=>{
    const {id} = req.params;
    explorers = explorers.filter(explorer => explorer.id != id);
    
    res.status(200).json({explorers});
})

app.put('/:id', (req,res)=>{
    const {id} = req.params;
    const {nombre,edad,carrera} = req.body;

    explorers.forEach(e=>{
        if(e.id == id){
            e.nombre = nombre;
            e.edad = edad;
            e.carrera = carrera;
        }
    })

    res.status(201).json({explorers});
});