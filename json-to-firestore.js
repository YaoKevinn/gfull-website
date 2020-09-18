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

          {
            "id": 1,
            "productImage":"nuezMariposa.jpg",
            "productName":"頂級核桃 (大顆、無油耗味)",
            "productDescription":"Nuez Mariposa Extra Light",
            "unit":"kg",
            "unitPrice":950,
            "discountUnit":2,
            "discountPrice":1780,
            "category":"frutasSecasPeladas",
            "disponible": true
        },
        // {
        //     "id": 2,
        //     "productImage":"almendraNonPareil.jpg",
        //     "productName":"優質杏仁果",
        //     "productDescription":"Almendra Non Pareil",
        //     "unit":"kg",
        //     "unitPrice":1290,
        //     "discountUnit":0,
        //     "discountPrice":0,
        //     "category":"frutasSecasPeladas",
        //     "disponible": true
        // },
        // {
        //     "id": 3,
        //     "productImage":"castania.jpg",
        //     "productName":"優質腰果",
        //     "productDescription":"Castañas de Cajú W4",
        //     "unit":"kg",
        //     "unitPrice":1050,
        //     "discountUnit":0,
        //     "discountPrice":0,
        //     "category":"frutasSecasPeladas",
        //     "disponible": true
        // },
        // {
        //     "id": 4,
        //     "productImage":"pistacho.jpg",
        //     "productName":"開心果",
        //     "productDescription":"Pistacho",
        //     "unit":"kg",
        //     "unitPrice":1900,
        //     "discountUnit":2,
        //     "discountPrice":3600,
        //     "category":"frutasSecasPeladas",
        //     "disponible": true
        // },
        // {
        //     "id": 5,
        //     "productImage":"mani.jpg",
        //     "productName":"優質花生 (生)",
        //     "productDescription":"Maní",
        //     "unit":"kg",
        //     "unitPrice":200,
        //     "discountUnit":5,
        //     "discountPrice":800,
        //     "category":"frutasSecasPeladas",
        //     "disponible": true
        // },
        // {
        //     "id": 6,
        //     "productImage":"maniSinSal.jpg",
        //     "productName":"無鹽花生",
        //     "productDescription":"Maní sin sal",
        //     "unit":"kg",
        //     "unitPrice":160,
        //     "discountUnit":5,
        //     "discountPrice":750,
        //     "category":"frutasSecasPeladas",
        //     "disponible": true
        // },
        // {
        //     "id": 7,
        //     "productImage":"arandanosRojos.jpg",
        //     "productName":"優質蔓越莓乾",
        //     "productDescription":"Arandanos Rojos",
        //     "unit":"kg",
        //     "unitPrice":1150,
        //     "discountUnit":2,
        //     "discountPrice":2090,
        //     "category":"frutasDesecadas",
        //     "disponible": true
        // },
        // {
        //     "id": 8,
        //     "productImage":"ciruela.jpg",
        //     "productName":"漂亮大顆李子乾",
        //     "productDescription":"Ciruela Pres. Gigante",
        //     "unit":"kg",
        //     "unitPrice":890,
        //     "discountUnit":2,
        //     "discountPrice":1640,
        //     "category":"frutasDesecadas",
        //     "disponible": true
        // },
        // {
        //     "id": 9,
        //     "productImage":"aduki.jpg",
        //     "productName":"優質小紅豆",
        //     "productDescription":"Poroto Aduki",
        //     "unit":"kg",
        //     "unitPrice":220,
        //     "discountUnit":5,
        //     "discountPrice":990,
        //     "category":"porotos",
        //     "disponible": true
        // },
        // {
        //     "id": 10,
        //     "productImage":"porotoMung.jpg",
        //     "productName":"優質綠豆",
        //     "productDescription":"Poroto Mung.",
        //     "unit":"kg",
        //     "unitPrice":160,
        //     "discountUnit":5,
        //     "discountPrice":720,
        //     "category":"porotos",
        //     "disponible": true
        // },
        // {
        //     "id": 11,
        //     "productImage":"azucarNegra.jpg",
        //     "productName":"高級黑糖/深色紅糖",
        //     "productDescription":"Azúcar Negra",
        //     "unit":"kg",
        //     "unitPrice":185,
        //     "discountUnit":5,
        //     "discountPrice":850,
        //     "category":"azucares",
        //     "disponible":true
        // },
        // {
        //     "id": 12,
        //     "productImage":"azucarMascabo.jpg",
        //     "productName":"高級紅糖",
        //     "productDescription":"Azúcar Mascabo",
        //     "unit":"kg",
        //     "unitPrice":210,
        //     "discountUnit":5,
        //     "discountPrice":950,
        //     "category":"azucares",
        //     "disponible":true
        // },
        // {
        //     "id": 13,
        //     "productImage":"sesamoNegro.jpg",
        //     "productName":"黑芝麻",
        //     "productDescription":"Sésamo Negro",
        //     "unit":"kg",
        //     "unitPrice":700,
        //     "discountUnit":2,
        //     "discountPrice":1300,
        //     "category":"sesamos",
        //     "disponible":true
        // },
        // {
        //     "id": 14,
        //     "productImage":"fideoDeArrozFinoNatural200.jpg",
        //     "productName":"原味細新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Fino Natural 200g",
        //     "unit":"包",
        //     "unitPrice":160,
        //     "discountUnit":15,
        //     "discountPrice":1800,
        //     "discountUnit2":30,
        //     "discountPrice2":3150,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 15,
        //     "productImage":"fideoDeArrozGruesoNatural200.jpg",
        //     "productName":"原味粗新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Fino Natural 200g",
        //     "unit":"包",
        //     "unitPrice":160,
        //     "discountUnit":15,
        //     "discountPrice":1800,
        //     "discountUnit2":30,
        //     "discountPrice2":3150,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 16,
        //     "productImage":"fideoDeArrozFinoEspinaca200.jpg",
        //     "productName":"菠菜細新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Fino Espinaca 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 17,
        //     "productImage":"fideoDeArrozFinoMorron200.jpg",
        //     "productName":"紅椒細新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Fino Morron 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 18,
        //     "productImage":"fideoDeArrozFinoZanahoria200.jpg",
        //     "productName":"紅蘿蔔細新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Fino Zanahoria 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 19,
        //     "productImage":"fideoDeArrozGruesoEspinaca200.jpg",
        //     "productName":"菠菜粗新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Grueso Espinaca 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 20,
        //     "productImage":"fideoDeArrozGruesoMorron200.jpg",
        //     "productName":"紅椒粗新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Grueso Morron 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 21,
        //     "productImage":"fideoDeArrozGruesoZanahoria200.jpg",
        //     "productName":"紅蘿蔔粗新竹米粉 200g",
        //     "productDescription":"Fideo de Arroz Grueso Zanahoria 200g",
        //     "unit":"包",
        //     "unitPrice":180,
        //     "discountUnit":15,
        //     "discountPrice":1950,
        //     "discountUnit2":30,
        //     "discountPrice2":3540,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //     "id": 22,
        //     "productImage":"fideoDeArroz200x60.jpg",
        //     "productName":"調味新竹米粉 200g x 60包",
        //     "productDescription":"Fideo de Arroz Saborizado 200g x 60 Paquetes",
        //     "unit":"箱",
        //     "unitPrice":6990,
        //     "category":"fideoDeArroz",
        //     "disponible":true
        // },
        // {
        //   "id": 501,
        //   "productName": "耆盛 十全大补汤",
        //   "productDescription": "MIX DE HIERBAS CHINAS PARA SOPA 100G ",
        //   "productImage": "mixDeHierbasChinaParaSopa.jpg",
        //   "unit": "包",
        //   "unitPrice": 870,
        //   "category": "e-condimento",
        //   "disponible": false
        // },
        // {
        //   "id": 502,
        //   "productName": "大山合 百茹精调味料",
        //   "productDescription": "ESENCIA DE HONGOS 100G",
        //   "productImage": "esenciaDeHongo.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 255,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 503,
        //   "productName": "大山合 百菇高汤精",
        //   "productDescription": "CALDO DE HONGOS EN POLVO 227G",
        //   "productImage": "caldoDeHongoEnPolvo.jpg",
        //   "unit": "包",
        //   "unitPrice": 405,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 504,
        //   "productName": "塞翁福 小黄米",
        //   "productDescription": "MIJO 400G",
        //   "productImage": "mijo.jpg",
        //   "unit": "包",
        //   "unitPrice": 415,
        //   "category": "e-legumbres",
        //   "disponible": true
        // },
        // {
        //   "id": 505,
        //   "productName": "水煮鱼调味",
        //   "productDescription": "CONDIMENTO PICANTE PARA PESCADO 165G",
        //   "productImage": "condimentoPicanteParaPescado.jpg",
        //   "unit": "包",
        //   "unitPrice": 300,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 506,
        //   "productName": "味精",
        //   "productDescription": "AJINOMOTO SABOR UMAMI",
        //   "productImage": "ajinomotoUmami.jpg",
        //   "unit": "包",
        //   "unitPrice": 985,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 507,
        //   "productName": "油葱酥",
        //   "productDescription": "ECHALOTE FRITO 600G",
        //   "productImage": "echaloteFrito.jpg",
        //   "unit": "包",
        //   "unitPrice": 1030,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 508,
        //   "productName": "香鮮調味料",
        //   "productDescription": "Soup Base 454G",
        //   "productImage": "soupBase.jpg",
        //   "unit": "包",
        //   "unitPrice": 605,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 509,
        //   "productName": "桂林湯粉調味料",
        //   "productDescription": "Condimentos Guillin 454G",
        //   "productImage": "condGuillin.jpg",
        //   "unit": "包",
        //   "unitPrice": 605,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 510,
        //   "productName": "耆盛 药炖排骨汤",
        //   "productDescription": "MIX DE HIERBAS CHINAS PARA SOPA DE COSTILLAS 100G",
        //   "productImage": "mixDeHiebrasChinasParaSopaDeCostillas.jpg",
        //   "unit": "包",
        //   "unitPrice": 870,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 511,
        //   "productName": "高湯精調味料",
        //   "productDescription": "caldoDePolloGranulado 454G",
        //   "productImage": "caldoDePolloGranulado.pjg",
        //   "unit": "包",
        //   "unitPrice": 980,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 512,
        //   "productName": "清燉排骨蹄子湯料",
        //   "productDescription": "CONDIMENTO PARA SOPA 108G",
        //   "productImage": "mezclasEspecias.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 513,
        //   "productName": " 即食阳江豆豉 (葱香风味)",
        //   "productDescription": "PASTA A BASE DE POROTO (SABOR CEBOLLA) 210G",
        //   "productImage": "pastaAbaseDePorotoCebolla.jpg",
        //   "unit": "罐",
        //   "unitPrice": 510,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 514,
        //   "productName": "即食阳江豆豉（蒜蓉风味）",
        //   "productDescription": "PASTA A BASE DE POROTO (SABOR POROTO) 210G ",
        //   "productImage": "pastaAbaseDePoroto.jpg",
        //   "unit": "罐",
        //   "unitPrice": 510,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 515,
        //   "productName": "即食阳江豆豉（姜香风味)",
        //   "productDescription": "PASTA A BASE DE POROTO (SABOR JENGIBRE) 210G",
        //   "productImage": "pastaAbaseDePorotoJengibre.jpg",
        //   "unit": "罐",
        //   "unitPrice": 510,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 516,
        //   "productName": "塞翁福 黑米",
        //   "productDescription": "ARROZ NEGRO PEGAJOSO 400G",
        //   "productImage": "arrozNegro.jpg",
        //   "unit": "包",
        //   "unitPrice": 580,
        //   "category": "e-legumbres",
        //   "disponible": true
        // },
        // {
        //   "id": 517,
        //   "productName": "葛根炖鸡鸭排骨汤料",
        //   "productDescription": "CONDIMENTO PARA POLLO, PATO Y CERDO 108G",
        //   "productImage": "condimentoParaPolloPatoCerdo.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 518,
        //   "productName": "老坛酸菜鱼调料",
        //   "productDescription": "PICKLE DE REPOLLO PARA SOPA 320G",
        //   "productImage": "pickleDeRepolloParaSopa.jpg",
        //   "unit": "包",
        //   "unitPrice": 325,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 519,
        //   "productName": "鲜味鸡粉 200G",
        //   "productDescription": "CALDO DE POLLO 200G",
        //   "productImage": "caldoDePollo200g.jpg",
        //   "unit": "包",
        //   "unitPrice": 335,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 520,
        //   "productName": "鲜味鸡粉 450G",
        //   "productDescription": "CALDO DE POLLO 450G",
        //   "productImage": "caldoDePollo450g.jpg",
        //   "unit": "包",
        //   "unitPrice": 645,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 521,
        //   "productName": "鲜味鸡粉 900G",
        //   "productDescription": "CALDO DE POLLO 900G",
        //   "productImage": "caldoDePollo900g.jpg",
        //   "unit": "包",
        //   "unitPrice": 1260,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 522,
        //   "productName": "牛頭牌雞粉",
        //   "productDescription": "Chicken Powder 1KG",
        //   "productImage": "chikenPowder.jpg",
        //   "unit": "罐",
        //   "unitPrice": 1900,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 523,
        //   "productName": "回锅肉调料",
        //   "productDescription": "CONDIMENTO PARA CARNE FRITA 150G",
        //   "productImage": "condimentoParaCarneFrita.jpg",
        //   "unit": "包",
        //   "unitPrice": 265,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 524,
        //   "productName": "四季煲中宝清炖料",
        //   "productDescription": "CONDIMENTO PARA CARNES 108G",
        //   "productImage": "condimentoParaCarnes.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 525,
        //   "productName": "油蔥酥 (財)",
        //   "productDescription": "ECHALOTE FRITO 200 GR",
        //   "productImage": "echaloteFrito200g.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 526,
        //   "productName": "麻辣酸菜鱼调料",
        //   "productDescription": "PICKLE DE VEGETALES PARA SOPA  320G",
        //   "productImage": "pickleDeVegetalesParaSopa.jpg",
        //   "unit": "包",
        //   "unitPrice": 320,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 527,
        //   "productName": "厨邦鸡精",
        //   "productDescription": "CALDO DE POLLO 1 KG",
        //   "productImage": "caldoDePollo1kg.jpg",
        //   "unit": "罐",
        //   "unitPrice": 1600,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 528,
        //   "productName": "泰國香米",
        //   "productDescription": "ARROZ JAZMÍN TAILANDÉS  1KG",
        //   "productImage": "arrozJazminTailandes.jpg",
        //   "unit": "包",
        //   "unitPrice": 770,
        //   "category": "e-legumbres",
        //   "disponible": true
        // },
        // {
        //   "id": 529,
        //   "productName": "水煮肉片调料",
        //   "productDescription": "CONDIMENTO PARA CARNE CON ACEITE DE CHILI  150G",
        //   "productImage": "condimentoParaCarneConAceiteDeChili.jpg",
        //   "unit": "包",
        //   "unitPrice": 265,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 530,
        //   "productName": "药膳火锅底料",
        //   "productDescription": "BASE PARA SOPA 200G",
        //   "productImage": "baseParaSopa.jpg",
        //   "unit": "包",
        //   "unitPrice": 385,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 531,
        //   "productName": "胖子重慶火鍋底料",
        //   "productDescription": "BASE PARA SOPA HOT POT 150G",
        //   "productImage": "baseParaSopaHotPot.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 532,
        //   "productName": "小肥羊 火锅底料(清汤)",
        //   "productDescription": "BASE PARA SOPA 160G",
        //   "productImage": "baseParaSopa160g.jpg",
        //   "unit": "包",
        //   "unitPrice": 450,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 533,
        //   "productName": "小肥羊 火锅底料(辣汤)",
        //   "productDescription": "BASE PARA SOPA PICANTE 160G",
        //   "productImage": "baseParaSopaPicante.jpg",
        //   "unit": "包",
        //   "unitPrice": 450,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 534,
        //   "productName": "桂皮",
        //   "productDescription": "CANELA EN RAMA 50G",
        //   "productImage": "canelaEnRama.jpg",
        //   "unit": "包",
        //   "unitPrice": 140,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 535,
        //   "productName": "旺旺 煎豆子",
        //   "productDescription": "Arvejas Crocantes 150 G",
        //   "productImage": "arvejasCrocantes150Gr.jpg",
        //   "unit": "包",
        //   "unitPrice": 690,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 536,
        //   "productName": "小熊果冻",
        //   "productDescription": "Alcancía De Oso Con Gelatinas Frutales 165G",
        //   "productImage": "alcancíaDeOsoConGelatinasFrutales165G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 390,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 537,
        //   "productName": "盛香珍香辣青豆",
        //   "productDescription": "Arvejas Crocantes Picantes 240G",
        //   "productImage": "arvejasCrocantesPicantes240Gr.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 538,
        //   "productName": "盛香珍椒麻青豆花生",
        //   "productDescription": "Arvejas Crocantes Picantes Con Maní 130 G",
        //   "productImage": "arvejasCrocantesPicantesConManí130G.jpg",
        //   "unit": "包",
        //   "unitPrice": 460,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 539,
        //   "productName": "盛香珍红配绿 麻辣青豆",
        //   "productDescription": "Arvejas Crocantes Ultra Picantes 220 G",
        //   "productImage": "arvejasCrocantesUltraPicantes220G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 540,
        //   "productName": "汽车综合果冻",
        //   "productDescription": "Auto Con Gelatinas Frutales Sabores Surtidos 1650 G",
        //   "productImage": "autoConGelatinasFrutalesSaboresSurtidos1650G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 1300,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 541,
        //   "productName": "御食园 甘栗",
        //   "productDescription": "Avellanas Tostadas 100 G",
        //   "productImage": "avellanasTostadas100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 500,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 542,
        //   "productName": "鳳梨酥 奶素",
        //   "productDescription": "Bizcochitos Rellenos De Ananá 200 G",
        //   "productImage": "bizcochitosRellenosDeAnaná200G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 543,
        //   "productName": "蓝莓酥 奶素",
        //   "productDescription": "Bizcochitos Rellenos De Arandano 200 G",
        //   "productImage": "bizcochitosRellenosDeArandano200G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 544,
        //   "productName": "芒果酥 奶素",
        //   "productDescription": "Bizcochitos Rellenos De Mango 200 G",
        //   "productImage": "bizcochitosRellenosDeMango200G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 545,
        //   "productName": "生果実软糖 葡萄",
        //   "productDescription": "Bolitas De Caramelos Hi- Chew Sabor Uva 35 G",
        //   "productImage": "bolitasDeCaramelosHi-ChewSaborUva35G.jpg",
        //   "unit": "包",
        //   "unitPrice": 175,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 546,
        //   "productName": "综合果冻",
        //   "productDescription": "Bolsa De Gelatinas Sabores Surtidos 50 Piezas 825 G",
        //   "productImage": "bolsaDeGelatinasSaboresSurtidos50Piezas825G.jpg",
        //   "unit": "包",
        //   "unitPrice": 420,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 547,
        //   "productName": "馋大嘴 香卤豆干",
        //   "productDescription": "Brochetas De Carne Seca 90 G",
        //   "productImage": "brochetasDeCarneSeca90G.jpg",
        //   "unit": "包",
        //   "unitPrice": 300,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 548,
        //   "productName": "馋大嘴 素羊肉串",
        //   "productDescription": "Brochetas De Carne Vegetariana 90 G",
        //   "productImage": "brochetasDeCarneVegetariana90G.jpg",
        //   "unit": "包",
        //   "unitPrice": 300,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 549,
        //   "productName": "同享情人梅",
        //   "productDescription": "Caramelo De Ciruela 70 G",
        //   "productImage": "carameloDeCiruela70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 225,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 550,
        //   "productName": "森永 多樂福水果糖",
        //   "productDescription": "Caramelos Duros Sabores Surtidos 180 G",
        //   "productImage": "caramelosDurosSaboresSurtidos180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 525,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 551,
        //   "productName": "知心水果软糖 (柠檬风味)",
        //   "productDescription": "Caramelos Masticables De Limón Just Chew 100 G",
        //   "productImage": "caramelosMasticablesDeLimónJustChew100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 552,
        //   "productName": "知心水果软糖 (葡萄风味)",
        //   "productDescription": "Caramelos Masticables De Uva Just Chew 100 G",
        //   "productImage": "caramelosMasticablesDeUvaJustChew100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 553,
        //   "productName": "知心水果软糖 (葡萄, 苹果 和 荔枝味)",
        //   "productDescription": "Caramelos Masticables De Uva, Manzana Verde Y Lychee Just Chew 100 G",
        //   "productImage": "caramelosMasticablesDeUva,ManzanaVerdeYLycheeJustChew100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 554,
        //   "productName": "森永 嗨啾軟糖袋裝 ( 熱帶水果口: 芒果 / 香蕉 / 哈密瓜)",
        //   "productDescription": "Caramelos Masticables HiChew 110 G",
        //   "productImage": "caramelosMasticablesHiChew110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 555,
        //   "productName": "森永 嗨啾軟糖袋裝 ( 乳酸多/ 草莓多 / 橘子 口味)",
        //   "productDescription": "Caramelos Masticables Hichew Sabor Yogurt De Frutilla Y Naranja 110 G",
        //   "productImage": "caramelosMasticablesHichewSaborYogurtDeFrutillaYNaranja110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 556,
        //   "productName": "森永牛奶软糖",
        //   "productDescription": "Caramelos Masticables Morinaga Sabor Leche",
        //   "productImage": "caramelosMasticablesMorinagaSaborLeche.jpg",
        //   "unit": "包",
        //   "unitPrice": 105,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 557,
        //   "productName": "森永牛奶巧克力软糖",
        //   "productDescription": "Caramelos Masticables Morinaga Sabor Té Con Leche",
        //   "productImage": "caramelosMasticablesMorinagaSaborTéConLeche.jpg",
        //   "unit": "包",
        //   "unitPrice": 105,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 558,
        //   "productName": "知心水果软糖 (草莓风味)",
        //   "productDescription": "Caramelos Masticables Sabor Frutilla Just Chew 100 G",
        //   "productImage": "caramelosMasticablesSaborFrutillaJustChew100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 559,
        //   "productName": "奥赛 山楂果肉软条",
        //   "productDescription": "Caramelos OSay De Ciruela Versión Minions 180 G",
        //   "productImage": "caramelosOSayDeCiruelaVersiónMinions180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 470,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 560,
        //   "productName": "金安记 川味麻辣牛肉乾",
        //   "productDescription": "Carne Seca Sabor Picante 45 G",
        //   "productImage": "carneSecaSaborPicante45G.jpg",
        //   "unit": "包",
        //   "unitPrice": 540,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 561,
        //   "productName": "香蕉芯片",
        //   "productDescription": "Chips De Banana 50 G",
        //   "productImage": "chipsDeBanana50G.jpg",
        //   "unit": "包",
        //   "unitPrice": 450,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 562,
        //   "productName": "金鲤挢 香蕉片",
        //   "productDescription": "Chips De Banana 72 G",
        //   "productImage": "chipsDeBanana72G.jpg",
        //   "unit": "包",
        //   "unitPrice": 170,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 563,
        //   "productName": "椰子芯片",
        //   "productDescription": "Chips De Coco 40 G",
        //   "productImage": "chipsDeCoco40G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 564,
        //   "productName": "赛园 酸甜梅",
        //   "productDescription": "Ciruela Agridulce Sai Yuan",
        //   "productImage": "ciruelaAgridulceSaiYuan.jpg",
        //   "unit": "包",
        //   "unitPrice": 290,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 565,
        //   "productName": "美式西梅",
        //   "productDescription": "Ciruela En Conserva 100 G",
        //   "productImage": "ciruelaEnConserva100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 566,
        //   "productName": "广澳梅",
        //   "productDescription": "Ciruela En Conserva 132 G",
        //   "productImage": "ciruelaEnConserva132G.jpg",
        //   "unit": "包",
        //   "unitPrice": 345,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 567,
        //   "productName": "精选陈皮梅（李子制品）",
        //   "productDescription": "Ciruela En Conserva 180 G",
        //   "productImage": "ciruelaEnConserva180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 415,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 568,
        //   "productName": "长思 阿胶贡枣",
        //   "productDescription": "Ciruelas En Conserva",
        //   "productImage": "ciruelasEnConserva.jpg",
        //   "unit": "包",
        //   "unitPrice": 485,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 569,
        //   "productName": "半话梅",
        //   "productDescription": "Ciruelas En Conserva 110 G",
        //   "productImage": "ciruelasEnConserva110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 260,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 570,
        //   "productName": "冰糖杨梅",
        //   "productDescription": "Ciruelas En Conserva 120 G",
        //   "productImage": "ciruelasEnConserva120G.jpg",
        //   "unit": "包",
        //   "unitPrice": 225,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 571,
        //   "productName": "妙酸奶梅（李子制品）",
        //   "productDescription": "Ciruelas En Conserva 130 G",
        //   "productImage": "ciruelasEnConserva130G.jpg",
        //   "unit": "包",
        //   "unitPrice": 225,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 572,
        //   "productName": "阿胶水晶蜜枣 食养主义",
        //   "productDescription": "Ciruelas En Conserva 227 G",
        //   "productImage": "ciruelasEnConserva227G.jpg",
        //   "unit": "包",
        //   "unitPrice": 485,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 573,
        //   "productName": "硬蜜枣 食养主义",
        //   "productDescription": "Ciruelas En Conserva 400 G",
        //   "productImage": "ciruelasEnConserva400G.jpg",
        //   "unit": "包",
        //   "unitPrice": 465,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 574,
        //   "productName": "同享 九制乌梅",
        //   "productDescription": "Ciruelas En Conserva 75 G",
        //   "productImage": "ciruelasEnConserva75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 575,
        //   "productName": "赛园 西梅",
        //   "productDescription": "Ciruelas En Conserva Prune 110 G",
        //   "productImage": "ciruelasEnConservaPrune110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 290,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 576,
        //   "productName": "赛园 台式香梅",
        //   "productDescription": "Ciruelas En Conserva Salyuan 110 G",
        //   "productImage": "ciruelasEnConservaSalyuan110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 290,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 577,
        //   "productName": "甜香话梅",
        //   "productDescription": "Ciruelas Hua En Conserva 75 G",
        //   "productImage": "ciruelasHuaEnConserva75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 225,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 578,
        //   "productName": "同享 西梅",
        //   "productDescription": "Ciruelas Xi En Conserva 75 G",
        //   "productImage": "ciruelasXiEnConserva75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 579,
        //   "productName": "同享 九制杨梅",
        //   "productDescription": "Ciruelas Yan En Conserva 75 G",
        //   "productImage": "ciruelasYanEnConserva75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 580,
        //   "productName": "义美 芝麻蛋卷",
        //   "productDescription": "Cubanitos A Base De Huevo Con Semillas De Sésamo 60 G",
        //   "productImage": "cubanitosABaseDeHuevoConSemillasDeSésamo60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 581,
        //   "productName": "旺旺夹心卷黑白配香草味",
        //   "productDescription": "Cubanitos Rellenos De Crema Wantwant 60 G",
        //   "productImage": "cubanitosRellenosDeCremaWantwant60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 160,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 582,
        //   "productName": "福 无核金丝枣",
        //   "productDescription": "Dátiles 227 G",
        //   "productImage": "dátiles227G.jpg",
        //   "unit": "包",
        //   "unitPrice": 430,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 583,
        //   "productName": "大红枣（调理用）",
        //   "productDescription": "Dátiles 300 G",
        //   "productImage": "dátiles300G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1060,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 584,
        //   "productName": "福 无核金丝枣",
        //   "productDescription": "Dátiles 454 G",
        //   "productImage": "dátiles454G.jpg",
        //   "unit": "包",
        //   "unitPrice": 700,
        //   "category": "e-condimento",
        //   "disponible": false
        // },
        // {
        //   "id": 585,
        //   "productName": "麻粩",
        //   "productDescription": "Galletas Crocantes Con Sésamo 160 G",
        //   "productImage": "galletasCrocantesConSésamo160G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 586,
        //   "productName": "旺旺 厚烧海苔米饼",
        //   "productDescription": "Galletas De Arroz Con Algas 102 G",
        //   "productImage": "galletasDeArrozConAlgas102G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 587,
        //   "productName": "海苔米制饼干",
        //   "productDescription": "Galletas De Arroz Con Algas 68 G",
        //   "productImage": "galletasDeArrozConAlgas68G.jpg",
        //   "unit": "包",
        //   "unitPrice": 99,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 588,
        //   "productName": "徐福记 沙琪码 (香酥 芝麻味)",
        //   "productDescription": "Galletas De Arroz Con Semillas De Sésamo 320 G",
        //   "productImage": "galletasDeArrozConSemillasDeSésamo320G.jpg",
        //   "unit": "包",
        //   "unitPrice": 500,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 589,
        //   "productName": "米制饼干 螃蟹咖喱口味",
        //   "productDescription": "Galletas De Arroz Sabor Cangrejo Y Curry 68 G",
        //   "productImage": "galletasDeArrozSaborCangrejoYCurry68G.jpg",
        //   "unit": "包",
        //   "unitPrice": 99,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 590,
        //   "productName": "米制饼干 椰子口味",
        //   "productDescription": "Galletas De Arroz Sabor Coco 68 G",
        //   "productImage": "galletasDeArrozSaborCoco68G.jpg",
        //   "unit": "包",
        //   "unitPrice": 99,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 591,
        //   "productName": "米制饼干 酸辣口味",
        //   "productDescription": "Galletas De Arroz Sabor Tom Yum 68 G",
        //   "productImage": "galletasDeArrozSaborTomYum68G.jpg",
        //   "unit": "包",
        //   "unitPrice": 99,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 592,
        //   "productName": "旺旺 仙貝",
        //   "productDescription": "Galletas De Arroz Senbei Con Salsa De Soja 520 G",
        //   "productImage": "galletasDeArrozSenbeiConSalsaDeSoja520G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1200,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 593,
        //   "productName": "旺旺 仙貝 小包",
        //   "productDescription": "Galletas De Arroz Senbei Con Salsa De Soja 92 G",
        //   "productImage": "galletasDeArrozSenbeiConSalsaDeSoja92G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 594,
        //   "productName": "旺旺 大雪饼",
        //   "productDescription": "Galletas De Arroz Shelly Senbei Espolvoreadas Con Azúcar 122 G",
        //   "productImage": "galletasDeArrozShellySenbeiEspolvoreadasConAzúcar122G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 595,
        //   "productName": "义美 小泡芙 (香草巧克力)",
        //   "productDescription": "Galletitas De Chocolate Rellenas De Crema Vainilla 57 G",
        //   "productImage": "galletitasDeChocolateRellenasDeCremaVainilla57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 596,
        //   "productName": "义美 小泡芙 (巧克力)",
        //   "productDescription": "Galletitas Rellenas De Chocolate 57 G",
        //   "productImage": "galletitasRellenasDeChocolate57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 597,
        //   "productName": "义美 小泡芙 (牛奶)",
        //   "productDescription": "Galletitas Rellenas De Crema Sabor Leche 57 G",
        //   "productImage": "galletitasRellenasDeCremaSaborLeche57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 195,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 598,
        //   "productName": "旺旺小馒头",
        //   "productDescription": "Galletitas Want-Want Para Bebés 105 G",
        //   "productImage": "galletitasWant-WantParaBebés105G.jpg",
        //   "unit": "包",
        //   "unitPrice": 315,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 599,
        //   "productName": "旺旺小馒头 罐装",
        //   "productDescription": "Galletitas Want-Want Para Bebés 210 G",
        //   "productImage": "galletitasWant-WantParaBebés210G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 820,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 600,
        //   "productName": "椰子果冻 桃子口味",
        //   "productDescription": "Gelatina Con Nata De Coco Sabor Durazno 150 G",
        //   "productImage": "gelatinaConNataDeCocoSaborDurazno150G.jpg",
        //   "unit": "包",
        //   "unitPrice": 80,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 601,
        //   "productName": "仙草冻",
        //   "productDescription": "Gelatina De Hierbas En Conserva 255 G",
        //   "productImage": "gelatinaDeHierbasEnConserva255G.jpg",
        //   "unit": "包",
        //   "unitPrice": 220,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 602,
        //   "productName": "義美蒟蒻寒天果凍（荔枝+鳳梨）",
        //   "productDescription": "Gelatinas Sabor Ananá Y Lychee Con Konjac 345 G",
        //   "productImage": "gelatinasSaborAnanáYLycheeConKonjac345G.jpg",
        //   "unit": "包",
        //   "unitPrice": 390,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 603,
        //   "productName": "综合果冻 (荔枝, 蘋果,葡萄味)",
        //   "productDescription": "Gelatinas Sabores Surtidos Con Konjac 380 G",
        //   "productImage": "gelatinasSaboresSurtidosConKonjac380G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 604,
        //   "productName": "椰果蒟蒻果冻 (芒果,荔枝味",
        //   "productDescription": "Gelatinas Sabor Mango Y Lychee 318 G",
        //   "productImage": "gelatinasSaborMangoYLychee318G.jpg",
        //   "unit": "包",
        //   "unitPrice": 390,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 605,
        //   "productName": "义美 蒟蒻寒天 葡萄果冻",
        //   "productDescription": "Gelatinas Sabor Uva Con Konjac 380 G",
        //   "productImage": "gelatinasSaborUvaConKonjac380G.jpg",
        //   "unit": "包",
        //   "unitPrice": 390,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 606,
        //   "productName": "蒟蒻寒天果冻 (蒟蒻,葡萄味)",
        //   "productDescription": "Gelatinas Sabor Uva Y Manzana Con Konjac 345 G",
        //   "productImage": "gelatinasSaborUvaYManzanaConKonjac345G.jpg",
        //   "unit": "包",
        //   "unitPrice": 390,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 607,
        //   "productName": "盛香珍 蒟蒻椰果",
        //   "productDescription": "Gelatinas Surtidas 1.1 Kg",
        //   "productImage": "gelatinasSurtidas1.1Kg.jpg",
        //   "unit": "罐",
        //   "unitPrice": 930,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 608,
        //   "productName": "旺仔QQ 糖 (荔枝味)",
        //   "productDescription": "Gomitas Qq Sabor Lychee 70G",
        //   "productImage": "gomitasQqSaborLychee70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 130,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 609,
        //   "productName": "蟹黄味蚕豆",
        //   "productDescription": "Habas Con Sabor A Cangrejo 138 G",
        //   "productImage": "habasConSaborACangrejo138G.jpg",
        //   "unit": "包",
        //   "unitPrice": 315,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 610,
        //   "productName": "蚕豆酥",
        //   "productDescription": "Habas Fritas 165 G",
        //   "productImage": "habasFritas165G.jpg",
        //   "unit": "包",
        //   "unitPrice": 425,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 611,
        //   "productName": "翁财记 珍味鸭舌",
        //   "productDescription": "Lengua De Pato 52 G",
        //   "productImage": "lenguaDePato52G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1500,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 612,
        //   "productName": "糖水龙眼",
        //   "productDescription": "Longan En Almibar",
        //   "productImage": "longanEnAlmibar.jpg",
        //   "unit": "罐",
        //   "unitPrice": 495,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 613,
        //   "productName": "柠檬糖",
        //   "productDescription": "Lotte  Caramelo De Limón 17.5 G",
        //   "productImage": "lotteCarameloDeLimón17.5G.jpg",
        //   "unit": "包",
        //   "unitPrice": 180,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 614,
        //   "productName": "糖水荔枝",
        //   "productDescription": "Lychee En Almibar",
        //   "productImage": "lycheeEnAlmibar.jpg",
        //   "unit": "罐",
        //   "unitPrice": 300,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 615,
        //   "productName": "野川经典蛋黄派",
        //   "productDescription": "Magdalenas Rellenas De Crema 228 G",
        //   "productImage": "magdalenasRellenasDeCrema228G.jpg",
        //   "unit": "包",
        //   "unitPrice": 730,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 616,
        //   "productName": "芒果干",
        //   "productDescription": "Mango Disecado 100 G",
        //   "productImage": "mangoDisecado100G.jpg",
        //   "unit": "包",
        //   "unitPrice": 350,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 617,
        //   "productName": "向阳花 – 白晒花生",
        //   "productDescription": "Maní Con Cáscara 1000 G",
        //   "productImage": "maníConCáscara1000G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1200,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 618,
        //   "productName": "蒜香花生",
        //   "productDescription": "Maní Con Cáscara Sabor Ajo 208 G",
        //   "productImage": "maníConCáscaraSaborAjo208G.jpg",
        //   "unit": "包",
        //   "unitPrice": 210,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 619,
        //   "productName": "咸乾花生（原味）",
        //   "productDescription": "Maní Con Cáscara Sabor Original 208 G",
        //   "productImage": "maníConCáscaraSaborOriginal208G.jpg",
        //   "unit": "包",
        //   "unitPrice": 210,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 620,
        //   "productName": "甘源 多味花生",
        //   "productDescription": "Mani Crocante Saborizado 75 G",
        //   "productImage": "maniCrocanteSaborizado75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 621,
        //   "productName": "香辣花生",
        //   "productDescription": "Mani Crocante Sabor Picante 75 G",
        //   "productImage": "maniCrocanteSaborPicante75G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 622,
        //   "productName": "喜多多 什锦椰果",
        //   "productDescription": "Mix De Frutas Con Nata De Coco 370 G",
        //   "productImage": "mixDeFrutasConNataDeCoco370G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 290,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 623,
        //   "productName": "喜多多 什锦椰果",
        //   "productDescription": "Mix De Frutas Con Nata De Coco 850 G",
        //   "productImage": "mixDeFrutasConNataDeCoco850G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 530,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 624,
        //   "productName": "手造麻糬 – 芝麻",
        //   "productDescription": "Mochi Con Semillas De Sésamo 180 G",
        //   "productImage": "mochiConSemillasDeSésamo180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 420,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 625,
        //   "productName": "小书包综合果冻",
        //   "productDescription": "Mochila Con Gelatinas De Sabores Surtidos 742,5 G",
        //   "productImage": "mochilaConGelatinasDeSaboresSurtidos742,5G.jpg",
        //   "unit": "包",
        //   "unitPrice": 670,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 626,
        //   "productName": "手造麻糬 芋头",
        //   "productDescription": "Mochi Relleno Con Papañame 180 Gr",
        //   "productImage": "mochiRellenoConPapañame180Gr.jpg",
        //   "unit": "包",
        //   "unitPrice": 420,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 627,
        //   "productName": "手造麻糬 红豆",
        //   "productDescription": "Mochi Relleno Con Poroto Aduki 180 G",
        //   "productImage": "mochiRellenoConPorotoAduki180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 420,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 628,
        //   "productName": "奥赛 蜜桃山楂饼",
        //   "productDescription": "Pastillitas Minion Sabor Durazno 138 G",
        //   "productImage": "pastillitasMinionSaborDurazno138G.jpg",
        //   "unit": "包",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 629,
        //   "productName": "奥赛 草莓山楂饼",
        //   "productDescription": "Pastillitas Minion Sabor Frutilla 138 G",
        //   "productImage": "pastillitasMinionSaborFrutilla138G.jpg",
        //   "unit": "包",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 630,
        //   "productName": "奥赛 香橙山楂饼",
        //   "productDescription": "Pastillitas Minion Sabor Naranja 138 G",
        //   "productImage": "pastillitasMinionSaborNaranja138G.jpg",
        //   "unit": "包",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 631,
        //   "productName": "爱之味冲绳岛 黑八宝",
        //   "productDescription": "Postre A Base De Arroz 340 G",
        //   "productImage": "postreABaseDeArroz340G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 632,
        //   "productName": "爱之味珍珠圆",
        //   "productDescription": "Postre A Base De Perlas De Tapioca 260 G",
        //   "productImage": "postreABaseDePerlasDeTapioca260G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 185,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 633,
        //   "productName": "冰晶银耳玉露 素燕窝",
        //   "productDescription": "Postre Con Perlas Y Hongos 400 G",
        //   "productImage": "postreConPerlasYHongos400G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 500,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 634,
        //   "productName": "味丹味精",
        //   "productDescription": "AJINOMOTO VEDAN 500 GR.",
        //   "productImage": "ajinomotoVedan500g.jpg",
        //   "unit": "包",
        //   "unitPrice": 335,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 635,
        //   "productName": "牛头牌蒙古锅火锅汤低 ",
        //   "productDescription": "BASE PARA SOPA 45 GR.",
        //   "productImage": "baseParaSopa45g.jpg",
        //   "unit": "包",
        //   "unitPrice": 280,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 636,
        //   "productName": "蒜頭酥",
        //   "productDescription": "AJO FRITO 600 GR.",
        //   "productImage": "ajofrito.jpg",
        //   "unit": "包",
        //   "unitPrice": 1000,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 637,
        //   "productName": "耆盛 人参鸡炖料",
        //   "productDescription": "MIX DE HIERBAS PARA SOPA DE POLLO 100 GR. ",
        //   "productImage": "mixDeHierbasParaSopaDePollo100g.jpg",
        //   "unit": "包",
        //   "unitPrice": 870,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 638,
        //   "productName": "蒜頭酥",
        //   "productDescription": "AJO FRITO 120 GR.",
        //   "productImage": "ajofrito120g.jpg",
        //   "unit": "包",
        //   "unitPrice": 430,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 639,
        //   "productName": "胖子重慶麻辣魚",
        //   "productDescription": "CONDIMETO PARA PESCADO 150 GR.",
        //   "productImage": "condimentoParaPescado150g.jpeg",
        //   "unit": "包",
        //   "unitPrice": 390,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 640,
        //   "productName": "水煮鱼佐料",
        //   "productDescription": "CONDIMENTO PICANTE PARA PESCADO 180 GR.",
        //   "productImage": "condimentoParaPescado180g.jpg",
        //   "unit": "包",
        //   "unitPrice": 370,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 641,
        //   "productName": "酸菜鱼佐料",
        //   "productDescription": "PICKLE DE REPOLLO PARA PESCADO 180 GR.",
        //   "productImage": "pickleDeRepolloParaPescado180g.jpg",
        //   "unit": "包",
        //   "unitPrice": 230,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 642,
        //   "productName": "魚香肉絲調料",
        //   "productDescription": "CONDIMENTO PARA CARNE PICADA 150 GR.",
        //   "productImage": "condimentoParaCarnePicada150g.jpeg",
        //   "unit": "包",
        //   "unitPrice": 265,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 643,
        //   "productName": "水煮肉片调料",
        //   "productDescription": "CONDIMENTO PARA CARNE CON ACEITE DE CHILI 150 GR. ",
        //   "productImage": "condimentoParaCarneConAceiteDeChili50g.jpg",
        //   "unit": "包",
        //   "unitPrice": 265,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 644,
        //   "productName": "味丹味精",
        //   "productDescription": "AJINOMOTO VEDAN 400 GR.",
        //   "productImage": "ajinomotoVedan400g.jpg",
        //   "unit": "包",
        //   "unitPrice": 360,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 645,
        //   "productName": "浓香五香粉",
        //   "productDescription": "5 ESPECIAS EN POLVO 20 GR.",
        //   "productImage": "cincoEspeciasEnPolvo20g.jpg",
        //   "unit": "罐",
        //   "unitPrice": 295,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 646,
        //   "productName": "鲜厨 肉味王调味料",
        //   "productDescription": "ADEREZO PICANTE 180 GR. ",
        //   "productImage": "aderezoPicante180g.jpg",
        //   "unit": "包",
        //   "unitPrice": 165,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 647,
        //   "productName": "麻辣 小辣椒",
        //   "productDescription": "AJÍ CHILE MOLIDO 300 GR.",
        //   "productImage": "ajiChileMolido.jpg",
        //   "unit": "包",
        //   "unitPrice": 565,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 648,
        //   "productName": "宮保辣椒",
        //   "productDescription": "AJÍ DESHIDRATADO 600 GR.",
        //   "productImage": "ajiDeshidratado600g.jpg",
        //   "unit": "包",
        //   "unitPrice": 1300,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 649,
        //   "productName": "松井鸡心朝天椒",
        //   "productDescription": "AJÍ GRANULADO 300 GR. ",
        //   "productImage": "ajiGranulado300g.jpg",
        //   "unit": "包",
        //   "unitPrice": 565,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 650,
        //   "productName": "蒜頭酥",
        //   "productDescription": "AJO FRITO 150 GR. ",
        //   "productImage": "ajoFrito150g.jpg",
        //   "unit": "包",
        //   "unitPrice": 430,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 651,
        //   "productName": "台湾红豆汤",
        //   "productDescription": "Postre Con Poroto Aduki 400 G",
        //   "productImage": "postreConPorotoAduki400G.jpg",
        //   "unit": "包",
        //   "unitPrice": 500,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 652,
        //   "productName": "桂圓銀耳",
        //   "productDescription": "Postre De Hongos Blancos Fungus 260 G",
        //   "productImage": "postreDeHongosBlancosFungus260G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 160,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 653,
        //   "productName": "爱之味牛奶花生",
        //   "productDescription": "Postre De Maní Con Leche 340 G",
        //   "productImage": "postreDeManíConLeche340G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 230,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 654,
        //   "productName": "牛奶花生蛋白饮品",
        //   "productDescription": "Postre De Maní Con Leche 370G",
        //   "productImage": "postreDeManíConLeche370G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 655,
        //   "productName": "喜多多椰果王 小",
        //   "productDescription": "Postre De Nata De Coco 200 G",
        //   "productImage": "postreDeNataDeCoco200G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 656,
        //   "productName": "喜多多椰果王",
        //   "productDescription": "Postre De Nata De Coco 567 G",
        //   "productImage": "postreDeNataDeCoco567G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 430,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 657,
        //   "productName": "巧口 花生仁汤",
        //   "productDescription": "Postre Sopa De Maní 330 G",
        //   "productImage": "postreSopaDeManí330G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 658,
        //   "productName": "五谷杂粮 沙琪玛 (奶糖素)",
        //   "productDescription": "Sachima Bizcocho Con Cereales 227 G",
        //   "productImage": "sachimaBizcochoConCereales227G.jpg",
        //   "unit": "包",
        //   "unitPrice": 425,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 659,
        //   "productName": "山核桃味瓜子",
        //   "productDescription": "Semillas De Girasol 150 G",
        //   "productImage": "semillasDeGirasol150G.jpg",
        //   "unit": "包",
        //   "unitPrice": 210,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 660,
        //   "productName": "核味桃瓜子",
        //   "productDescription": "Semillas De Girasol Sabor Nuez Pecán 108 G",
        //   "productImage": "semillasDeGirasolSaborNuezPecán108G.jpg",
        //   "unit": "包",
        //   "unitPrice": 260,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 661,
        //   "productName": "甘草瓜子",
        //   "productDescription": "Semillas De Melón 450 G",
        //   "productImage": "semillasDeMelón450G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1200,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 662,
        //   "productName": " 酱油瓜子",
        //   "productDescription": "Semillas De Sandía Con Salsa De Soja 180 G",
        //   "productImage": "semillasDeSandíaConSalsaDeSoja180G.jpg",
        //   "unit": "包",
        //   "unitPrice": 550,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 663,
        //   "productName": "芥末青豆",
        //   "productDescription": "Snack Arvejas Crocantes Con Wasabi 240 G",
        //   "productImage": "snackArvejasCrocantesConWasabi240G.jpg",
        //   "unit": "包",
        //   "unitPrice": 615,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 664,
        //   "productName": "喜之郎 美好时光原味海苔",
        //   "productDescription": "Snack De Algas Con Jugo Cici 157 G",
        //   "productImage": "snackDeAlgasConJugoCici157G.jpg",
        //   "unit": "包",
        //   "unitPrice": 1800,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 665,
        //   "productName": "义美 海苔卷",
        //   "productDescription": "Snack De Algas Norimaki 60 G",
        //   "productImage": "snackDeAlgasNorimaki60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 425,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 666,
        //   "productName": "脆米酥 霸道辣味",
        //   "productDescription": "Snack De Arroz Picante 70 G",
        //   "productImage": "snackDeArrozPicante70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 230,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 667,
        //   "productName": "脆米酥 经典原味",
        //   "productDescription": "Snack De Arroz Sabor Salsa Teriyaki 70 G",
        //   "productImage": "snackDeArrozSaborSalsaTeriyaki70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 230,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 668,
        //   "productName": "牛肉味青豌豆",
        //   "productDescription": "Snack De Arvejas Crocantes Sabor Carne 60 G ",
        //   "productImage": "snackDeArvejasCrocantesSaborCarne60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 669,
        //   "productName": "蒜香味 青豌豆",
        //   "productDescription": "Snack De Arvejas Verdes Crocantes 60 G",
        //   "productImage": "snackDeArvejasVerdesCrocantes60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 670,
        //   "productName": "马努拉蟹饼 小",
        //   "productDescription": "Snack De Cangrejo Para Freir 200 G",
        //   "productImage": "snackDeCangrejoParaFreir200G.jpg",
        //   "unit": "包",
        //   "unitPrice": 430,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 671,
        //   "productName": "马努拉蟹饼 大",
        //   "productDescription": "Snack De Cangrejo Para Freir 500 G",
        //   "productImage": "snackDeCangrejoParaFreir500G.jpg",
        //   "unit": "包",
        //   "unitPrice": 975,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 672,
        //   "productName": "金安記-香辣豬肉乾   ",
        //   "productDescription": "Snack De Cerdo Seco Picante",
        //   "productImage": "snackDeCerdoSecoPicante.jpg",
        //   "unit": "包",
        //   "unitPrice": 540,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 673,
        //   "productName": "金安记 原味猪肉松",
        //   "productDescription": "Snack De Fibra De Soja 145 G",
        //   "productImage": "snackDeFibraDeSoja145G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 1200,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 674,
        //   "productName": "金安记 宝宝肉松",
        //   "productDescription": "Snack De Fibra De Soja Con Especias 145 G",
        //   "productImage": "snackDeFibraDeSojaConEspecias145G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 120,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 675,
        //   "productName": "五香味多味花生",
        //   "productDescription": "Snack De Habas Sabor Cinco Especias 60 G",
        //   "productImage": "snackDeHabasSaborCincoEspecias60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 676,
        //   "productName": "烤肉味兰花豆",
        //   "productDescription": "Snack De Habas Sabor Parrillada 60 G",
        //   "productImage": "snackDeHabasSaborParrillada60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 677,
        //   "productName": "香辣味多味花生",
        //   "productDescription": "Snack De Habas Sabor Picante 60 G",
        //   "productImage": "snackDeHabasSaborPicante60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 678,
        //   "productName": "彩色龙虾片",
        //   "productDescription": "Snack De Langostino Para Freir 2 Kg",
        //   "productImage": "snackDeLangostinoParaFreir2Kg.jpg",
        //   "unit": "包",
        //   "unitPrice": 1600,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 679,
        //   "productName": "五香味多味花生",
        //   "productDescription": "Snack De Maní Crocante & 5 Especias 60 G",
        //   "productImage": "snackDeManíCrocante&5Especias60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 680,
        //   "productName": "烤肉多味花生",
        //   "productDescription": "Snack De Maní Crocante Sabor Carne Asada 60 G",
        //   "productImage": "snackDeManíCrocanteSaborCarneAsada60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 681,
        //   "productName": "醬汁牛肉味多味花生",
        //   "productDescription": "Snack De Maní Crocante Sabor Carne De Res 60 G",
        //   "productImage": "snackDeManíCrocanteSaborCarneDeRes60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 682,
        //   "productName": "香辣味兰花豆",
        //   "productDescription": "Snack De Maní Picante & Crocante 60 G",
        //   "productImage": "snackDeManíPicante&Crocante60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 683,
        //   "productName": "黃飞紅麻辣花生",
        //   "productDescription": "Snack De Maní Picante 110 G",
        //   "productImage": "snackDeManíPicante110G.jpg",
        //   "unit": "包",
        //   "unitPrice": 325,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 684,
        //   "productName": "金安记 蜜汁猪肉乾",
        //   "productDescription": "Snack Fibra De Soja",
        //   "productImage": "snackFibraDeSoja.jpg",
        //   "unit": "包",
        //   "unitPrice": 540,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 685,
        //   "productName": "鲜虾条",
        //   "productDescription": "Snack Hanami Sabor Langostinos",
        //   "productImage": "snackHanamiSaborLangostinos.jpg",
        //   "unit": "包",
        //   "unitPrice": 110,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 686,
        //   "productName": "PK 脆点心面 日本蟹味棒",
        //   "productDescription": "Snack Palitos Sabor Cangrejo 168 G",
        //   "productImage": "snackPalitosSaborCangrejo168G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 687,
        //   "productName": "PK 脆点心面 碳烤鸡汁味",
        //   "productDescription": "Snack Palitos Saborizados 168 G",
        //   "productImage": "snackPalitosSaborizados168G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 688,
        //   "productName": "PK 脆点心面 泰国酱鳮味",
        //   "productDescription": "Snack Palitos Saborizados Con Arvejas 168 Gr",
        //   "productImage": "snackPalitosSaborizadosConArvejas168Gr.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 689,
        //   "productName": "可樂果原味",
        //   "productDescription": "Snack Pea Crackers Sabor Original 57 G",
        //   "productImage": "snackPeaCrackersSaborOriginal57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 250,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 690,
        //   "productName": "可乐果 九层塔",
        //   "productDescription": "Snack Sabor Albahaca 57 G",
        //   "productImage": "snackSaborAlbahaca57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 691,
        //   "productName": "浪味仙 – 名古屋味付海苔味",
        //   "productDescription": "Snack Sabor Alga Nori 86 G",
        //   "productImage": "snackSaborAlgaNori86G.jpg",
        //   "unit": "包",
        //   "unitPrice": 330,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 692,
        //   "productName": "可乐果海苔",
        //   "productDescription": "Snack Sabor Algas 57 G",
        //   "productImage": "snackSaborAlgas57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 693,
        //   "productName": "真魷味 （紅燒口味）",
        //   "productDescription": "Snack Sabor Calamar 60 G",
        //   "productImage": "snackSaborCalamar60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 185,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 694,
        //   "productName": "真魷味 非常香辣口味",
        //   "productDescription": "Snack Sabor Calamar Picante 60 G",
        //   "productImage": "snackSaborCalamarPicante60G.jpg",
        //   "unit": "包",
        //   "unitPrice": 185,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 695,
        //   "productName": "嗄嗄叫 蟳仔饼",
        //   "productDescription": "Snack Sabor Cangrejo 65 G",
        //   "productImage": "snackSaborCangrejo65G.jpg",
        //   "unit": "包",
        //   "unitPrice": 155,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 696,
        //   "productName": "帝王蟹造型餅",
        //   "productDescription": "Snack Sabor Cangrejo 70 G",
        //   "productImage": "snackSaborCangrejo70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 155,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 697,
        //   "productName": "泰国虾条",
        //   "productDescription": "Snack Sabor Langostino 68 G",
        //   "productImage": "snackSaborLangostino68G.jpg",
        //   "unit": "包",
        //   "unitPrice": 220,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 698,
        //   "productName": "可乐果 盐味",
        //   "productDescription": "Snack Sabor Pimienta Con Sal 57 G",
        //   "productImage": "snackSaborPimientaConSal57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 699,
        //   "productName": "嗄嗄叫 麦香鸡块风味饼",
        //   "productDescription": "Snack Sabor Pollo 70 G",
        //   "productImage": "snackSaborPollo70G.jpg",
        //   "unit": "包",
        //   "unitPrice": 725,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 700,
        //   "productName": "椒盐鸡汁",
        //   "productDescription": "Snack Sabor Pollo Frito Con Salpimienta 43 G",
        //   "productImage": "snackSaborPolloFritoConSalpimienta43G.jpg",
        //   "unit": "包",
        //   "unitPrice": 60,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 701,
        //   "productName": "浪味仙-义式浓郁起司味",
        //   "productDescription": "Snack Sabor Queso 86 G",
        //   "productImage": "snackSaborQueso86G.jpg",
        //   "unit": "包",
        //   "unitPrice": 325,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 702,
        //   "productName": "华元 咸蔬饼",
        //   "productDescription": "Snack Sabor Vegetal 55 G",
        //   "productImage": "snackSaborVegetal55G.jpg",
        //   "unit": "包",
        //   "unitPrice": 185,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 703,
        //   "productName": "可乐果 山葵 (哇沙米) 口味",
        //   "productDescription": "Snack Sabor Wasabi 57 G",
        //   "productImage": "snackSaborWasabi57G.jpg",
        //   "unit": "包",
        //   "unitPrice": 190,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 704,
        //   "productName": "银鹭八宝粥",
        //   "productDescription": "Sopa A Base De Arroz Con Legumbres 360 G",
        //   "productImage": "sopaABaseDeArrozConLegumbres360G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 200,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 705,
        //   "productName": "莎莎亚 椰香八宝",
        //   "productDescription": "Sopa A Base De Cereales Y Legumbres Con Sabor A Coco 340 G",
        //   "productImage": "sopaABaseDeCerealesYLegumbresConSaborACoco340G.jpg",
        //   "unit": "罐",
        //   "unitPrice": 220,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 706,
        //   "productName": "奥赛 果丹皮",
        //   "productDescription": "Sticks Minion Sabor Original Ciruela 160 G",
        //   "productImage": "sticksMinionSaborOriginalCiruela160G.jpg",
        //   "unit": "包",
        //   "unitPrice": 240,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 707,
        //   "productName": "福记 多层干(麻辣)",
        //   "productDescription": "Tofu Seco Picante 150 G",
        //   "productImage": "tofuSecoPicante150G.jpg",
        //   "unit": "包",
        //   "unitPrice": 620,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 708,
        //   "productName": "福记 多层干(三星葱)",
        //   "productDescription": "Tofu Seco Sabor Cebolla 150 G",
        //   "productImage": "tofuSecoSaborCebolla150G.jpg",
        //   "unit": "包",
        //   "unitPrice": 620,
        //   "category": "e-snack",
        //   "disponible": true
        // },
        // {
        //   "id": 709,
        //   "productName": "香蒜粒",
        //   "productDescription": "AJO GRANULADO 1 KG.",
        //   "productImage": "ajoGranulado1kg.jpg",
        //   "unit": "包",
        //   "unitPrice": 4040,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 710,
        //   "productName": "和興 カットわかめ",
        //   "productDescription": "ALGA WAKAME 100 GR.",
        //   "productImage": "algaWakame100g.jpg",
        //   "unit": "包",
        //   "unitPrice": 675,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 711,
        //   "productName": "小磨坊 精选八角粒",
        //   "productDescription": "ANÍS ESTRELLADO 10 GR. ",
        //   "productImage": "anisEstrellado10g.jpg",
        //   "unit": "包",
        //   "unitPrice": 150,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 712,
        //   "productName": "八角粒",
        //   "productDescription": "ANÍS ESTRELLADO 150 GR.",
        //   "productImage": "anisEstrellado150g.jpg",
        //   "unit": "包",
        //   "unitPrice": 1060,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 713,
        //   "productName": "小磨坊 大红八雏粒",
        //   "productDescription": "ANÍS ESTRELLADO TOMAX 500 GR.",
        //   "productImage": "anisEstrelladoTomax500g.jpg",
        //   "unit": "包",
        //   "unitPrice": 2200,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 714,
        //   "productName": "黑糖",
        //   "productDescription": "AZUCAR MORENA 300 GR.",
        //   "productImage": "azucarMorena300g.jpg",
        //   "unit": "包",
        //   "unitPrice": 260,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 715,
        //   "productName": "优质精制红糖",
        //   "productDescription": "AZÚCAR ROJA 400 GR.",
        //   "productImage": "azucarRoja400g.jpg",
        //   "unit": "包",
        //   "unitPrice": 410,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 716,
        //   "productName": "太古 大枣红糖",
        //   "productDescription": "AZUCAR RUBIA 300 GR.",
        //   "productImage": "azucarRubia300g.jpg",
        //   "unit": "包",
        //   "unitPrice": 600,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 717,
        //   "productName": "太古 姜汁红糖",
        //   "productDescription": "AZÚCAR RUBIA CON JENGIBRE 300 GR. ",
        //   "productImage": "azucarRubiaConJengibre300g.jpg",
        //   "unit": "包",
        //   "unitPrice": 600,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 718,
        //   "productName": "碳酸氫鈉",
        //   "productDescription": "BICARBONATO DE SODIO 280 GR.",
        //   "productImage": "bicarbonatoDeSodio280g.jpg",
        //   "unit": "包",
        //   "unitPrice": 260,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 719,
        //   "productName": "传香特级胡椒粉",
        //   "productDescription": "BOLSA DE PIMIENTA BLANCA 600 GR.",
        //   "productImage": "bolsaDePimientaBlanca600g.jpg",
        //   "unit": "包",
        //   "unitPrice": 800,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 720,
        //   "productName": "香辣椒盐粉",
        //   "productDescription": "BOLSA DE SALPIMIENTA 600 GR.",
        //   "productImage": "bolsaDeSalPimienta600g.jpg",
        //   "unit": "包",
        //   "unitPrice": 885,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 721,
        //   "productName": "金針葉",
        //   "productDescription": "BROTE DE BAMBÚ SECO 150 GR.",
        //   "productImage": "broteDeBambuSeco150g.jpg",
        //   "unit": "包",
        //   "unitPrice": 530,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 722,
        //   "productName": "蛤蜊汤块",
        //   "productDescription": "CALDO DE ALMEJA EN CUBO (X6)",
        //   "productImage": "caldoDeAlmejaEnCubo.jpg",
        //   "unit": "盒",
        //   "unitPrice": 250,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 723,
        //   "productName": "好鲜味 鸡精调味料",
        //   "productDescription": "CALDO DE POLLO 100 GR.",
        //   "productImage": "caldoDePollo100g.jpg",
        //   "unit": "包",
        //   "unitPrice": 85,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 724,
        //   "productName": "鲜味鸡粉",
        //   "productDescription": "CALDO DE POLLO 225 GR.",
        //   "productImage": "caldoDePollo225gEnLata.jpg",
        //   "unit": "罐",
        //   "unitPrice": 475,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 725,
        //   "productName": "好鲜味 鸡精调味料",
        //   "productDescription": "CALDO DE POLLO 454 GR.",
        //   "productImage": "caldoDePollo454g.jpg",
        //   "unit": "包",
        //   "unitPrice": 340,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 726,
        //   "productName": "鸡汤块",
        //   "productDescription": "CALDO DE POLLO EN CUBO (X6)",
        //   "productImage": "caldoDePolloEnCubo",
        //   "unit": "盒",
        //   "unitPrice": 310,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 727,
        //   "productName": "牛头牌 酸辣汤块",
        //   "productDescription": "CALDO EN CUBO SABOR TOM YUM 66 GR.",
        //   "productImage": "caldoEnCuboSaborTomYum66g.jpg",
        //   "unit": "盒",
        //   "unitPrice": 320,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 728,
        //   "productName": "肉桂粉",
        //   "productDescription": "CANELA CHINA 220 GR.",
        //   "productImage": "canelaChina220g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 720,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 729,
        //   "productName": "玉桂粉",
        //   "productDescription": "CANELA CHINA 453 GR.",
        //   "productImage": "canelaChina453g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 420,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 730,
        //   "productName": "向洋花 桂皮",
        //   "productDescription": "CANELA EN RAMA 500 GR. ",
        //   "productImage": "canelaEnRama500g.jpg",
        //   "unit": "包",
        //   "unitPrice": 540,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 731,
        //   "productName": "鸡心椒粉（辣椒粉）",
        //   "productDescription": "CHILI PEPPER 1 KG.",
        //   "productImage": "chiliPepper1kg.jpg",
        //   "unit": "包",
        //   "unitPrice": 5500,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 732,
        //   "productName": "香辣红辣椒",
        //   "productDescription": "CHILI PEPPER 25 GR. ",
        //   "productImage": "chiliPepper25g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 280,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 733,
        //   "productName": "小磨坊 红辣椒粉",
        //   "productDescription": "CHILI PEPPER 300 GR. ",
        //   "productImage": "chiliPepper300g.jpg",
        //   "unit": "包",
        //   "unitPrice": 780,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 734,
        //   "productName": "小磨坊 红辣椒粉",
        //   "productDescription": "CHILI PEPPER TOMAX 1 KG",
        //   "productImage": "chiliPepperTomax1kg.jpg",
        //   "unit": "包",
        //   "unitPrice": 2370,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 735,
        //   "productName": "辣椒粉",
        //   "productDescription": "CHILI ROJO 26 GR.",
        //   "productImage": "chiliRojo26g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 380,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 736,
        //   "productName": "濃縮雞汁",
        //   "productDescription": "CONCENTRADO DE POLLO 1000 GR.",
        //   "productImage": "concentradoDePollo1000g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 2870,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 737,
        //   "productName": "濃縮雞汁",
        //   "productDescription": "CONCENTRADO DE POLLO 300 GR. ",
        //   "productImage": "concentradoDePollo300g.jpg",
        //   "unit": "瓶",
        //   "unitPrice": 1020,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 738,
        //   "productName": "新奧尔良烤翅调料",
        //   "productDescription": "CONDIMENTO PARA ALITAS DE POLLO ESTILO NEW ORLEANS 35 GR.",
        //   "productImage": "condimentoParaAlitasDePollo.jpg",
        //   "unit": "包",
        //   "unitPrice": 200,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 739,
        //   "productName": "梅塔 糯米糟",
        //   "productDescription": "CONDIMENTO PARA ARROZ PAS.ZAO CAI 75 GR.",
        //   "productImage": "condimentoParaArrozPasZaoCai75g.jpg",
        //   "unit": "包",
        //   "unitPrice": 60,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 740,
        //   "productName": "鱼香肉丝调味料",
        //   "productDescription": "CONDIMENTO PARA CARNE PICADA 40 GR.",
        //   "productImage": "condimentoParaCarnePicada40g.jpg",
        //   "unit": "包",
        //   "unitPrice": 130,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 741,
        //   "productName": "排骨粉 调味料",
        //   "productDescription": "CONDIMENTO PARA COSTILLAS 180 GR.",
        //   "productImage": "condimentoParaCostillas180g.jpg",
        //   "unit": "包",
        //   "unitPrice": 295,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 742,
        //   "productName": "安记 排骨王调味料",
        //   "productDescription": "CONDIMENTO PARA COSTILLAS DE CERDO 40 GR. ",
        //   "productImage": "condimentoParaCostillasDeCerdo40g.jpg",
        //   "unit": "包",
        //   "unitPrice": 155,
        //   "category": "e-condimento",
        //   "disponible": true
        // },
        // {
        //   "id": 743,
        //   "productName": "桂林汤粉 调味料 (方便汤料)",
        //   "productDescription": "CONDIMENTO PARA FIDEOS DE ARROZ 454 GR.",
        //   "productImage": "condimentoParaFideosDeArroz454g.jpg",
        //   "unit": "包",
        //   "unitPrice": 605,
        //   "category": "e-condimento",
        //   "disponible": true
        // }

 ]

 products.forEach(function(obj) {
    db.collection("products").doc("productList").set({
        id: obj.id,
        productImage: obj.productImage,
        productName: obj.productName,
        productDescription: obj.productDescription,
        price1kg: obj.price1kg,
        discountKgs: obj.discountKgs,
        priceKgs: obj.priceKgs,
        unit: obj.unit,
        unitPrice: obj.unitPrice,
        discountUnit: obj.discountUnit,
        discountPrice: obj.discountPrice,
        discountUnit2: obj.discountUnit2,
        discountPrice2: obj.discountPrice2,
        category: obj.category

    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

