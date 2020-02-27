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

