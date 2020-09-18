import React,  { Component } from 'react'
import { productsData } from './products'
import { db } from './firebase'
import Header from './Header/Header'
import Home from './Home/Home'
import ContactIcon from './ContactIcon/ContactIcon'
import Product from './Product/Product'
import ContactForm from './ContactForm/ContactFrom'
import Footer from './Footer/Footer'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';


class App extends Component {

  state = {
    products:[],
    shoppingCart:[],
    totalPriceInCart:0,
    category:[{esp:"all", ch:"全部商品", prioridad:0},],
    currentCategory:"all",
    items: [],
    hasMore: true,
    index: 1,
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

  getProductsFromJson = () => {
        const docs = [...this.state.products];
        const category = [...this.state.category];
        productsData.forEach((doc) => {
              //   if (doc.data().id < 535){
                  docs.push({...doc});
                  const cat =  doc.category;
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
                                category.push({esp:cat, ch:"调味类/南北干货-代购", prioridad:2});
                            break;
                            case "e-vinagre":
                                category.push({esp:cat, ch:"醋类-代购", prioridad:2});
                            break;
                            case "e-aceite":
                                category.push({esp:cat, ch:"酱油/香油类-代购", prioridad:2});
                            break;
                            case "e-pickles":
                                category.push({esp:cat, ch:"腌制酱菜类-代购", prioridad:2});
                            break;
                            case "e-hierbaMedicinal":
                                category.push({esp:cat, ch:"中药材类-代购", prioridad:3});
                            break;  
                            case "e-sopa":
                                category.push({esp:cat, ch:"汤包类-代购", prioridad:3});
                            break;    
                            case "e-legumbres":
                                category.push({esp:cat, ch:"谷物类-代购", prioridad:4});
                            break;
                            case "e-snack":
                                category.push({esp:cat, ch:"点心零食类-代购", prioridad:4});
                            break;
                            case "e-snackLatas":
                                category.push({esp:cat, ch:"甜品罐头类-代购", prioridad:4});
                            break;    
                            case "e-fideo":
                                category.push({esp:cat, ch:"面食类-代购", prioridad:3});
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
        var total = 0;
        var rest = quantity;

        // 2 discounts plan exists 
        if (product.discountUnit2) {
            const discountUnit2 = product.discountUnit2;
            if ( rest >= discountUnit2) {
                const x = Math.trunc(rest/discountUnit2);
                total = (product.discountPrice2 * x);
                rest = rest - (discountUnit2*x);
            }
        }

        // 1 discount plan exists
        if (product.discountUnit) {
            const discountUnit = product.discountUnit;
            if ( rest >= discountUnit) {
                const x = Math.trunc(rest/discountUnit);
                total = total + (product.discountPrice * x) + (product.unitPrice * (rest % discountUnit));
            }else{
                if (rest >= 0){
                    total = total + (rest * product.unitPrice);
                }
            }
        }

        //  0 discount plan exists
        if (!product.discountUnit && !product.discountUnit2) {
            total = total + (rest * product.unitPrice);
        }

        return total;
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
      this.setState({currentCategory:category});
  }

  handleSelectorChange = (event) => {
     this.categoryHandler(event.target.value);
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
                                    categoryHandler={this.categoryHandler}/>
                                <Home />
                                <p className="app__productSectionTitle" id="scroll">超值優惠產品</p>
                                <div className="app__productSection">
                                    <div className="app__category">
                                        <div className="app__webCategory">
                                        <p>商品分類</p>
                                        <Divider />
                                        { 
                                            this.state.category.map(category => {
                                                const key = this.state.category.indexOf(category);
                                                return <Button 
                                                            key={key} 
                                                            className="app__categoryBtn" 
                                                            onClick={()=>this.categoryHandler(category.esp)}>
                                                                {category.ch}
                                                        </Button>
                                            })
                                        }
                                        </div>
                                        <FormControl className="app__mobileCategory">
                                                    <span style={{color:'green', fontWeight:'700'}}>產品類別</span>
                                                    <Select
                                                    style={{padding:'15px 0px'}}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.currentCategory}
                                                    onChange={this.handleSelectorChange}
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
                                        {/* <Grid container justify="center" spacing={0} className="app__products"> */}
                                                {   
                                                    this.state.currentCategory === "all" 
                                                    ? 
                                                        <>
                                                        { this.state.products.map((product, index) => {
                                                            // if (product.hot === true){
                                                                return <Product key={index} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
                                                            // }else{
                                                            //     return null;
                                                            // }
                                                        })}
                                                        
                                                        <p style={{marginTop:'30px', fontSize:'24px'}}>*** 更多超值商品請參考分類 ***</p>
                                                        </>
                                                        
                                                    :   
                                                        this.state.products.map((product, index) => {
                                                        if (product.category === this.state.currentCategory){
                                                            return <Product key={index} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
                                                        }else{
                                                            return null;
                                                        }
                                                         })
                                                }
                                            
                                        {/* </Grid>   */}
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
