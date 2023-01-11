const Product = require("../models/productsModel");

exports.getIndex = (req,res,next)=>{
    Product.find().then(products => {
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


exports.postCart = (req,res,next) => {
  const productId = req.body.productId;
  Product.findById(productId).then(product=>{
    console.log("This is your product",product);
  })
}
