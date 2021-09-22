const axios = require("axios");
const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const router = Router();
const { Pokemon } = require ("../db");


router.get('/', async function (req, res){
    
    const { name } = req.query;
  
            if(!name){
                 // 40 Pokemons desde la api y pokemons BD
                 //try{ 

        
                let pokeBD = await Pokemon.findAll();
                let pokeBd=pokeBD.map((el)=>{
                    return {
                            id: el.id,
                            name: el.name,
                            image: el.image,
                            type: el.types 
                    }
                }
             )   
                    
                let respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
                let pokemonApi = await Promise.all(respuesta.data.results.map(async (el)=>{
                    
                    const pokemonUrl = await axios.get(el.url);
                                    obj={
                                        id : pokemonUrl.data.id,
                                        name : pokemonUrl.data.name,
                                        image : pokemonUrl.data.sprites.front_default,
                                        types : pokemonUrl.data.types.map(el=> el.type.name)
                                    }
                                        return obj;
                }));
            
                pokeBdApi= pokemonApi.concat(pokeBd);
                
                res.json(pokeBdApi);
               
            // }catch(error){
            //     res.status(400).send("No se encuentra el listado de Pokemons");
            // }
                   
            }else{
            
          
                let busqueda= await Pokemon.findOne({where: {name: name}});
            
                if(busqueda){
                    try{
                        res.json(busqueda);

                    }catch(error){
                        res.status(400).send("No se encuentra el Pokemon");
                    }
                    
                }else{
 
                    try{

                        let pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
                      
                       
                         let respuesta ={
                             id: pokeName.data.id,
                             name: pokeName.data.name,
                             image: pokeName.data.sprites.front_default,
                             types: pokeName.data.types
                         }
                         respuesta && res.json(respuesta)
                        
                        
                    }catch(error){
                        res.status(400).send("No se encuentra el Pokemon");
                    }
               }
            } 
        
});


router.get('/:id', async (req, res)=> {

    const { id } = req.params;
    
    if(id.length>4){

        try{

            let pokemonDbId = await Pokemon.findOne({where: { id: id }});
            pokemonDbId && res.send(pokemonDbId)

        }catch(error){
            res.status(400).send("No se encuentra el Pokemon");
        }

    }else{

        try{

            let pokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
             let respuesta ={
                 id: pokeId.data.id,
                 name: pokeId.data.name,
                 image: pokeId.data.sprites.front_default,
                 types: pokeId.data.types

             }
             respuesta && res.send(respuesta)

        }catch(error){
            res.status(400).send("No se encuentra el Pokemon");
        }
    }
})


 router.post('/', async (req, res)=>{
    const {name, image, hp, atack, defense, speed, height, wight, types}= req.body;
    try{
        const PokCreate= await Pokemon.create({
           id: uuidv4(), 
           name,
           image,
           hp,
           atack,
           defense,
           speed,
           height,
           wight,
           types
        },{ fields: ["id","name","image","hp","atack","defense","speed","height","wight","types"] })
        
        PokCreate && res.json(PokCreate);
    }catch(error){
        res.status(400);
    }
 });

module.exports = router;