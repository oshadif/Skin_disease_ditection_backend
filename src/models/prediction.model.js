import { DataTypes} from "sequelize";
import db from "../config/database.js";

const Prediction = db.define("predictions", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    percentage: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    isUnhealth: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precautions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sessionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

export default Prediction;
