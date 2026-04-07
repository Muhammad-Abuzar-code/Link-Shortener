const {nanoid} = require('nanoid');
const Url = require("../models/url.model");

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    const shortid = nanoid(8);
    if(!body.url){
        return res.status(400).json({message:"Url is required"});
    }
    await Url.create({
        shortID: shortid,
        redirectURL: body.url,
        visitHistory: [],
    })

    return res.status(200).json({id : shortid});      
}

async function handleGetRedirectURLupdateVisitHistory(req,res){
    const shortID = req.params.shortID;
    const entry = await Url.findOneAndUpdate({
        shortID,
    },{
        $push: {visitHistory: {timestamp: Date.now()},
    }
    })

    res.redirect(entry.redirectURL);
}

module.exports = { handleGenerateNewShortUrl,handleGetRedirectURLupdateVisitHistory };