import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +"-"+ file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        res.json({filepath: req.file.path});
    } catch (error) {
        res.json({ message: error.message });
    }
});

export default router;
