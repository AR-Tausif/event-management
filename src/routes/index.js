const express = require('express');
const eventController = require('../controller/event.controller')
const router = router()
router.post('/events', eventController);

module.exports = router;