const express = require('express');
const app = express();
app.use(express.json());

const ProductRoute = require('./routes/products');
const CompanyRoute = require('./routes/company');
const SellerRoute = require('./routes/seller');

app.use(ProductRoute);
app.use(CompanyRoute);
app.use(SellerRoute);

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));