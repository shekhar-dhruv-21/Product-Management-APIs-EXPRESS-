const { Router } = require('express');
const router = Router();

const {product,company} = require('../data');

router.get('/getByPname/:pname', (req, res) => {
    try {
        const Products = product.find(pro => 
            pro.title == req.params.pname
        ); //It takes Product name from params and returns its Product id from Products data.
        
        const companyData = company.filter(comp => 
            comp.product_ids.includes(Products.product_id)
        ); // It returns Company details for that Product.
        
        if(companyData.length === 0) return res.json({ statusCode: 200, message: 'No data found.!' });
        else return res.json({statusCode: 200, data: companyData});
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});
//insert
router.post('/PostCompany',(req,res)=>{
    try{
        company.push(req.body);
        return res.json({statecode:201,data:company});
    }catch(err){
        return res.json({statecode:400,message:'try Again.!'});
    }
});
//Delete
router.delete('/deleteSeller/:id',(req,res)=>{
    try{
        const findIndex=company.findIndex(com=>com.company_id === req.params.id)
        if(findIndex == -1) return res.json({statecode:200, messgae:"company not found..!"})
        else{
            company.splice(findIndex,1)
            return res.json({statecode:400, data:company});
        }
    }catch(err){
        return res.json({statecode:400, message:'try again..!'});
    }
});

//update
router.put('/updateCompany/:id', (req, res) => {
    try {
        const findIndex = company.findIndex(comp => comp.company_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Company ID not found.'})
        else {
            company[findIndex] = req.body;
            return res.json({statusCode: 200, data: company[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
});
module.exports=router;