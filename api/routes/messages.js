//const { message } = require("../controllers/messageController");
const express = require("express");
const router = express.Router();
const Pandorabot = require("pb-node");

const options = require('../../options.json'); 

var bot = new Pandorabot(options);

router.get('/', (req, res)=>{
    res.send("Backend is working");
});

router.post("/", async (req, res) => {
    console.log(req.body);
    bot.talk(req.body, function (err, message) {
        if (!err){
        console.log(message.responses);
        res.json(message);
        }
    });
});

module.exports = router;
