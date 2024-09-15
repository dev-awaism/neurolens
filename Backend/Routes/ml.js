// backEnd/Routes/ml.js
const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.get('/predict', (req, res) => {
    exec('../Ml/efficientNet.py', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(`Model output: ${stdout}`);
    });
});

module.exports = router;
