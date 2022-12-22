const Product = require('../models/productsModel');

exports.getAddProducts = (req,res,next) => {
    res.render('add-products',{
        editing: false
    });
}

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title; 
    const imageUrl = req.body.imageUrl; 
    const price = req.body.price; 
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);

    product.save().then((result)=>{
        console.log('created product added to database');
        res.redirect('/admin/add-products');
    }).catch(err => {
        console.log(err);
    })
}

exports.getAdminControl = (req,res,next) => {
    Product.fetchAll().then(products => {
     res.render('admin-control',{
        prods: products
      });
    }).catch(err => {
        console.log(err);
    })
}

exports.postDeleteProduct = (req,res,next) => {
   const prodId = req.body.productId;
 Product.deleteById(prodId).then(()=>{
    console.log('product deleted');
    res.redirect('/admin/admin-control');
 }).catch(err => console.log(err));
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return;
    }
    const prodId = req.params.productId;
    Product.findById(prodId).then((product) => {
        if(!product) {
            return res.redirect('/');
        }

        res.render('add-products',{
            editing: editMode,
            product: product,
        });
    }).catch(err => console.log(err));
}