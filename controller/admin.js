const Product = require('../models/productsModel');

exports.getAddProducts = (req,res,next) => {
    res.render('add-products');
}

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title; 
    const imageUrl = req.body.imageUrl; 
    const price = req.body.price; 
    
    const product = new Product(title, imageUrl, price);

    product.save().then((result)=>{
        console.log('created product added to database');
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}