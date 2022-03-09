const express = require('express');
const routing = express.Router();
const create = require('../model/dbsetup');
const customerService = require('../service/users');
const Customer = require('../model/customer');
const Orders = require ('./../model/orders')


// setup db mongoose db
routing.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})


routing.post('/login', (req, res, next) => {
    const customer = new Customer(req.body);    
    customerService.login(customer).then((emailId) => {
        res.json({"emailId":emailId,"password":customer.password});
    }).catch((err) => next(err))
})

routing.get('/getproducts',(req,res,next)=>{
    customerService.getAllProducts().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

routing.put('/getcustomer/:emailId',(req,res,next)=>{
    let order = new Orders (req.body)
    customerService.getCustomer(req.params.emailId,order).then((data)=>{
        if(data){
            res.json({"message":"Order placed with order id " + data})
    }
    }).catch((err)=>{
        next(err)
    })
})

routing.get('/getorders/:emailId',(req,res,next)=>{
    customerService.getOrders(req.params.emailId).then((data)=>{
        if(data){
            res.send(data)
        }
    }).catch((err)=>{next(err)})
})

routing.get('/getproduct/:prodId',(req,res,next)=>{
    customerService.getProduct(req.params.prodId).then((data)=>{
        if(data){
            res.send(data)
        }
    }).catch((err)=>{next(err)})
})

module.exports = routing;