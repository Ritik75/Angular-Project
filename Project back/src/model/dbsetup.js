const collection = require('../utilities/connection');

const customerDb = [
    {
        emailId:"project@infy.com",
        password:"password123",
        orders:[{
          orderId:1001,
          prodId:["1001"],
          price:11999,
          date:"2020-04-20"
        }]
    },
    {
        emailId:"abc@infy.com",
        password:"abc123def4",
        orders:[{
          orderId:1002,
          prodId:["1002"],
          price:11199,
          date:"2020-04-20"
        }]
    },
    
]

const productDb=[
    {
        id: "1001",
        pName: "Asus Zenfone Max Pro ",
        pDescription: "an economical phone by Asus",
        pRating: 3.5,
        pCategory: "Electronics",
        price: 14999,
        color: "Black",
        image: "Zenfone Max Pro M2.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Asus@Seller",
          pDiscount: 0.2,
          pQuantity: 661,
          pShippingCharges: 150
        }
      },
      {
        id: "1002",
        pName: "Redmi Note 6 Pro",
        pDescription: "an economical phone by Xiaomi",
        pRating: 4,
        pCategory: "Electronics",
        price: 13999,
        color: "Black",
        image: "Redmi note 6 Pro.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Xiaomi@Seller",
          pDiscount: 0.2,
          pQuantity: 665,
          pShippingCharges: 150
        }
      },
      {
        id: "1003",
        pName: "Moto G7 Plus",
        pDescription: "a prime phone by Moto",
        pRating: 4,
        pCategory: "Electronics",
        price: 23599,
        color: "Silver",
        image: "moto-g7.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Moto@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1004",
        pName: "Lenovo Tab 2 A8-50",
        pDescription: "a high end phone by Lenovo",
        pRating: 4.5,
        pCategory: "Electronics",
        price: 19999,
        color: "Blue",
        image: "lenovoTab.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Lenovo@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1005",
        pName: "Iphone 8 plus",
        pDescription: "a high end phone by apple",
        pRating: 4.9,
        pCategory: "Electronics",
        price: 79999,
        color: "Rose Gold",
        image: "iphone 8 plus.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Apple@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1006",
        pName: "Adidas Running Men Lite",
        pDescription: "a pair of light weight running shoes by adidas",
        pRating: 4,
        pCategory: "Shoes",
        price: 2599,
        color: "Grey Blue",
        image: "adidas.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Adidas@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1007",
        pName: "Adidas Running Women ",
        pDescription: "a pair of light weight running shoes by adidas",
        pRating: 4,
        pCategory: "Shoes",
        price: 2599,
        color: "Pink",
        image: "Shoes.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Adidas@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1008",
        pName: "Adidas Running Men robust ",
        pDescription: "A pair of robust running shoes ",
        pRating: 4,
        pCategory: "Shoes",
        price: 3599,
        color: "Black",
        image: "adidas 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Adidas@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1009",
        pName: "Reebok training shoes",
        pDescription: "A pair of light weight training shoes ",
        pRating: 3,
        pCategory: "Shoes",
        price: 1599,
        color: "Grey",
        image: "Reebok 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Reebok@Seller",
          pDiscount: 0.25,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1010",
        pName: "Nike Running Men Lite",
        pDescription: "a pair of light weight running shoes by Nike",
        pRating: 4.6,
        pCategory: "Shoes",
        price: 6599,
        color: "Green",
        image: "nike max air.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Nike@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1011",
        pName: "Luxury Bed by Zuari",
        pDescription: "sunmica finished zuari luxury bed for comfort",
        pRating: 4,
        pCategory: "Furniture",
        price: 8999,
        color: "Beige",
        image: "Zuari furnitures.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Zuari@Seller",
          pDiscount: 0.2,
          pQuantity: 0,
          pShippingCharges: 150
        }
      },
      {
        id: "1012",
        pName: "Comparted Cupboards by Zuari",
        pDescription: "sunmica finished zuari cupboards in different varieties",
        pRating: 4.3,
        pCategory: "Furniture",
        price: 6999,
        color: "Coffee Brown",
        image: "Zuari furnitures 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Zuari@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1013",
        pName: "Dressing Table sets by Zuari",
        pDescription: "sunmica finished zuari Dressing table in various colours",
        pRating: 4,
        pCategory: "Furniture",
        price: 8599,
        color: "Beige",
        image: "Swann-Dressing-1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Zuari@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1014",
        pName: "Sofa set by Grihshobha",
        pDescription: "A luxurious and comfortable sofa set by Grihshobha furniture makers",
        pRating: 4.8,
        pCategory: "Furniture",
        price: 12500,
        color: "Dark grey",
        image: "Recliner furniture 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Grihshobha@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1015",
        pName: "Dining table by @HOME",
        pDescription: "Teak wood dining table with glass top",
        pRating: 4.4,
        pCategory: "Furniture",
        price: 18999,
        color: "caramel",
        image: "Dining-Table.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "HOME@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1016",
        pName: "Kurta Plazzo set ethnic for women",
        pDescription: "embroidery work kurta plazzo set for women",
        pRating: 4,
        pCategory: "Clothing",
        price: 1499,
        color: "Orange",
        image: "Women Ethnic Kurta 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Ethnic@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1017",
        pName: "Cotton silk saree by FabIndia",
        pDescription: "cotton silk hand woven beautiful sarees by Fabindia",
        pRating: 4.8,
        pCategory: "Clothing",
        price: 5900,
        color: "Red",
        image: "Saree.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "FabIndia@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1018",
        pName: "Virat's Special for men ethnic",
        pDescription: "Festive season special woven black woollen coat for men",
        pRating: 4.8,
        pCategory: "Clothing",
        price: 1900,
        color: "black",
        image: "Men ethnic.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "Ethnic@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1019",
        pName: "US Polo T-shirts in combo sets",
        pDescription: "100 % pure cotton varieties t shirts by US polo in combo",
        pRating: 4.8,
        pCategory: "Clothing",
        price: 3299,
        color: "Orange",
        image: "US -Polo 1.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "USPolo@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      },
      {
        id: "1020",
        pName: "UCB T-shirt",
        pDescription: "100 % pure cotton t shirt by UCB",
        pRating: 4.2,
        pCategory: "Clothing",
        price: 1900,
        color: "Blue",
        image: "UCB tshirt.jpg",
        specification: "",
        dateFirstAvailable:"2012-09-17T00:00:00.000Z",
        dateLastAvailable: "2017-09-17T00:00:00.000Z",
        pSeller: {
          sId: "UCB@Seller",
          pDiscount: 0.2,
          pQuantity: 666,
          pShippingCharges: 150
        }
      }
]

exports.setupDb = () => {
    return collection.getCustomerCollection().then((customer) => {
        return customer.deleteMany().then(() => {
            return customer.insertMany(customerDb).then(() => {
                return collection.getProductCollection().then((product)=>{
                    return product.deleteMany().then(()=>{
                        return product.insertMany(productDb).then((data)=>{
                            if (data) return "Insertion Successful"
                            else {
                                let err = new Error("Insertion failed");
                                err.status = 400;
                                throw err;
                            }
                        })
                    })
                })
            })
        })
    })
}

