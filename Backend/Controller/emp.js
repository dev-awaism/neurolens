const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Emp = require('../Models/emp')
const mongoose = require('mongoose')

function create(req, res, next) {
  let empName = req.body.empName;
  let empPassword = req.body.empPassword;
  let empFLname= req.body.empFLname;
  let empPhone= req.body.empPhone;

  let emp = new Emp({
    empName,
    empPassword,
    empFLname,
    empPhone,
    // empMobile
  })
  emp.save().then((data) => {
    res.send(data)
  })
}

// function view(req, res, next) {
//   Emp.find({}).then((data) => {
//     res.send(data)
//   })
// }

async function view(req, res, next) {
  // Extract email from query parameters
  const empName = req.body.empName;

  // Find the document with the matching email
  Emp.findOne({ empName: empName }).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  }).catch(err => {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  });
}

async function getUserDetails(req, res) {
  try {
      const empName = req.body.empName; // Assuming the JWT payload is the username
      const user = await Emp.findOne({ empName: empName });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Send necessary user details, excluding sensitive information like passwords
      res.json({
          empName: user.empName,
          empFLname: user.empFLname,
          empPhone: user.empPhone
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
}


async function login(req, res, next) {
  const empName = req.body.empName;
  const empPassword = req.body.empPassword;

  try {
    const user = await Emp.findOne({ empName });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (user.empPassword === empPassword) {
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports.create = create
module.exports.view = view
module.exports.login = login
module.exports.getUserDetails= getUserDetails

// Updated on Sun Jul  6 12:57:26 CDT 2025
