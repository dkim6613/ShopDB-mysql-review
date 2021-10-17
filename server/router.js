const router = require('express').Router();
const controller = require('./controllers.js');

// TODO: Connect router to controller functions
router.route('/inventory').get(controller.getAll).post(controller.post);

router.route('/inventory/:id').get(controller.getOne).put(controller.getOne).delete(controller.deleteOne);







module.exports = router;