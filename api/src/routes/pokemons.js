const axios = require("axios");
const { Router } = require("express");
const router = Router();


router.get('/', async function (req, res){
   
    let pokemonsApi1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
    let pokemonsApi2 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');

    let allPokemon = pokemonsApi1.data.results.concat(pokemonsApi2.data.results);

    let pokemonsRutaP=[];

    allPokemon.map((el)=>
    (
        pokemonsRutaP.push(el.url)
        ));
        
        pokemonsRutaP


    try{
    res.send(pokemonsRutaP);
    }catch(error){
        res.status(400).send(error);
    }
});

// router.get('/{idPokemon}', function (req, res){

// });

module.exports = router;