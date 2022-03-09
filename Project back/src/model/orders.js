class Orders{
    constructor(obj){
        this.orderId
        this.prodId=[]
        this.prodId.push(obj.prodId)
        this.price=obj.price
        this.date=obj.date
    }
}

module.exports=Orders