const product = [
    {
        product_id : '1',
        title : 'Shirt',
        price : '2',
        category : ['clothing'],
        company_id : '1',
        seller_id : ['1'],
    },
    {
        product_id : '2',
        title : 'Spoon',
        price : '200',
        category : ['Kitchen Appliances'],
        company_id : '2',
        seller_id : ['2'],
    },
    {
        product_id : '3',
        title : 'Sofa-set',
        price : '15000',
        category : ['Furniture'],
        company_id : '3',
        seller_id : ['3'],
    },
    {
        product_id : '4',
        title : 'Jeans',
        price : '200',
        category : ['clothing'],
        company_id : '4',
        seller_id : ['2'],
    },
  ];
  const company = [
    {
        company_id : '1',
        name : 'U.S.POLO' ,
        product_ids :['1'],
    },
    {   
        company_id : '2',
        name : 'Kesar Trading' ,
        product_ids :['2'],
    },
    {
        company_id : '3',
        name : 'Alang Furniture' ,
        product_ids :['3'],
    },
    {   
        company_id : '4',
        name : 'Wrogn' ,
        product_ids :['2'],
    },
  ];
  const seller = [
    {
        seller_id : '1',
        name : 'Mahavir',
        product_ids : ['1'],

    },
    {   
        seller_id : '2',
        name : 'Arihant',
        product_ids : ['2'],
    },
    {
        seller_id : '3',
        name : 'Parshwa',
        product_ids : ['3'],
    },
  ];
  
  module.exports = {company, product, seller};