let router = require("express").Router();
let pagesController = require('../controllers/PagesController');

router.get('/', pagesController.homepage);

router.get('/about', pagesController.about);

router.get('/frank', pagesController.frank);

router.get('/products', pagesController.products);

router.get('/*', pagesController.any);


module.exports = router;