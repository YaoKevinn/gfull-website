import React,  { Component } from 'react';
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
    products:[
        {
          id: 1,
          productImage:"aduki.jpg",
          productName:"優質小紅豆",
          productDescription:"Aduki",
          price1kg:220,
          discountKgs:5,
          priceKgs:990,
        },
        {
          id: 2,
          productImage:"porotoMung.jpg",
          productName:"優質綠豆",
          productDescription:"Poroto Mung.",
          price1kg:160,
          discountKgs:5,
          priceKgs:720,
        },
        {
          id: 3,
          productImage:"arandanosRojos.jpg",
          productName:"優質蔓越莓乾",
          productDescription:"Arandanos Rojos",
          price1kg:1150,
          discountKgs:2,
          priceKgs:2090,
        },
        {
          id: 4,
          productImage:"ciruela.jpg",
          productName:"漂亮大顆李子乾",
          productDescription:"Ciruela Pres. Gigante",
          price1kg:890,
          discountKgs:2,
          priceKgs:1640,
        },
        {
          id: 5,
          productImage:"nuezMariposa.jpg",
          productName:"頂級核桃 (大顆、無油耗味)",
          productDescription:"Nuez Mariposa Extra Light",
          price1kg:950,
          discountKgs:2,
          priceKgs:1780,
        },
        {
          id: 6,
          productImage:"almendraNonPareil.jpg",
          productName:"優質杏仁果",
          productDescription:"Almendra Non Pareil",
          price1kg:1290,
          discountKgs:0,
          priceKgs:0,
        },
        {
          id: 7,
          productImage:"castania.jpg",
          productName:"優質腰果",
          productDescription:"Castañas de Cajú W4",
          price1kg:1050,
          discountKgs:0,
          priceKgs:0,
        },
        {
          id: 8,
          productImage:"pistacho.jpg",
          productName:"開心果",
          productDescription:"Pistacho",
          price1kg:1900,
          discountKgs:2,
          priceKgs:3600,
        },
        {
          id: 9,
          productImage:"mani.jpg",
          productName:"優質花生 (生)",
          productDescription:"Maní",
          price1kg:200,
          discountKgs:5,
          priceKgs:800,
        },
        {
          id: 10,
          productImage:"maniSinSal.jpg",
          productName:"無鹽花生",
          productDescription:"Maní sin sal",
          price1kg:160,
          discountKgs:5,
          priceKgs:750,
        },
    ],
    shoppingCart:[],
    totalPriceInCart:0,
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

      if (existItemInCart === false) {
          products[id-1].cant = cant;
          products[id-1].total = total;
          currentShoppingCart.push(products[id-1]);
      }

      this.setState({shoppingCart:currentShoppingCart});

      console.log(currentShoppingCart)
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
     this.setState({shoppingCart:[]})
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
