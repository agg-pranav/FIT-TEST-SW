const router = require('express').Router();
const {getMaxRequestsToday, postMessage } = require('../controllers/messages.controller');

router.route('/').post(postMessage )
router.route('/max').get(getMaxRequestsToday);

module.exports = router;