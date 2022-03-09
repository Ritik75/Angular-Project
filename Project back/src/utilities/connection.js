const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Shopping";

const order = Schema({
    orderId:{type:Number,unique:true},
    prodId:[String],
    price:Number,
    date:Date
},{collection: "order"})

const customerSchema = Schema({
    emailId:{type:String,unique:true},
    password:String,
    orders:{type:[order]}
}, { collection: "Customer" });

const seller = Schema({
    sId:String,
    pDiscount:Number,
    pQuantity:Number,
    pShippingCharges:Number
},{collection:"seller"})

const product = Schema({
    id:{type:String,unique:true},
    pName:String,
    pDescription:String,
    pRating:{type:Number,max:[5,"maximum ratings is 5"]},
    pCategory:String,
    price:Number,
    color:String,
    image:String,
    specification:String,
    dateFirstAvailable:Date,
    dateLastavailable:Date,
    pSeller:{type:[seller]}
}, { collection: "product" })



let collection = {};

collection.getCustomerCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Customer', customerSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getProductCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('product', product)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;