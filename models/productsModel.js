const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
    constructor(name, imageUrl, price){
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
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
}

module.exports = Product;