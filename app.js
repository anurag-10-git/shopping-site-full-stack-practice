const express = require('express');
const path = require('path')
const shopRoutes = require('./routes/shopRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require('body-parser');
const errorController = require('./controller/error');
// const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/usersModel')
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))

app.use((req,res,next)=>{
  User.findById('63ac3da2a4a75612640cc715').then(user => {
    console.log(user);
    req.user = user;
    next();
  }).catch(err => console.log(err));
})

app.use('/admin',adminRoutes)
app.use(shopRoutes);
app.use(errorController.get404);

mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://anurag:R3DfiPAZnt78pkg8@clusters.nmumkwm.mongodb.net/NewShopPractice?retryWrites=true&w=majority").then(result =>{
  User.findOne().then(user => {
    if(!user) {
      const user = new User({
        name: 'anurag',
        email: 'anurag2001@gmail.com',
        cart: {items:[]}
      });
      user.save();
    }
  });
  
  app.listen(3002);
}).catch(err => {
  console.log(err);
});