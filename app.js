const express = require('express');
const path = require('path')
const shopRoutes = require('./routes/shopRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;


const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin',adminRoutes)
app.use(shopRoutes);

mongoConnect(()=>{

    app.listen(3002);
})