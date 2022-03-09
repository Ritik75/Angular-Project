const dbModel = require('../utilities/connection');

const customerModel = {}

customerModel.generateId = () => {
    return dbModel.getCustomerCollection().then((model) => {
        return model.distinct("orders.orderId").then((ids) => {
            let bId = Math.max(...ids);
            return bId + 1;
        })
    })
}

customerModel.login = ( customer ) => {
    return dbModel.getCustomerCollection().then(( customerCollection )=>{
        return customerCollection.findOne({ emailId : customer.emailId }).then(( cust )=>{
            if(cust){
                if(cust.password==customer.password){
                    return cust.emailId
                }
            }
        })
    })
}

customerModel.getAllProducts = () => { 
    return dbModel.getProductCollection().then((productCollection)=>{
        return productCollection.find().then((data)=>{
            if(data.length){
                return data
            }
        })
    })
}

customerModel.getCustomer = ( emailId, order ) => {
    return customerModel.generateId().then((id)=>{        
        order.orderId=id 
        return dbModel.getCustomerCollection().then((customerCollection)=>{
            return customerCollection.updateOne({emailId:emailId},{$push:{orders:order}}).then((data)=>{
                if(data.nModified){
                    return dbModel.getProductCollection().then((productCollection)=>{
                        return productCollection.findOne({id:order.prodId[0]}).then((datas)=>{
                            if(datas){
                                return productCollection.updateOne({id:datas.id,"pSeller.sId":datas.pSeller[0].sId},{$inc:{"pSeller.$.pQuantity":-1}}).then((up)=>{
                                    if(up.nModified){
                                        return order.orderId
                                    }
                                })
                            }
                        })
                    })
                }
            })
        })     
    })
    
}

customerModel.getOrders = ( emailId ) => { 
    return dbModel.getCustomerCollection().then((customerCollection)=>{
        return customerCollection.findOne({emailId:emailId},{orders:1,_id:0}).then((data)=>{
            if(data.orders.length){
                return data.orders
            }
        })
    })
}

customerModel.getProduct = ( prodId ) =>{
    return dbModel.getProductCollection().then(( productCollection )=>{
        return productCollection.findOne({id:prodId}).then(( data )=>{
            if(data){
                return data
            }
        })
    })
}

module.exports = customerModel;