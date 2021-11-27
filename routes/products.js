const { Router, response } = require('express');
const router = Router();

const {product} = require('../data');

router.get('/getByCompany/:id', (req, res) => {
    try {
        const Products = product.filter(pro => 
            pro.company_id == req.params.id
        );
        if(Products.length === 0) return res.json({ statusCode: 200, message: 'No data found.!' });
        else return res.json({statusCode: 200, data: Products});
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});
router.get('/getBySeller/:id', (req, res) => {
    try {
        const Products = product.filter(pro => 
            pro.seller_id.includes(req.params.id)
        );
        if(Products.length === 0) return res.json({ statusCode: 200, message: 'No data found.!' });
        else return res.json({statusCode: 200, data: Products});
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});
//insert

router.post('/postProduct', (req, res) => {
    try {
        product.push(req.body);
        return res.json({ statusCode: 201, data: product});
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});

//delete
router.delete('/deleteProduct/:id', (req, res) => {
    try {
        const findIndex = product.findIndex(prod => prod.product_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Product ID not found.'})
        else {
            product.splice(findIndex , 1);
            return res.json({statusCode: 200, data: product});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});

//update
router.put('/updateProduct/:id', (req, res) => {
    try {
        const findIndex = product.findIndex(prod => prod.product_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Product ID not found.'})
        else {
            product[findIndex] = req.body;
            return res.json({statusCode: 200, data: product[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});


module.exports=router;
