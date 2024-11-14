import express from 'express';
import Service from '../models/services.js';
const router = express.Router();

router.post('/services', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || !price) return res.status(400).json({ error: 'All fields are required' });

        const service = new Service({ name, description, price });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Could not add service' });
    }
});

router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve services' });
    }
});

router.put('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;

        const service = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if (!service) return res.status(404).json({ error: 'Service not found' });

        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Could not update service' });
    }
});

router.delete('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByIdAndDelete(id);
        if (!service) return res.status(404).json({ error: 'Service not found' });

        res.status(200).json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Could not delete service' });
    }
});

export default router;
