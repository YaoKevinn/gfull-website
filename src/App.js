import React,  { Component } from 'react';
import { db } from './firebase'
import Header from './Header/Header'
import Home from './Home/Home'
import ContactIcon from './ContactIcon/ContactIcon'
import Product from './Product/Product'
import ContactForm from './ContactForm/ContactFrom'
import Footer from './Footer/Footer'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {

  state = {
    products:[],
    shoppingCart:[],
    totalPriceInCart:0,
    category:[],
    currentCategory:"all",
  }

  componentDidMount() {
      this.getProductsFromFirebase();
  }

  getProductsFromFirebase = () => {
        db.collection("products").onSnapshot((querySnapshot) => {
          const docs = [...this.state.products];
          const category = [...this.state.category];
          querySnapshot.forEach((doc) => {
                  docs.push({...doc.data()});
                  const cat =  doc.data().category;
                  const categoryEsp = category.map(function(a){return a.esp})
                  if (!categoryEsp.includes(cat)){
                        console.log(category)
                        switch (cat) {
                            case "frutasSecasPeladas":
                                category.push({esp:cat, ch:"堅果類"});
                            break;
                            case "frutasDesecadas":
                                category.push({esp:cat, ch:"乾果類"});
                            break;
                            case "porotos":
                                category.push({esp:cat, ch:"干豆類"});
                            break;
                            case "azucares":
                                category.push({esp:cat, ch:"糖類"});
                            break;  
                            case "otros":
                                category.push({esp:cat, ch:"其他"});
                            break;                
                            default:
                                break;
                        }
                  }
        });
        docs.sort(function(a,b){
            return a.id - b.id;
        })
        this.setState({products:docs, category:category});
      });
  }

  calculateTotalPerItem = (quantity, product) => {
    var total = 0;
    const discKgs = product.discountKgs;
    if ( quantity >= discKgs && product.discountKgs !== 0) {
        const x = Math.trunc(quantity/discKgs);
        total = (product.priceKgs * x) + (product.price1kg * (quantity % discKgs));
    }else{
        total = quantity * product.price1kg;
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

  render(){  

      return (
            <Router>
                <div className="App">
                        <Switch>
                            <Route path="/">
                                <ContactIcon />
                                <Header 
                                  items={this.state.shoppingCart.length} productList={this.state.shoppingCart} productRemoveHandler={this.productRemoveHandler} totalPriceInCart={this.state.totalPriceInCart} shoppingCartClearHandler={this.shoppingCartClearHandler}/>
                                <Home />
                                <p className="app__productSectionTitle">超值優惠產品</p>
                                <div className="app__productSection">
                                    <div className="app__category">
                                        <p>商品分類</p>
                                        <Divider style={{margin:'10px 0'}} />
                                        <Button className="app__categoryBtn" onClick={()=>this.categoryHandler("all")}>全部</Button>
                                        {   this.state.category.map(category => {
                                            const key = this.state.category.indexOf(category);
                                            return <Button key={key} className="app__categoryBtn" onClick={()=>this.categoryHandler(category.esp)}>{category.ch}</Button>
                                            })
                                        }                                  
                                    </div>
                                    <Grid container justify="center" spacing={2}>
                                        {this.state.products.map(product => {
                                            const currentCategory = this.state.currentCategory;
                                            if (product.category === currentCategory || currentCategory === "all" ){
                                                return <Product key={product.id} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}
                                            />
                                            }
                                            return null;
                                        })}
                                    </Grid>       
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
