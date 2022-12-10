const Product = require("../models/productsModel");

exports.getIndex = (req,res,next)=>{
    Product.fetchAll().then(products => {
        console.log('____________',products,'______________');
      res.render('index', {
        prods: products
      })
    }).catch(err=> {
        console.log(err);
    })
}

