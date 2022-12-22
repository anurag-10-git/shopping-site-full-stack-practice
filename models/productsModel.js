const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
    constructor(name, imageUrl, price , description){
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description= description;
    }

    save() {
     const db = getDb();
     console.log('this is db in models......',db);
      return db.collection('productsStorage').insertOne(this).then(result => {
        console.log(result);
      }).catch(err => {
         console.log(err);
      })
    }

  static fetchAll() {
     const db = getDb();
     console.log('....fetching data....');
     return db.collection('productsStorage').find().toArray().then(products => {
      console.log(products);
      return products;
     }).catch(err=>{
      console.log(err);
     })
   } 

   static findById(prodId) {
    const db = getDb();
    return db.collection('productsStorage').find({_id:new mongodb.ObjectId(prodId)}).next().then(product => {
      console.log('product found');
      console.log(product);
      return product;
    }).catch(err=>{
      console.log(err);
    })
   }

   static deleteById(prodId) {
    const db = getDb();
    return db.collection('productsStorage').deleteOne({_id: new mongodb.ObjectId(prodId)});
   }
}

module.exports = Product;