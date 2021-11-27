const { Router } = require('express');
const router = Router();

const {product,seller} = require('../data');

router.get('/getSellerByPname/:pname', (req, res) => {
    try {
        const Products = product.find(pro => 
            pro.title == req.params.pname
        ); //It takes Product name from params and returns its Product id from Products data.

        const selllerData = seller.filter((sel) => {
            sel.product_ids.includes(Products.product_id)
        }); // It returns seller details for that Product.
        
        if(selllerData.length === 0) return res.json({ statusCode: 200, message: 'No data found.!' });
        else return res.json({statusCode: 200, data: companyData});
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});

//Add
router.post('/PostSeller',(req,res)=>{
    try{
        seller.push(req.body);
        return res.json({statecode:201, data:seller});
    }catch(err){
        return res.json({statecode:400,message:'try Again.!'})
    }
});

//delete
router.delete('/deleteSeller/:id',(req,res)=>{
    try{
        const findIndex = seller.findIndex(sel=>sel.seller_id === req.params.id)
        if(findIndex == -1)return res.json({statecode:200,message:'Seller not found..!'})
        else{
            seller.splice(findIndex,1);
            return res.json({statecode:400 , data:seller});
        }
    }catch(err){
        return res.json({statecode:400 , message:'try again..!'});  
    }
});

//update
router.put('/updateSeller/:id', (req, res) => {
    try {
        const findIndex = seller.findIndex(sel => sel.seller_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Seller ID not found.'})
        else {
            seller[findIndex] = req.body;
            return res.json({statusCode: 200, data: seller[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});
module.exports=router;