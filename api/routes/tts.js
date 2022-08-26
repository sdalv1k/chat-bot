const express = require("express");
const router = express.Router();

const FakeYou = require('fakeyou.js');

const fy = new FakeYou.Client({});

async function load_fakeyou() {
    await fy.start(); //required

    let models = fy.searchModel('yoda').first();
    if(models) {
        console.log("Loaded TTS model successfully.");
    }
    else console.log(models);
}

router.get('/', (req, res)=>{
    res.send("TTS backend is working");
});

router.post("/", async (req, res) => {
    console.log("tts message: \"" + req.body.input + "\"");
    let result = '';
    try {
        result = await fy.makeTTS('yoda', req.body.input.toString());
        console.log("audio URL: " + result.audioURL());
    } catch (err) {
        console.log(err);
    }

    try {
        res.json({ result: result.audioURL() });
    } catch (err) {
        console.log("Error sending audioURL!");
        res.status(500).send(err);
    }
});

load_fakeyou();

module.exports = router;
