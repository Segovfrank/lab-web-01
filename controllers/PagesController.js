let db = require('../repositories/knexSource');

exports.homepage = (req, res) => {
    res.render('pages/homepage');
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

exports.products = (req, res) => {
    db.select().from('products').then(function(data){
        res.send(data);

    });
    //res.send('Products');
    
}

