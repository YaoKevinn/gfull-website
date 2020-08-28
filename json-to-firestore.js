const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBvJ2mqakBvmqHkHWprgNFgTyqXj4agAxM",
    authDomain: "gfull-website.firebaseapp.com",
    projectId: "gfull-website"
  });
  
var db = firebase.firestore();

var products = [
    // {
    //     "id": 1,
    //     "productImage":"aduki.jpg",
    //     "productName":"優質小紅豆",
    //     "productDescription":"Aduki",
    //     "price1kg":220,
    //     "discountKgs":5,
    //     "priceKgs":990
    // },
    // {
    //     "id": 2,
    //     "productImage":"porotoMung.jpg",
    //     "productName":"優質綠豆",
    //     "productDescription":"Poroto Mung.",
    //     "price1kg":160,
    //     "discountKgs":5,
    //     "priceKgs":720
    // },
    // {
    //     "id": 3,
    //     "productImage":"arandanosRojos.jpg",
    //     "productName":"優質蔓越莓乾",
    //     "productDescription":"Arandanos Rojos",
    //     "price1kg":1150,
    //     "discountKgs":2,
    //     "priceKgs":2090
    // },
    // {
    //     "id": 4,
    //     "productImage":"ciruela.jpg",
    //     "productName":"漂亮大顆李子乾",
    //     "productDescription":"Ciruela Pres. Gigante",
    //     "price1kg":890,
    //     "discountKgs":2,
    //     "priceKgs":1640
    // },
    // {
    //     "id": 5,
    //     "productImage":"nuezMariposa.jpg",
    //     "productName":"頂級核桃 (大顆、無油耗味)",
    //     "productDescription":"Nuez Mariposa Extra Light",
    //     "price1kg":950,
    //     "discountKgs":2,
    //     "priceKgs":1780
    // },
    // {
    //     "id": 6,
    //     "productImage":"almendraNonPareil.jpg",
    //     "productName":"優質杏仁果",
    //     "productDescription":"Almendra Non Pareil",
    //     "price1kg":1290,
    //     "discountKgs":0,
    //     "priceKgs":0
    // },
    // {
    //     "id": 7,
    //     "productImage":"castania.jpg",
    //     "productName":"優質腰果",
    //     "productDescription":"Castañas de Cajú W4",
    //     "price1kg":1050,
    //     "discountKgs":0,
    //     "priceKgs":0
    // },
    // {
    //     "id": 8,
    //     "productImage":"pistacho.jpg",
    //     "productName":"開心果",
    //     "productDescription":"Pistacho",
    //     "price1kg":1900,
    //     "discountKgs":2,
    //     "priceKgs":3600
    // },
    // {
    //     "id": 9,
    //     "productImage":"mani.jpg",
    //     "productName":"優質花生 (生)",
    //     "productDescription":"Maní",
    //     "price1kg":200,
    //     "discountKgs":5,
    //     "priceKgs":800
    // },
    // {
    //     "id": 10,
    //     "productImage":"maniSinSal.jpg",
    //     "productName":"無鹽花生",
    //     "productDescription":"Maní sin sal",
    //     "price1kg":160,
    //     "discountKgs":5,
    //     "priceKgs":750
    // },
    {
        "id": 11,
        "productImage":"sesamoNegro.jpg",
        "productName":"黑芝麻",
        "productDescription":"Sésamo Negro",
        "price1kg":700,
        "discountKgs":2,
        "priceKgs":1300
    },
    {
        "id": 12,
        "productImage":"azucarNegra.jpg",
        "productName":"紅糖/黑糖",
        "productDescription":"Azúcar Negra",
        "price1kg":185,
        "discountKgs":5,
        "priceKgs":850
    },
    {
        "id": 13,
        "productImage":"azucarMascabo.jpg",
        "productName":"黃糖/焦糖",
        "productDescription":"Azúcar Mascabo",
        "price1kg":210,
        "discountKgs":5,
        "priceKgs":950
    }
 ]

 products.forEach(function(obj) {
    db.collection("products").add({
        id: obj.id,
        productImage: obj.productImage,
        productName: obj.productName,
        productDescription: obj.productDescription,
        price1kg: obj.price1kg,
        discountKgs: obj.discountKgs,
        priceKgs: obj.priceKgs
    
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});