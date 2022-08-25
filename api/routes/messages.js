//const { message } = require("../controllers/messageController");
const express = require("express");
const router = express.Router();

const Pandorabot = require("pb-node");

var options = {
  url: 'https://api.pandorabots.com',
  app_id: "una63b6ed9",
  user_key: "db4c05c73f6f0ae138589b6a1c22235e",
  botname: "yoda"
};

var bot = new Pandorabot(options);

// var talkParams = {
//     input: "hello"
// }

// bot.talk(talkParams, function (err, res) {
//     if (!err) 
//       console.log(res.responses);
// });

router.get('/', (req, res)=>{
    res.send("Message backend is working");
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