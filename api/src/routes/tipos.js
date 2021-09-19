const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Tipo } = require("../db.js");

router.get('/', async (req, res)=>{

    let tiposR = await Tipo.findAll();
    res.json(tiposR); 
});


module.exports = router;