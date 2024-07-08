import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define('task',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: 'ingrese tarea',
            },
        },
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

