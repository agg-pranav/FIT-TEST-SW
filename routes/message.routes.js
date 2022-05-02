const router = require('express').Router();
const {getMaxRequests, postMessage } = require('../controllers/messages.controller');

router.route('/')
    .post(postMessage )
    .get(getMaxRequests);

module.exports = router;