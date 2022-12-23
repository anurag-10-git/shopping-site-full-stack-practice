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
        console.log('this is product ',product);
        if(!product) {
            return res.redirect('/');
        }
        
        res.render('add-products',{
            editing: true,
            product: product,
        });
    }).catch(err => console.log(err));
}

exports.postEditProduct = (req ,res, next) => {
    const prodId = req.body.productId;
    const updatedName = req.body.name;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    
    console.log('this is request body',req.body);
    console.log(prodId , updatedDesc, updatedName, updatedImageUrl, updatedPrice );

    const product = new Product(
        updatedName,
        updatedImageUrl,
        updatedPrice,
        updatedDesc,
        prodId
    );

    product.save().then( result => {
        console.log('Product Updated');
        res.redirect('/')
    }).catch(err => console.log(err));
}