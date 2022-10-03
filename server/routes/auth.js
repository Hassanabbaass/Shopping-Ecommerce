const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req,res) => {
    const newUser = User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong credentials!")
                                                                                                  // really imp
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        hashedPassword !== req.body.password && res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
            // what are we passing in the token
            id: user._id,
            isAdmin: user.isAdmin,
            }, 
            process.env.JWT_SEC ,
            {expiresIn:"3d"}
        );

        // to prevent sending the password even if its encrypted, it should not appear in the response
        // we use the others method and instead of responding with the whole user
        // res.status(200).json(user)   <-- we will use the method below instead
        // the others method reponds with init and unusual stuff so we need to specify user._doc "for some reason"
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});

    } catch(err){
        res.status(500).json(err);
    }
})



module.exports = router