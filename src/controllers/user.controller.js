import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({message: error.message});
    console.error(error.message);
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(password,10),
    }
    const user = await User.create(data);

    res.status(201).json(user);
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
}



export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "User updated"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
}
