const Event = require('../model/eventModel');
const { isValidDate } = require('../utils/dateValidation');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    if (!isValidDate(date)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
    const event = await Event.create({ title, description, date });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

exports.getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event);
};

exports.updateEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    if (date && !isValidDate(date)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, date },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json({ message: 'Event deleted' });
};
