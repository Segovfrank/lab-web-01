let router = require("express").Router();
let pagesController = require('../controllers/PagesController');

router.get('/', pagesController.homepage);

router.get('/about', pagesController.about);

router.get('/edit/:id', pagesController.edit);

router.post('/editProduct', pagesController.editProduct);

router.get('/delete/:id', pagesController.delete);

router.get('/find/:id', pagesController.find);

router.get('/create', pagesController.create);

router.post('/createProduct', pagesController.createProduct);

router.get('/*', pagesController.any);

module.exports = router;