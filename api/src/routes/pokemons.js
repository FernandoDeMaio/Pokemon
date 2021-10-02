const axios = require("axios");
const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const router = Router();
const { Pokemon, Tipo } = require ("../db");
const { Op } = require("sequelize");

let pokemonApi=[];
router.get('/', async function (req, res){
    
    const { name } = req.query;
    

            if(!name){
                 // 40 Pokemons desde la api y pokemons BD
                 //try{ 

                let pokeBD = await Pokemon.findAll({include:{model:Tipo}});
                let pokeBd=pokeBD.map((el)=>{
                    return {
                            id: el.id,
                            name: el.name,
                            atack: el.atack,
                            defence:el.defence,
                            image: el.image,
                            types: el.tipos.map(el => el.name)
                           
                    }
                }
             )   
              
             if(pokemonApi.length===0){
                let respuesta =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0");
                 pokemonApi = await Promise.all(respuesta.data.results.map(async (el)=>{
                     
                     const pokemonUrl = await axios.get(el.url);
                                     obj={
                                         id : pokemonUrl.data.id,
                                         name : pokemonUrl.data.name,
                                         atack: pokemonUrl.data.stats[1].base_stat,
                                         defence:pokemonUrl.data.stats[2].base_stat,
                                         image : pokemonUrl.data.sprites.front_default,
                                         types : pokemonUrl.data.types.map(el=> el.type.name)
                                     }
                                         return obj;
                 }));
             
             }
                let pokeBdApi= pokemonApi.concat(pokeBd);
                res.json(pokeBdApi);
               
            // }catch(error){
            //     res.status(400).send("No se encuentra el listado de Pokemons");
            // }
                   
            }else{
            
          
                let busqueda= await Pokemon.findOne({where:{name : name}}, {include:{Tipo}});
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
                             types: pokeName.data.types.map(el=> el.type.name),
                             hp: pokeName.data.stats[0].base_stat,
                             atack: pokeName.data.stats[1].base_stat,
                             defense: pokeName.data.stats[2].base_stat,
                             speed: pokeName.data.stats[5].base_stat,
                             height: pokeName.data.height,
                             weight: pokeName.data.weight
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

            let pokemonDbId = await Pokemon.findByPk(id,{include:[Tipo]});
            
            let pokemonId ={
                id: pokemonDbId.id,
                name: pokemonDbId.name,
                image: pokemonDbId.image,
                types: pokemonDbId.tipos.map(el=> el.name),
                hp: pokemonDbId.hp,
                atack: pokemonDbId.atack,
                defense: pokemonDbId.defense,
                speed: pokemonDbId.speed,
                height:pokemonDbId.height,
                weight:pokemonDbId.weight, 
            }
            pokemonId && res.send(pokemonId)
            
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
                 types: pokeId.data.types.map(el=> el.type.name),
                 hp: pokeId.data.stats[0].base_stat,
                 atack: pokeId.data.stats[1].base_stat,
                 defense: pokeId.data.stats[2].base_stat,
                 speed: pokeId.data.stats[5].base_stat,
                 height: pokeId.data.height,
                 weight: pokeId.data.weight

             }
             respuesta && res.send(respuesta)

        }catch(error){
            res.status(400).send("No se encuentra el Pokemon");
        }
    }
})


 router.post('/', async (req, res)=>{
    const {name, image, hp, atack, defense, speed, height, weight, types}= req.body;
    try{
            
            if( await Pokemon.findOne({where: {name: name}})){

                res.status(400).send("No se puede cargar el Pokémon");
            }else{

                const PokCreate= await Pokemon.create({
                   id: uuidv4(), 
                   name,    
                   image,
                   hp,
                   atack,
                   defense,
                   speed,
                   height,
                   weight,
                   
                },{ fields: ["id","name","image","hp","atack","defense","speed","height","weight"] })
                
                for(let i=0; i<types.length;i++){
        
                    let idTipe= await Tipo.findOne({where:{name: types[i]}})
                    await PokCreate.addTipo(idTipe);
                }
                PokCreate && res.json(PokCreate);

            }
    }catch(error){
        res.status(400).send("No se puede cargar el Pokémon");
    }
 });

module.exports = router;