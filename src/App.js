import React,  { Component } from 'react';
import { db } from './firebase'
import Header from './Header/Header'
import Home from './Home/Home'
import ContactIcon from './ContactIcon/ContactIcon'
import Product from './Product/Product'
import ContactForm from './ContactForm/ContactFrom'
import Footer from './Footer/Footer'
import Grid from '@material-ui/core/Grid'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {


  state = {
    products:[],
    shoppingCart:[],
    totalPriceInCart:0,
  }

  componentDidMount() {
      this.getProductsFromFirebase();
  }

  getProductsFromFirebase = async () => {
      db.collection("products").onSnapshot((querySnapshot) => {
        const docs = [...this.state.products];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
        });
        this.setState({products:docs});
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


  render(){  
      return (
        <Router>
            <div className="App">
                    <Switch>
                        <Route path="/">
                          <ContactIcon />
                          <Header items={this.state.shoppingCart.length} productList={this.state.shoppingCart} productRemoveHandler={this.productRemoveHandler} totalPriceInCart={this.state.totalPriceInCart} shoppingCartClearHandler={this.shoppingCartClearHandler}/>
                          <Home />
                          <div className="app__productSection">
                               <p className="app__productSectionTitle">超值優惠產品</p>
                              <Grid container justify="center" spacing={3}>
                                  {this.state.products.map(product => {
                                    return <Product key={product.id} pObj={product} addToCart={this.productAddedHandler} calculateTotalPerItem={this.calculateTotalPerItem}/>
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
