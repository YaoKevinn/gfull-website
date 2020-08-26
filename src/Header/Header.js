import React, { Component } from 'react'
import './Header.css'
import logoImg from '../images/logo.png'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@material-ui/core'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            drawerOpen: false,
            name:"",
            address:"",
            phone:"",
            email:"",
            subject:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "email_order_list_template",
                "drawer__orderListForm",
                "user_iKgHAL704pABw8EMZ4EHh"
            )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
        alert('郵件已寄出, 我們將盡快回復您');

        this.props.shoppingCartClearHandler();

        this.setState({
            name:"",
            address:"",
            phone:"",
            email:"",
            subject:""
        });
    }
    
    getAllProductsAsAString = () => {
        var productString = '';
        const cartList = [...this.props.productList];
        if (cartList.length !== 0){
            for (const item of cartList) {
                //falta cambio
                productString = productString + item.productName + ' x ' + item.cant + ' Kg  $' + item.total + '<br />';
            }
            productString = productString + '<br/><br/>總計: $' + String(this.getTotalPriceInCart());
        }
        return productString;
    }

    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({drawerOpen: open });
    };

    // shoppingCartProducts = this.props.productList.slice();

    getTotalPriceInCart = ()=> {
        var totalPrice = 0;
        const cartList = [...this.props.productList];
        if (cartList.length !== 0){
            for (const item of cartList) {
                totalPrice = totalPrice + item.total
            }
        }else{
            return 0;
        }
        return totalPrice;
    }

    list = () => (
        <div
          role="presentation"
          onClick={()=>this.toggleDrawer(false)}
          className="overflow-scroll"
        >
          <List className="header__drawer">
            <ListItem alignItems="center"><ShoppingCartIcon /><span className="cartList__title">購物車</span></ListItem>
            <Divider />
            {this.props.productList.length !== 0 ?
                this.props.productList.map((item) => (
                <ListItem alignItems="flex-start" key={item.id}>
                    <div className="cartList__itemSection">
                        <ListItemText
                            primary={item.productName+' x '+item.cant+' Kg  $'+item.total}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    >
                                    {item.productDescription}
                                    </Typography>
                                </React.Fragment>}/>
                        <IconButton className="cartList__removeBtn" aria-label="delete" onClick={()=>this.props.productRemoveHandler(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </ListItem>
            )): <ListItem alignItems="center"><span className="cartList__emptyText">**尚未添加任何產品至購物車**</span></ListItem> }
            </List>
          <Divider />
                <ListItem className="cartList__totalPriceSection" alignItems="flex-start">
                        <span>總計:</span>
                        <span className="cartList__totalPrice">ARS ${this.getTotalPriceInCart()}</span>
                </ListItem>
          <Divider />
          <List alignitems="center">
                <form id="drawer__orderListForm" onSubmit={this.handleSubmit.bind(this)} >
                    <input 
                        type="hidden" 
                        id="products" 
                        name="products"
                        value={this.getAllProductsAsAString()} 
                    />
                    <label className="drawer__orderListTitle">** 請輸入送貨細節及聯絡方式 **</label>
                    <TextField 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="drawer__formInput" 
                            label="收貨人" 
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="text" 
                            id="address"
                            name="address" 
                            className="drawer__formInput" 
                            label="送貨地址" 
                            value={this.state.address}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="text" 
                            id="phone"
                            name="phone" 
                            className="drawer__formInput" 
                            label="聯絡電話" 
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="email" 
                            id="email"
                            name="email" 
                            className="drawer__formInput" 
                            label="電子郵件" 
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <br/>
                        <TextField
                            type="text"
                            id="subject"
                            name="subject"
                            className="drawer__formInput"
                            placeholder="備註..."
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this)}
                            multiline
                            rows={5}
                            rowsMax={20}
                            variant="outlined"
                            />
                        <p style={{color:'gray'}}> (*)必填項目</p>
                        <br/>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="drawer__OrderListConfirmBtn"
                        >
                            確認內容並寄送
                        </Button>
                </form>
          </List>
          <Divider />
          <List alignitems="center">
              <ListItem className="cartList__continueBtn" button key={'繼續新增更多商品'} onClick={this.toggleDrawer(false)} >
                    <ListItemText primary={'繼續新增更多商品'} align="center" />
              </ListItem>
          </List>
        </div>
    );

    render(){
        return (
            <nav className="header">
                <Grid container spacign={0} alignItems="center">
                    {/* logo on the left -> img */}
                    <Grid item xs={12} sm={3} className="header__logoSection">
                        <Link to="/">
                            <img 
                                className="header__logo" 
                                src={logoImg}
                                alt="amazon-icon"
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={7}>
                        <div className="header__container">
                                <Button className="header__navItem" href="#contactForm" >聯絡我們</Button>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={1} align="center">
                        <Button className="header__shoppingCart">
                                 <Badge badgeContent={this.props.items} color="error">
                                     <ShoppingCartIcon className="header__shoppingCartIcon" fontSize="large" onClick={this.toggleDrawer(true)}/>
                                </Badge>
                        </Button>
                    </Grid>
                </Grid>
                <React.Fragment key={'right'}>
                    <Drawer anchor={'right'} open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
                        {this.list()}
                    </Drawer>
                </React.Fragment>
    
            </nav>
        )
    }
}

export default Header