const axios = require("axios");
const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const router = Router();
const { Pokemon } = require ("../db");


router.get('/', async function (req, res){
    
    const { name } = req.query;

        // 40 Pokemons desde la api y pokemons BD
    let pokemonsApi = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=5");
    let pokemonUrl = pokemonsApi.data.results;
    let pokeBD = await Pokemon.findAll();
        
    var arr=[];
        
    for(h of pokemonUrl){
            let poke = h.url;
            let poke2 = await axios.get(`${poke}`);
            arr.push({
                id: poke2.data.id,
                name: poke2.data.name,
                image: poke2.data.sprites.front_default,
                types: poke2.data.types
            })
        }
        let pokeBDApi =arr.concat(pokeBD);

        //Busqueda por name
        try{
            if(!name){
                res.json(pokeBDApi);
            }else{
               let pokeRes = pokeBDApi.find(pokemon => pokemon.name == name)
                pokeRes?res.json(pokeRes):res.send("No encontramos el Pokemon");
            }
    }catch(error){
        res.status(400).send(error);
    }
});


router.get('/:id', async (req, res)=> {

    const { id } = req.params;
    
    if(id.length>4){
        Pokemon.findOne({where: { id: id }});
    }else{
       let pokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        let respuesta ={
            id: pokeId.data.id,
            name: pokeId.data.name,
            image: pokeId.data.sprites.front_default,
            types: pokeId.data.types
        }
        respuesta?res.send(respuesta): res.send("No se encuentra el Pokemon");
    }

  
})




 router.post('/', async (req, res)=>{
    const {name, hp, atack, defense, speed, height, wight}= req.body;
    try{
        const PokCreate= await Pokemon.create({
           id: uuidv4(), 
           name,
           hp,
           atack,
           defense,
           speed,
           height,
           wight
        },{ fields: ["id","name","hp","atack","defense","speed","height","wight"] })
        
        PokCreate && res.json(PokCreate);
    }catch(error){
        res.status(400);
    }
 });





module.exports = router;