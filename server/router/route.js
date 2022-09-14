const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const mongoose = require("mongoose");
require("../db/conn");
const Users = require("../model/userSchema");
const User = require("../model/appointmentSchema");
const blogSchema = require("../model/blogSchema");
const Review = require("../model/reviewsSchema");
const Membership = require("../model/MembershipSchema");
const moment = require("moment");

router.post("/register", async (req, res) => {
  const { email, password, cpassword } = req.body;

  if (!email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new Users({ email, password, cpassword });
      await user.save();
      res.status(201).json({ message: "you are registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login user
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz Filled the data" });
    }
    const userLogin = await Users.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials " });
      } else {
        // need to genereate the token and stored cookie after the password match
        token = await userLogin.generateAuthToken();

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({
          message: "user Signin Successfully",
          data: { access_token: token },
        });
      }
    } else {
      res.status(400).json({ error: "Invalid login credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});
router.post("/blog", async (req, res) => {
  try {
    const blog = await blogSchema.create(req.body);
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get blog data
router.get("/blog", (req, res) => {
  blogSchema
    .find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json(`Error: ${err}`));
}),
  // get single blog data

  router.get("/blog/:id", async (req, res) => {
    var regex = new RegExp(req.params.id);
    blogSchema.find({ id: regex }).then((result) => {
      res.status(200).json(result);
    });
  }),
  // delete blog data
  router.delete("/blog/:id", async (req, res) => {
    try {
      const blogDelete = await blogSchema.findOneAndDelete({
        _id: req.params.id,
      });
      if (!blogDelete) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json({ message: "Blog Delete Successfully" });
    } catch (err) {
      console.log(err);
    }
  }),
  //     let token;
  //     // const { email, password } = req.body;

  //     if (!email || !password) {
  //       return res.status(400).send("Please fill all the fields");
  //     }
  //     const userLogin = await Users.findOne({ email: email });
  //     if (userLogin) {
  //       const isMatch = await bcrypt.compare(password, userLogin.password);
  //       if (!isMatch) {
  //         res.status(400).send({ error: "Invalid Credientials" });
  //       } else {
  //         token = await userLogin.generateAuthToken();
  //         console.log(token);
  //         res.cookie("jwtoken", token, {
  //           expires: new Date(Date.now() + 25892000000),
  //           httpOnly: true,
  //         });

  //         res.json({ message: "user Signin Successfully" });
  //       }
  //     }else{
  //       res.status(400).send({ error: "Invalid Credientials" });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // BLog api

  // Logout user
  router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("logout successfully");
  }),
  // Post User data to the database
  // Post User data to the database
  router.post("/appointments", async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res
          .status(400)
          .json({ message: "Appointment Date, Name and email are required" });
      }
      const user = new User({ name, email, phone });
      await user.save();
      res.status(201).json({ message: "As soon as We Contact with  you" });
    } catch (err) {
      console.log(err);
    }
  }),
  // Get User data from the database
  router.get("/appointments", async (req, res) => {
    try {
      const appointments = await User.find();
      res.status(200).json(appointments);
    } catch (err) {
      console.log(err);
    }
  }),
  //Post Reviews Data in database
  router.post("/review", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const date = moment().format();
      const reviews = new Review({
        name: name,
        email: email,
        message: message,
        date: date,
      });
      const finalData = await reviews.save();
      res
        .status(201)
        .json({ message: "Thank you for your Reviews", finalData });
    } catch (err) {
      console.log(err);
    }
  }),
  // Get api reviews
  router.get("/review", async (req, res) => {
    try {
      const review = await Review.find();
      res.status(200).json(review);
    } catch (err) {
      console.log(err);
    }
  });
// Post Salon Membership Data in database
router.post("/membership", async (req, res) => {
  try {
    const { number } = req.body;
    const date = moment().format();
    const membership = new Membership({ number, date });
    await membership.save();
    res.status(201).json({ message: "Thank you for your membership" });
  } catch (err) {
    console.log(err);
  }
}),
  // Get Salon Membership Data from the database
  router.get("/membership", async (req, res) => {
    try {
      const membership = await Membership.find();
      res.status(200).json(membership);
    } catch (err) {
      console.log(err);
    }
  }),
  (module.exports = router);
