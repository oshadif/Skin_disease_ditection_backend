import express from "express";
import {
  getAllPredictions,
  getPredictionsById,
  createPrediction,
  deletePrediction
} from "../controllers/prediction.controller.js";

const router = express.Router();

router.get('/', getAllPredictions);
router.get('/:id', getPredictionsById);
router.post('/', createPrediction);
// router.patch('/:id', updateUser);
router.delete('/:id', deletePrediction);

export default router;
