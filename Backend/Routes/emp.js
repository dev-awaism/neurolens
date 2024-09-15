// const express = require('express')
// var router = express()
// const create = require('../controller/emp')
// const view = require('../controller/emp')
// const login = require('../controller/emp');
// const getUserDetails= require('../controller/emp');
// const modle = require('../controller/emp');
// const bodyparser = require('body-parser');
// router.use(bodyparser.json())
// // router.use(bodyParser.urlencoded({extended: false}));
// router.post('/create',create.create)
// router.get('/',view.view)
// router.post('/login', login.login);
// router.post('/getUserDetails', getUserDetails.getUserDetails);


// module.exports = router


const express = require('express');
// const router = express();
const router = express.Router(); 
const bodyparser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const create = require('../controller/emp');
const view = require('../controller/emp');
const login = require('../controller/emp');
const getUserDetails = require('../controller/emp');

router.use(bodyparser.json());

router.post('/create', create.create);
router.get('/', view.view);
router.post('/login', login.login);
router.post('/getUserDetails', getUserDetails.getUserDetails);

// =========================
// NEW ROUTE: /generateReport
// =========================
const upload = multer({ dest: 'uploads/' });

router.post('/generateReport', upload.single('image'), async (req, res) => {
  const filePath = req.file.path;

  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));

    const response = await axios.post('http://localhost:5000/predict', formData, {
      headers: formData.getHeaders(),
    });

    fs.unlinkSync(filePath); // delete after sending
    res.json(response.data);
  } catch (error) {
    console.error('Prediction error:', error.message);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;
