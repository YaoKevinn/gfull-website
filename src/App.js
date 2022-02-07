import React,  { Component } from 'react'
// import { productsData } from './products'
// import { productsData } from '/products.json'
import { db } from './firebase'
import Header from './Header/Header'
import Home from './Home/Home'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ContactIcon from './ContactIcon/ContactIcon'
import Product from './Product/Product'
import ContactForm from './ContactForm/ContactFrom'
import Footer from './Footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import MultiSelectTreeView from './MultiSelectTreeView/MultiSelectTreeView';
import Modal from './Product/Modal'
const productsData = require('../public/products.json');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        products:[],
        shoppingCart:[],
        totalPriceInCart:0,
        category:[{esp:"all", ch:"全部商品", prioridad:0},{esp:"promo", ch:"清仓特卖 Ofertas", prioridad:1},],
        currentCategory:"all",
        items: [],
        hasMore: true,
        index: 1,
        searchText:"",
      };
  }  

  componentDidMount() {
        // this.getProductsFromFirebase();
        this.getProductsFromJson();
  }

  getProductsFromFirebase = () => {
          db.collection("products").onSnapshot((querySnapshot) => {
          const docs = [...this.state.products];
          const category = [...this.state.category];
          querySnapshot.forEach((doc) => {
                //   if (doc.data().id < 535){
                    docs.push({...doc.data()});
                    const cat =  doc.data().category;
                    const categoryEsp = category.map(function(a){return a.esp})
                    if (!categoryEsp.includes(cat)){
                          switch (cat) {
                              case "frutasSecasPeladas":
                                  category.push({esp:cat, ch:"堅果類", prioridad:1});
                              break;
                              case "frutasDesecadas":
                                  category.push({esp:cat, ch:"乾果類", prioridad:1});
                              break;
                              case "porotos":
                                  category.push({esp:cat, ch:"干豆類", prioridad:1});
                              break;
                              case "azucares":
                                  category.push({esp:cat, ch:"糖類", prioridad:1});
                              break;  
                              case "sesamos":
                                  category.push({esp:cat, ch:"芝麻類", prioridad:1});
                              break;   
                              case "fideoDeArroz":
                                  category.push({esp:cat, ch:"米粉類", prioridad:1});
                              break;
                              case "e-condimento":
                                  category.push({esp:cat, ch:"代购-调味类", prioridad:2});
                              break;
                              case "e-legumbres":
                                  category.push({esp:cat, ch:"代购-谷物类", prioridad:2});
                              break;
                              case "e-snack":
                                  category.push({esp:cat, ch:"代购-点心零食类", prioridad:2});
                              break;                 
                              default:
                                  break;
                          }
                    }
                //   }
        });
        docs.sort(function(a,b){
            return a.id - b.id;
            // return a.category.localeCompare(b.category);
        })
        category.sort(function(a,b){
            return a.prioridad - b.prioridad;
            // return a.category.localeCompare(b.category);
        })
        this.setState({products:docs, category:category, items:docs.slice(0, 10), hasMore:true});
      });
  }

  getProductsFromJson = (allProducts) => {
        const docs = [...this.state.products];
        const category = [...this.state.category];
        productsData.products.forEach((doc) => {
              //   if (doc.data().id < 535){
                  docs.push({...doc});
                  const cat =  doc.category;
                  const categoryEsp = category.map(function(a){return a.esp})
                  if (!categoryEsp.includes(cat)){
                        switch (cat) {
                            case "frutasSecasPeladas":
                                category.push({esp:cat, ch:"坚果类 Frutos Secos", prioridad:2});
                            break;
                            case "frutasDesecadas":
                                category.push({esp:cat, ch:"干果类 Frutas Desecadas", prioridad:3});
                            break;
                            case "alimentoDesecado":
                                category.push({esp:cat, ch:"南北干货类 Alimento Desecado", prioridad:4});
                            break;
                            case "azucares":
                                category.push({esp:cat, ch:"糖类 Azúcar", prioridad:5});
                            break;  
                            case "semilla":
                                category.push({esp:cat, ch:"芝麻/籽类 Semillas", prioridad:6});
                            break;   
                            case "legumbres":
                                category.push({esp:cat, ch:"干豆类 Legumbres", prioridad:7});
                            break;
                            case "arroz":
                                category.push({esp:cat, ch:"米类 Arroz", prioridad:8});
                            break;
                            case "harina":
                                category.push({esp:cat, ch:"淀粉类 Harina/Fécula", prioridad:9});
                            break;
                            case "cuboDeCarne":
                                category.push({esp:cat, ch:"素肉类 Cubo De Carne", prioridad:10});
                            break;
                            case "aderezo":
                                category.push({esp:cat, ch:"调味/沾酱类 Condimento/Salsas/Aderezos", prioridad:11});
                            break;
                            case "especias":
                                category.push({esp:cat, ch:"干香料类 Especias", prioridad:11.5});
                            break;
                            case "aceitunas":
                                category.push({esp:cat, ch:"橄榄类 Aceitunas", prioridad:12});
                            break;
                            case "enlatado":
                                category.push({esp:cat, ch:"罐头类 Enlatados", prioridad:13});
                            break;
                            case "fideoDeArroz":
                                category.push({esp:cat, ch:"米粉类 Fideo De Arroz", prioridad:14});
                            break;
                            case "pasta":
                                category.push({esp:cat, ch:"面条类 Pastas", prioridad:15});
                            break;
                            case "Congelados":
                                category.push({esp:cat, ch:"冷冻类 Congelados", prioridad:16});
                            break;
                            case "postre":
                                category.push({esp:cat, ch:"甜点类 Postres", prioridad:17});
                            break;
                            case "snack":
                                category.push({esp:cat, ch:"饼干类 Snack", prioridad:18});
                            break;
                            case "e-condimento":
                                category.push({esp:cat, ch:"调味类/南北干货", prioridad:51});
                            break;
                            case "e-vinagre":
                                category.push({esp:cat, ch:"醋类", prioridad:52});
                            break;
                            case "e-aceite":
                                category.push({esp:cat, ch:"酱油/香油类", prioridad:53});
                            break;
                            case "e-pickles":
                                category.push({esp:cat, ch:"腌制酱菜类", prioridad:54});
                            break;
                            case "e-hierbaMedicinal":
                                category.push({esp:cat, ch:"中药材类", prioridad:55});
                            break; 
                            case "e-alga":
                                category.push({esp:cat, ch:"紫菜/海带类", prioridad:56});
                            break;  
                            case "e-sopa":
                                category.push({esp:cat, ch:"汤包类", prioridad:57});
                            break;    
                            case "e-legumbres":
                                category.push({esp:cat, ch:"谷物类", prioridad:58});
                            break;
                            case "e-snack":
                                category.push({esp:cat, ch:"点心零食类", prioridad:59});
                            break;
                            case "e-snackLatas":
                                category.push({esp:cat, ch:"甜品罐头类", prioridad:60});
                            break;    
                            case "e-bebida":
                                category.push({esp:cat, ch:"饮料/酒类", prioridad:61});
                            break;  
                            case "e-te":
                                category.push({esp:cat, ch:"茶/即溶饮品类", prioridad:62});
                            break;   
                            case "e-fideo":
                                category.push({esp:cat, ch:"面食类", prioridad:63});
                            break;    
                            case "e-harina":
                                category.push({esp:cat, ch:"淀粉类", prioridad:64});
                            break;  
                            default:
                                break;
                        }
                  }
              //   }
      });
      docs.sort(function(a,b){
          return a.id - b.id;
          // return a.category.localeCompare(b.category);
      })
      category.sort(function(a,b){
          return a.prioridad - b.prioridad;
          // return a.category.localeCompare(b.category);
      })
      this.setState({products:docs, category:category, items:docs.slice(0, 10), hasMore:true});
  }

  calculateTotalPerItem = (quantity, product) => {

        if (quantity === 0) {
            return 0;
        }

        if (product.discountUnit3) {
            const discountUnit = product.discountUnit3;
            if ( quantity >= discountUnit) {
                const discountPrice = product.discountPrice3;
                const unitPrice = discountPrice/discountUnit;
                return quantity*unitPrice;
            }
        } 

        if (product.discountUnit2) {
            const discountUnit = product.discountUnit2;
            if ( quantity >= discountUnit) {
                const discountPrice = product.discountPrice2;
                const unitPrice = discountPrice/discountUnit;
                return quantity*unitPrice;
            }
        } 

        if (product.discountUnit) {
            const discountUnit = product.discountUnit;
            if ( quantity >= discountUnit) {
                const discountPrice = product.discountPrice;
                const unitPrice = discountPrice/discountUnit;
                return quantity*unitPrice;
            }
        }

        return quantity*product.unitPrice;
  }
 
  productAddedHandler = (id, cant, total) => {
      const currentShoppingCart = [...this.state.shoppingCart];
      var products = [...this.state.products];
      var existItemInCart = false;

      for (const item of currentShoppingCart) {
          if (item.id === id){
              existItemInCart = true;
              var index = currentShoppingCart.indexOf(item);
              const currentItem =  currentShoppingCart[index];
              currentItem.cant = currentItem.cant + cant;
              currentItem.total = this.calculateTotalPerItem(currentItem.cant, item);
          }
      }

      if (!existItemInCart) {
          for (const item of products){
            if (item.id === id){
                const index = products.indexOf(item);
                products[index].cant = cant;
                products[index].total = total;
                currentShoppingCart.push(products[index]);
                break;
            }
          }
      }
      this.setState({shoppingCart:currentShoppingCart});
  }

  productRemoveHandler = (id) => {
     const currentShoppingCart = [...this.state.shoppingCart];
     for (const item of currentShoppingCart) {
          if (item.id === id){
              const index = currentShoppingCart.indexOf(item);
              currentShoppingCart.splice(index, 1);
              this.setState({shoppingCart:currentShoppingCart})
              break;
          }
      }
  }

  shoppingCartClearHandler = () => {
     this.setState({shoppingCart:[]});
  }

  categoryHandler = (category) => {
      this.setState({currentCategory:category, searchText:""});
      document.getElementById('searchInput').value = "";
  }

  handleSelectorChange = (event) => {
     this.categoryHandler(event.target.value);
  }

  searchIconClickedHandler = (event, text) => {
      let searchText = "";
      if (text) {
        searchText = text;
        document.getElementById('searchInput').value = text;
      }else{
        searchText = document.getElementById('searchInput').value;
      }
      this.setState({searchText: searchText.toLowerCase(), currentCategory: "all"});
  }

  clearSearchInput = () => {
    this.setState({searchText:""});
    document.getElementById('searchInput').value = "";
  }

  ignoreAccentsAndCase = (str) => {
    if (str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        str = str.toLowerCase();
        return str;
    }
  } 

  render(){ 
      return (
            <Router>
                <div className="App">
                        <Switch>
                            <Route path="/">
                                <ContactIcon />
                                <Header 
                                    items={this.state.shoppingCart.length} 
                                    productList={this.state.shoppingCart} 
                                    productRemoveHandler={this.productRemoveHandler} 
                                    totalPriceInCart={this.state.totalPriceInCart} 
                                    shoppingCartClearHandler={this.shoppingCartClearHandler}
                                    category={this.state.category}
                                    categoryHandler={this.categoryHandler} 
                                    clearSearchInput={this.clearSearchInput}
                                    searchIconClickedHandler={this.searchIconClickedHandler}
                                    />
                                <Home />
                                <div className="app__titleSection">
                                    <p className="app__productSectionTitle" id="scroll">禾富食品批发公司 Mayorista Distribuidora</p>
                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                        <input id="searchInput" className="app__searchBar" type="text" placeholder="查询您要的产品" />
                                        <IconButton style={{color:'#4DBBA3'}} component="span" onClick={ this.searchIconClickedHandler }>
                                            <SearchIcon fontSize="large" />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="app__productSection">
                                    <div className="app__category">
                                        <div className="app__webCategory">
                                            <p className="app__categoryTitle">商品分类</p>
                                            <Divider />
                                            <MultiSelectTreeView category={this.state.category} categoryHandler={this.categoryHandler} />
                                        </div>
                                        <FormControl className="app__mobileCategory">
                                                    <span style={{color:'green', fontWeight:'700', fontSize:'15px'}}>產品類別</span>
                                                    <Select
                                                    style={{padding:'5px 0px'}}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.currentCategory}
                                                    onChange={this.handleSelectorChange}
                                                    align="center"
                                                    >
                                                    {
                                                        this.state.category.map(category => {
                                                            const key = this.state.category.indexOf(category);
                                                            return <MenuItem key={key} style={{padding:'12px'}} value={category.esp}>{category.ch}</MenuItem>
                                                        })
                                                    }
                                                    </Select>
                                        </FormControl>                         
                                    </div>
                                    <div className="app__products">
                                                {   
                                                    this.state.searchText 
                                                    ?
                                                        <>
                                                        <p className="app__productSearchTitle">"{this.state.searchText}" 搜寻结果：</p>
                                                        {
                                                            this.state.products.map((product, index) => {
                                                                if ((product.productName.includes(this.state.searchText) || this.ignoreAccentsAndCase(product.productDescription).includes(this.state.searchText)) && product.disponible === true ){
                                                                    return <Product key={index} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
                                                                }else{
                                                                    return null;
                                                                }
                                                            })
                                                        }
                                                        </>
                                                       
                                                    :
                                                        this.state.currentCategory === "all"
                                                        ? 
                                                            this.state.products.map((product, index) => {
                                                                if (product.disponible === true){
                                                                    return <Product key={index} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
                                                                }else{
                                                                    return null;
                                                                }
                                                            })
                                                        :   
                                                            this.state.products.map((product, index) => {
                                                                if (product.category === this.state.currentCategory && product.disponible === true){
                                                                    return <Product key={index} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
                                                                }else{
                                                                    return null;
                                                                }
                                                            })
                                                }
                                     </div>                                   
                                </div>  
                                <ContactForm />
                                <Footer />
                            </Route>
                        </Switch>
                </div>
            </Router>
      ); 
  }
}

export default App;
