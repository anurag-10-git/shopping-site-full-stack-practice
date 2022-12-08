const express = require('express');
const path = require('path')
const shopRoutes = require('./routes/shopRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin',adminRoutes)
app.use(shopRoutes);


app.listen(3000);