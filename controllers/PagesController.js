let db = require('../database/knexSource');

let searchParams = {
    'key': 'id',
    'order': 'asc'
}

exports.homepage = (req, res) => {
    db.select().from('products').then(function(data){
        var products = data;
        //console.log(products)
        res.render('pages/homepage', 
        {
            title: 'Products',
            products: products,
            layout:'main'
        });

    });
}

exports.create = (req, res) => {
    res.render('pages/create');
}

exports.about = (req, res) => {
    res.send('About');
}

exports.any = (req, res) => {
    res.send('Any');
}

exports.frank = (req, res) => {
    res.send('Frank');
}

exports.edit = (req, res) => {
    //res.send('Edit');
    db.select().from('products').where('id', req.params.id).limit(1).then(function(data){
        let product = data[0];
        //console.log(product)
        res.render('pages/create', 
        {
            title: product.name,
            product: product,
            layout:'main',
            edit: true
        });

    });
}

exports.delete = (req, res) => {
    db('products')
    .where('id', '=', req.params.id)
    .del()
    .then(function(data){
        res.redirect('/');
    });
}

exports.createProduct = (req, res, next) => {
    console.log("Creating product");
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;

    db.insert(req.body).into('products').then(function(data) {
        res.redirect('/');
    });
}

exports.editProduct = (req, res, next) => {
    console.log("Editing product");
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;


    db('products').update({
        'name' : name,
        'price' : price,
        'description' : description
    })
    .where('id', '=', req.body.id)
    .then(function(data) {
        res.redirect('/');
    });

}

exports.products = (req, res) => {
    db.select().from('products').then(function(data){
        res.send(data);
        var products = data;
        //console.log(products)
    });
    //res.send('Products');
   
}

