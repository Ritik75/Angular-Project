const db = require('../model/users');
const validator = require('../utilities/validator');

let customerService = {}

customerService.login = ( customer ) => {
    return db.login( customer ).then(( cust )=>{
        if(cust==customer.emailId){
            return cust
        }else{
            let err = Error("Invalid email id or password")
            err.status = 404
            throw err
        }
    })
}

customerService.getAllProducts = () =>{
    return db.getAllProducts().then((data)=>{
        if(data.length){
            return data
        }else{
            let err = Error("No data present in database")
            err.status = 404
            throw err
        }
    })
}

customerService.getCustomer = ( emailId, prodId ) =>{
    return db.getCustomer( emailId, prodId ).then(( data ) =>{
        if( data ){
            return data
        }else{
            let err = Error ("Invalid Email Id")
            err.status = 404
            throw err
        }
    })
}

customerService.getOrders = ( emailId ) => {
    return db.getOrders( emailId ).then(( data )=>{
        if( data ){
            return data
        }else{
            let err = Error ("No orders yet")
            err.status = 400
            throw err
        }
    })
}

customerService.getProduct = ( prodId ) => {
    return db.getProduct( prodId ).then(( data ) => {
        if(data){
            return data
        }else{
            let err = Error ("No product found")
            err.status =404
            throw err
        }
    })
}

module.exports = customerService;