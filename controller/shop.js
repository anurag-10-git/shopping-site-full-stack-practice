const Product = require("../models/productsModel");

exports.getIndex = (req,res,next)=>{
    Product.fetchAll().then(products => {
      res.render('index', {
        prods: products
      })
    }).catch(err=> {
        console.log(err);
    })
}

exports.getProductDetail = (req,res,next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(product => {
    res.render('product-details',{
      product: product
    })
  }).catch(err => {
    console.log(err);
  })
};

