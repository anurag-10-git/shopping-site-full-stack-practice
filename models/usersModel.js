const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items:[ 
            {
            productId: {
                type: Schema.Types.ObjectId,
                required: true
            },
            quantity: {
                type: Number, required: true
            },
        },
      ],
    },
});

module.exports = mongoose.model('User',userSchema)

// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;
// const ObjectId = mongodb.ObjectId;

// class User {
//     constructor(userId,email){
//         this.name = name;
//         this._email = email;
//         this._cart = cart;
//         this._id = userId;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('users').insertOne(this);
//     }

//     addToCart(product){
//         const cartProductIndex = this.cart.items.findIndex(cp => {
//             return cp.productId.toString() === product._id.toString();
//         })

//         let newQuantity = 1;
//         const updatedCartItems = [...this.cart.items];
//     }

//     static findById(userId){
//         const db = getDb();
//         return db.collection('users').findOne({_id:new ObjectId(userId)}).then(user=>{
//             console.log('users found is' ,user);
//             return user;
//         }).catch(err => console.log(err));
//     }
// }

// module.exports = User;
