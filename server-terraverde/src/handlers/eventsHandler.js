 import {
    getAllEventsController,
    getEventsByIdController,
    createEventsController,
    updateEventsController,
    deleteEventsController,
    } from "../controllers/eventsController.js"; 

  
    const getAllEventsHandler = async (req, res) => {
        try {
            const events = await getAllEventsController();
            res.status(200).send(events);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
        };

    const getEventsByIdHandler = async (req, res) => {
        try {
            const { id } = req.params;
            const event = await getEventsByIdController(id);
            res.status(200).send(event);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
        };

    const createEventsHandler = async (req, res) => {
        try {
            const event = req.body;
            const newEvent = await createEventsController(event);
            res.status(201).send(newEvent);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
        };

    const updateEventsHandler = async (req, res) => {   
        try {
            const { id } = req.params;
            const event = req.body;
            const updatedEvent = await updateEventsController(id, event);
            res.status(200).send(updatedEvent);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
        };

    const deleteEventsHandler = async (req, res) => {
        try {
            const { id } = req.params;
            await deleteEventController(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
        };

  
  export {
    getAllEventsHandler,
    getEventsByIdHandler,
    createEventsHandler,
    updateEventsHandler,
    deleteEventsHandler,
  };
  
