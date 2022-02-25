import asyncHandler from "express-async-handler";
import User from "../schema/user-schema.js";
import generateToken from "../utils/generateToken.js";

export const registerUser =  asyncHandler(async (request,response) => {
    const {name,email,password} = request.body;
    const userExists = await User.findOne({email});

    if(userExists){
        response.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
      });

      if (user) {
        response.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id)
        });
      } else {
        response.status(400);
        throw new Error("User not found");
      }
})

export const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    response.status(401);
    throw new Error("Invalid Email or Password");
  }
});