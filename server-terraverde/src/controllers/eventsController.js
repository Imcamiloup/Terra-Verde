import { Event } from "../config/db.js";
import { Op } from "sequelize";


const getAllEventsController = async () => {
    return await Event.findAll();
    };

const getEventsByIdController = async (id) => {
    return await Event.findByPk(id);
    };

const createEventsController = async (event) => {
    return await Event.create(event);
    };

const updateEventsController = async (id, event) => {
    await Event.update(event, { where: { id } });
    return await Event.findByPk(id);
    };

const deleteEventsController = async (id) => {
    return await Event.destroy({ where: { id } });
    }



export {
    getAllEventsController,
    getEventsByIdController,
    createEventsController,
    updateEventsController,
    deleteEventsController,
};
