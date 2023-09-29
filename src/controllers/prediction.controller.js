import Prediction from "../models/prediction.model.js";

export const getAllPredictions = async (req,res) => {
    try{
        const predictions = await Prediction.findAll();
        res.join(predictions);
    } catch (error) {
        res.json({message: error.message});
        console.error(error.message);
    }
}

export const getPredictionsById = async (req, res) => {
    try {
        const prediction = await Prediction.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(prediction[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPrediction = async (req, res) => {
//    call
}

export const deletePrediction = async (req, res) => {
    try {
        await Prediction.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Prediction deleted" });
    }catch (error) {
        res.json({ message: error.message });
    }
}
p
