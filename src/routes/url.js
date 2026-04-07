const express = require('express');
const router = express.Router();

const { handleGenerateNewShortUrl,handleGetRedirectURLupdateVisitHistory } = require('../controllers/url');    

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics/:shortID", handleGetRedirectURLupdateVisitHistory);

module.exports = router;