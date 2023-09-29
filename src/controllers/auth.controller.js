import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const userAuthentication = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email,
            }
        });
        if (user) {
            const checkPassword = await bcrypt.compare(password, user.password);
            if(checkPassword){
                res.status(201).json(user);
            } else {
                res.status(401).json({message: "Authentication Failed"});
            }
        } else {
            res.status(401).json({message: "Authentication Failed: user not found"});
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}
