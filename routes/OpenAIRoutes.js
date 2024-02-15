const express = require('express');
const { generateImage } = require('../controllers/OpenAIcontroller');
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = routers;