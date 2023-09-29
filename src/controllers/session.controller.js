import Session from "../models/sessions.model.js";

export const getAllSessions = async (req,res) => {
    try{
        const sessions = await Session.findAll();
        res.join(sessions);
    } catch (error) {
        res.json({message: error.message});
        console.error(error.message);
    }
}

export const getSessionsById = async (req, res) => {
    try {
        const session = await Session.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(session[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createSession = async (req, res) => {

}

export const deleteSession = async (req, res) => {
    try {
        await Session.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Session deleted" });
    }catch (error) {
        res.json({ message: error.message });
    }
}

