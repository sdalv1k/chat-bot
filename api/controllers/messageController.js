
const Pandorabot = require("pb-node");

var options = {
  url: 'https://api.pandorabots.com',
  app_id: "una63b6ed9",
  user_key: "db4c05c73f6f0ae138589b6a1c22235e",
  botname: "yoda"
};

var bot = new Pandorabot(options);


var talkParams = {
    input: "hello"
}

// bot.talk(talkParams, function (err, res) {
//     if (!err) 
//       console.log(res.responses);
// });

module.exports.talk = async (req, res) => {
    bot.talk(talkParams, function (err, message) {
        if (!err){
        console.log(message.responses);
        res.json(message);
        }
    });
};